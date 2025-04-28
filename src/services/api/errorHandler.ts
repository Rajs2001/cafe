import { AxiosError } from 'axios';
import { logger } from '@/libs/Logger';

/**
 * API error types
 */
export enum ApiErrorType {
  NETWORK = 'network',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
  VALIDATION = 'validation',
  SERVER = 'server',
  UNKNOWN = 'unknown',
}

/**
 * API error interface
 */
export interface ApiError {
  type: ApiErrorType;
  status?: number;
  message: string;
  details?: Record<string, any>;
  originalError: Error | AxiosError;
}

/**
 * Handle API errors
 */
export function handleApiError(error: unknown): ApiError {
  // Log the error
  logger.error('API error', { error });
  
  // If it's an Axios error
  if (isAxiosError(error)) {
    // Network error
    if (error.code === 'ECONNABORTED' || !error.response) {
      return {
        type: ApiErrorType.NETWORK,
        message: 'Network error. Please check your connection and try again.',
        originalError: error,
      };
    }

    // Server responded with an error status
    const status = error.response.status;
    const data = error.response.data;

    // Handle different status codes
    switch (status) {
      case 401:
        return {
          type: ApiErrorType.UNAUTHORIZED,
          status,
          message: 'You are not authenticated. Please sign in to continue.',
          details: data as Record<string, any>,
          originalError: error,
        };
      
      case 403:
        return {
          type: ApiErrorType.FORBIDDEN,
          status,
          message: 'You do not have permission to perform this action.',
          details: data as Record<string, any>,
          originalError: error,
        };
      
      case 404:
        return {
          type: ApiErrorType.NOT_FOUND,
          status,
          message: 'The requested resource was not found.',
          details: data as Record<string, any>,
          originalError: error,
        };
      
      case 422:
        return {
          type: ApiErrorType.VALIDATION,
          status,
          message: 'Validation error. Please check your input and try again.',
          details: data as Record<string, any>,
          originalError: error,
        };
      
      case 500:
      case 502:
      case 503:
      case 504:
        return {
          type: ApiErrorType.SERVER,
          status,
          message: 'Server error. Please try again later.',
          details: data as Record<string, any>,
          originalError: error,
        };
      
      default:
        return {
          type: ApiErrorType.UNKNOWN,
          status,
          message: `An error occurred: ${error.message}`,
          details: data as Record<string, any>,
          originalError: error,
        };
    }
  }
  
  // If it's a regular Error
  if (error instanceof Error) {
    return {
      type: ApiErrorType.UNKNOWN,
      message: error.message || 'An unknown error occurred.',
      originalError: error,
    };
  }
  
  // If it's something else
  return {
    type: ApiErrorType.UNKNOWN,
    message: 'An unknown error occurred.',
    originalError: new Error(String(error)),
  };
}

/**
 * Type guard for Axios errors
 */
export function isAxiosError(error: any): error is AxiosError {
  return error && error.isAxiosError === true;
}
