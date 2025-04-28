import { BaseService } from './baseService';

// Types
export interface CounterData {
  count: number;
}

export interface IncrementRequest {
  increment: number;
}

/**
 * Service for counter-related API operations
 */
export class CounterService extends BaseService {
  protected endpoint = '/counter';

  /**
   * Get the current counter value
   */
  async getCount(): Promise<CounterData> {
    return this.get<CounterData>();
  }

  /**
   * Increment the counter
   */
  async increment(value: number): Promise<CounterData> {
    return this.post<CounterData>('increment', { increment: value });
  }
}

// Create a singleton instance
export const counterService = new CounterService();
