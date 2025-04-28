/**
 * Get the base URL of the application
 * This is used for constructing absolute URLs
 */
export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // In the browser, use the current origin
    return window.location.origin;
  }

  // In Node.js (server-side), use the environment variable or default
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

/**
 * Format a date string to a localized date
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Format a number as currency
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'USD',
) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Truncate a string to a maximum length and add ellipsis
 */
export const truncateString = (str: string, maxLength: number = 100) => {
  if (str.length <= maxLength) {
    return str;
  }
  return `${str.slice(0, maxLength)}...`;
};

/**
 * Delay execution for a specified time
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Retry a function with exponential backoff
 */
export const retry = async <T>(
  fn: () => Promise<T>,
  options: {
    maxRetries?: number;
    initialDelay?: number;
    maxDelay?: number;
    factor?: number;
    onRetry?: (error: Error, attempt: number) => void;
  } = {},
): Promise<T> => {
  const {
    maxRetries = 3,
    initialDelay = 1000,
    maxDelay = 30000,
    factor = 2,
    onRetry = () => {},
  } = options;

  let attempt = 0;
  let delayMs = initialDelay;

  while (true) {
    try {
      return await fn();
    } catch (error) {
      attempt++;

      if (attempt >= maxRetries) {
        throw error;
      }

      onRetry(error as Error, attempt);

      await new Promise(resolve => setTimeout(resolve, delayMs));

      delayMs = Math.min(delayMs * factor, maxDelay);
    }
  }
};
