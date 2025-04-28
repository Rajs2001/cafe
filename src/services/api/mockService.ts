import type {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import { API_CONFIG } from './apiClient';
import { mockData } from './mockData';

/**
 * Setup mock interceptors for Axios in development mode
 * This allows us to develop the frontend without a real backend
 */
export const setupMockInterceptors = (axiosInstance: AxiosInstance): void => {
  // Only enable mocks in development with the flag enabled
  if (process.env.NODE_ENV !== 'development' || !API_CONFIG.ENABLE_MOCK) {
    return;
  }

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    response => response, // Pass through real responses
    (error) => {
      // Only intercept if the error is a network error or if we're in mock mode
      if (!error.response || error.response.status === 404) {
        const config = error.config as AxiosRequestConfig;

        // Create a mock response based on the request
        const mockResponse = createMockResponse(config);

        if (mockResponse) {
          console.log(`[MOCK] Intercepted request to ${config.url}`, mockResponse);
          return Promise.resolve(mockResponse);
        }
      }

      return Promise.reject(error);
    },
  );
};

/**
 * Create a mock response based on the request
 */
function createMockResponse(config: AxiosRequestConfig): AxiosResponse | null {
  const { url, method } = config;

  if (!url) {
    return null;
  }

  // Extract the endpoint from the URL
  const endpoint = url.replace(API_CONFIG.BASE_URL, '');

  // Handle different endpoints
  if (endpoint.startsWith('/products')) {
    return handleProductsEndpoint(endpoint, method, config);
  }

  if (endpoint.startsWith('/users')) {
    return handleUsersEndpoint(endpoint, method, config);
  }

  if (endpoint.startsWith('/counter')) {
    return handleCounterEndpoint(endpoint, method, config);
  }

  return null;
}

/**
 * Handle products endpoints
 */
function handleProductsEndpoint(
  endpoint: string,
  method?: string,
  config?: AxiosRequestConfig,
): AxiosResponse | null {
  // GET /products
  if (endpoint === '/products' && method === 'get') {
    return {
      data: mockData.products.getProducts(),
      status: 200,
      statusText: 'OK',
      headers: {},
      config: config as InternalAxiosRequestConfig,
    };
  }

  // GET /products/categories
  if (endpoint === '/products/categories' && method === 'get') {
    return {
      data: mockData.products.getCategories(),
      status: 200,
      statusText: 'OK',
      headers: {},
      config: config as InternalAxiosRequestConfig,
    };
  }

  // GET /products/:id
  const productIdMatch = endpoint.match(/^\/products\/([^/]+)$/);
  if (productIdMatch && method === 'get') {
    const productId = productIdMatch[1];
    return {
      data: productId ? mockData.products.getProductById(productId) : null,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: config as InternalAxiosRequestConfig,
    };
  }

  return null;
}

/**
 * Handle users endpoints
 */
function handleUsersEndpoint(
  endpoint: string,
  method?: string,
  config?: AxiosRequestConfig,
): AxiosResponse | null {
  // GET /users/me
  if (endpoint === '/users/me' && method === 'get') {
    return {
      data: mockData.users.getCurrentUser(),
      status: 200,
      statusText: 'OK',
      headers: {},
      config: config as InternalAxiosRequestConfig,
    };
  }

  // POST /users/login
  if (endpoint === '/users/login' && method === 'post') {
    return {
      data: mockData.users.login(),
      status: 200,
      statusText: 'OK',
      headers: {},
      config: config as InternalAxiosRequestConfig,
    };
  }

  return null;
}

/**
 * Handle counter endpoints
 */
function handleCounterEndpoint(
  endpoint: string,
  method?: string,
  config?: AxiosRequestConfig,
): AxiosResponse | null {
  // GET /counter
  if (endpoint === '/counter' && method === 'get') {
    return {
      data: mockData.counter.getCount(),
      status: 200,
      statusText: 'OK',
      headers: {},
      config: config as InternalAxiosRequestConfig,
    };
  }

  // POST /counter/increment
  if (endpoint === '/counter/increment' && method === 'post') {
    const data = JSON.parse(config?.data || '{}');
    const increment = data.increment || 1;

    return {
      data: mockData.counter.increment(increment),
      status: 200,
      statusText: 'OK',
      headers: {},
      config: config as InternalAxiosRequestConfig,
    };
  }
  return null;
}