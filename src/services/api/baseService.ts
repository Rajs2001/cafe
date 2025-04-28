import { AxiosRequestConfig } from 'axios';
import { apiHelpers } from './apiClient';

/**
 * Base service class that all API services should extend
 */
export abstract class BaseService {
  /**
   * Base endpoint for this service
   */
  protected abstract endpoint: string;

  /**
   * Get the full URL for a specific path
   */
  protected getUrl(path: string = ''): string {
    return `${this.endpoint}${path ? `/${path}` : ''}`;
  }

  /**
   * Get a resource or collection
   */
  protected async get<T>(path: string = '', config?: AxiosRequestConfig): Promise<T> {
    return apiHelpers.get<T>(this.getUrl(path), config);
  }

  /**
   * Create a new resource
   */
  protected async post<T>(path: string = '', data?: any, config?: AxiosRequestConfig): Promise<T> {
    return apiHelpers.post<T>(this.getUrl(path), data, config);
  }

  /**
   * Update a resource (replace)
   */
  protected async put<T>(path: string = '', data?: any, config?: AxiosRequestConfig): Promise<T> {
    return apiHelpers.put<T>(this.getUrl(path), data, config);
  }

  /**
   * Update a resource (partial)
   */
  protected async patch<T>(path: string = '', data?: any, config?: AxiosRequestConfig): Promise<T> {
    return apiHelpers.patch<T>(this.getUrl(path), data, config);
  }

  /**
   * Delete a resource
   */
  protected async delete<T>(path: string = '', config?: AxiosRequestConfig): Promise<T> {
    return apiHelpers.delete<T>(this.getUrl(path), config);
  }
}
