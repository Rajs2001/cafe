'use client';

import type { AxiosError } from 'axios';
import { clientLogger } from '@/libs/ClientLogger';
import { useCallback, useEffect, useState } from 'react';

type UseApiOptions<T> = {
  initialData?: T;
  onSuccess?: (data: T) => void;
  onError?: (error: Error | AxiosError) => void;
  enabled?: boolean;
  deps?: any[];
};

/**
 * Hook for data fetching with API services
 * @example
 * ```tsx
 * const { data, loading, error, refetch } = useApi(
 *   () => userService.getCurrentUser(),
 *   { onSuccess: (user) => console.log(user) }
 * );
 * ```
 */
export function useApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions<T> = {},
) {
  const {
    initialData,
    onSuccess,
    onError,
    enabled = true,
    deps = [],
  } = options;

  const [data, setData] = useState<T | undefined>(initialData);
  const [loading, setLoading] = useState<boolean>(enabled);
  const [error, setError] = useState<Error | AxiosError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      clientLogger.debug('API call successful', { endpoint: apiCall.name });
      setData(result);
      onSuccess?.(result);
      return result;
    } catch (err) {
      const error = err as Error | AxiosError;
      clientLogger.error('API call failed', { error, endpoint: apiCall.name });
      setError(error);
      onError?.(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [apiCall, onSuccess, onError]);

  // Fetch data on mount and when dependencies change
  useEffect(() => {
    if (enabled) {
      fetchData().catch(() => {
        // Error is already handled in fetchData
      });
    }
  }, [enabled, fetchData, ...deps]);

  // Function to manually refetch data
  const refetch = useCallback(() => {
    return fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
}

/**
 * Hook for mutation operations with API services
 * @example
 * ```tsx
 * const { mutate, loading, error } = useMutation(
 *   (data) => userService.updateProfile(data),
 *   { onSuccess: () => toast.success('Profile updated!')},
 * );
 * // Then call it with:
 * mutate({ name: 'New Name' });
 * ```
 */
export function useMutation<TData, TVariables = any>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options: {
    onSuccess?: (data: TData, variables: TVariables) => void;
    onError?: (error: Error | AxiosError, variables: TVariables) => void;
  } = {},
) {
  const { onSuccess, onError } = options;
  const [data, setData] = useState<TData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | AxiosError | null>(null);

  const mutate = useCallback(
    async (variables: TVariables) => {
      try {
        setLoading(true);
        setError(null);
        const result = await mutationFn(variables);
        clientLogger.debug('Mutation successful', { mutation: mutationFn.name });
        setData(result);
        onSuccess?.(result, variables);
        return result;
      } catch (err) {
        const error = err as Error | AxiosError;
        clientLogger.error('Mutation failed', { error, mutation: mutationFn.name });
        setError(error);
        onError?.(error, variables);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [mutationFn, onSuccess, onError],
  );

  return { mutate, data, loading, error };
}
