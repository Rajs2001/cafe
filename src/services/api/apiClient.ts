import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import axiosRetry from 'axios-retry';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { setupMockInterceptors } from './mockService';
import { handleApiError } from './errorHandler';
import { logger } from '@/libs/Logger';

// Types
export interface ApiErrorResponse {
  message: string;
  code?: string;
  details?: Record<string, any>;
}

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT ? parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT) : 30000, // 30 seconds
  RETRY_COUNT: 3,
  RETRY_DELAY: 1000, // 1 second
  CACHE_MAX_AGE: 5 * 60 * 1000, // 5 minutes
  ENABLE_MOCK: process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_API_ENABLE_MOCK === 'true',
};

// Check if we're running in a browser environment
const isBrowser = typeof window !== 'undefined';

// Import the client logger if we're in a browser environment
const clientLogger = isBrowser
  ? require('@/libs/ClientLogger').clientLogger
  : null;

// Create Axios instance
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  // Add request interceptor
  client.interceptors.request.use(
    (config) => {
      // Log the request
      if (isBrowser && clientLogger) {
        clientLogger.debug('API Request', {
          url: config.url,
          method: config.method,
          params: config.params,
        });
      } else {
        logger.debug('API Request', {
          url: config.url,
          method: config.method,
          params: config.params,
        });
      }

      // Add authentication token
      const token = localStorage.getItem('auth_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      if (isBrowser && clientLogger) {
        clientLogger.error('API Request Error', { error });
      } else {
        logger.error('API Request Error', { error });
      }
      return Promise.reject(error);
    },
  );

  // Add response interceptor
  client.interceptors.response.use(
    (response) => {
      // Log the response
      if (isBrowser && clientLogger) {
        clientLogger.debug('API Response', {
          url: response.config.url,
          status: response.status,
          statusText: response.statusText,
        });
      } else {
        logger.debug('API Response', {
          url: response.config.url,
          status: response.status,
          statusText: response.statusText,
        });
      }
      return response;
    },
    (error: AxiosError<ApiErrorResponse>) => {
      // Process the error through our error handler
      const apiError = handleApiError(error);

      // You can handle specific error types here
      if (apiError.type === 'unauthorized') {
        // Unauthorized - could trigger a logout
        // For example: redirect to login page
      }

      return Promise.reject(error);
    },
  );

  // Add retry logic
  axiosRetry(client, {
    retries: API_CONFIG.RETRY_COUNT,
    retryDelay: (retryCount) => {
      return retryCount * API_CONFIG.RETRY_DELAY;
    },
    retryCondition: (error) => {
      // Retry on network errors or 5xx server errors
      return (axiosRetry.isNetworkOrIdempotentRequestError(error) || (error.response?.status ? error.response.status >= 500 : false)
      );
    },
  });

  // Add token refresh logic
  const refreshAuthLogic = async (failedRequest: any) => {
    try {
      // Implement your token refresh logic here
      // For example:
      // const refreshToken = localStorage.getItem('refresh_token');
      // const response = await axios.post('/auth/refresh', { refreshToken });
      // const { token } = response.data;
      // localStorage.setItem('auth_token', token);

      // Update the failed request with the new token
      // failedRequest.response.config.headers.Authorization = `Bearer ${token}`;

      return Promise.resolve();
    } catch (error) {
      // If refresh token fails, redirect to login
      // For example:
      // window.location.href = '/sign-in';
      return Promise.reject(error);
    }
  };

  createAuthRefreshInterceptor(client, refreshAuthLogic, {
    statusCodes: [401], // Only trigger on 401 Unauthorized
  });

  // Add mock interceptors for development
  setupMockInterceptors(client);

  // Add caching
  return setupCache(client, {
    // Cache configuration
    ttl: API_CONFIG.CACHE_MAX_AGE,
    // Only cache GET requests
    methods: ['get'],
    // Configure caching behavior (e.g., exclude specific headers)
    interpretHeader: false, // Example: Disable interpreting cache headers
  });
};

// Create and export the API client
export const apiClient = createApiClient();

// Helper functions for common API operations
export const apiHelpers = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.get<T>(url, config);
    return response.data;
  },

  post: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.post<T>(url, data, config);
    return response.data;
  },

  put: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.put<T>(url, data, config);
    return response.data;
  },

  patch: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.patch<T>(url, data, config);
    return response.data;
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.delete<T>(url, config);
    return response.data;
  },
};
