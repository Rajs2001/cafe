import { logger } from '@/libs/Logger';
import { counterService } from '@/services/api';
import { API_CONFIG } from '@/services/api/apiClient';
import { mockData } from '@/services/api/mockData';

export const CurrentCount = async () => {

  try {
    let count = 0;

    // If we're in development with mocks enabled, use mock data
    if (API_CONFIG.ENABLE_MOCK) {
      count = mockData.counter.count;
    } else {
      // Real API call
      const response = await counterService.getCount();
      count = response.count;
    }

    logger.info('Counter fetched successfully');

    return (
      <div>
        Current count: {count}
      </div>
    );
  } catch (error) {
    logger.error('Failed to fetch counter', { error });

    return (
      <div className="text-red-500">
        Error loading counter
      </div>
    );
  }
};
