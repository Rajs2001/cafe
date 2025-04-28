'use client';

import { logger } from '@/libs/Logger';
import { useEffect, useState } from 'react';

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode | ((error: Error, reset: () => void) => React.ReactNode);
};

/**
 * Error boundary component for handling errors in client components
 *
 * @example
 * ```tsx
 * <ErrorBoundary fallback={<div>Something went wrong</div>}>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 *
 * Or with a function:
 *
 * ```tsx
 * <ErrorBoundary
 *   fallback={(error, reset) => (
 *     <div>
 *       <p>Error: {error.message}</p>
 *       <button onClick={reset}>Try again</button>
 *     </div>
 *   )}
 * >
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 */
export function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Add error event listener
    const handleError = (event: ErrorEvent) => {
      event.preventDefault();
      setError(event.error);
      logger.error('Error caught by ErrorBoundary', { error: event.error });
    };

    // Add unhandled rejection listener
    const handleRejection = (event: PromiseRejectionEvent) => {
      event.preventDefault();
      setError(new Error(event.reason));
      logger.error('Unhandled rejection caught by ErrorBoundary', { reason: event.reason });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  // Reset the error state
  const reset = () => {
    setError(null);
  };

  // If there's an error, show the fallback
  if (error) {
    if (typeof fallback === 'function') {
      return <>{fallback(error, reset)}</>;
    }

    return fallback
      ? (
          <>{fallback}</>
        )
      : (
          <div className="p-4 border border-red-300 bg-red-50 rounded-md">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Something went wrong</h2>
            <p className="text-red-600 mb-4">{error.message}</p>
            <button
              onClick={reset}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Try again
            </button>
          </div>
        );
  }

  // Otherwise, render children
  return <>{children}</>;
}
