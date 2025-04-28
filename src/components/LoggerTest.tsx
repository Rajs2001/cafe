'use client';

import { clientLogger } from '@/libs/ClientLogger';
import { useEffect } from 'react';

export const LoggerTest = () => {
  useEffect(() => {
    // Test client-side logging
    clientLogger.debug('Debug message from client component');
    clientLogger.info('Info message from client component');
    clientLogger.warn('Warning message from client component');
    clientLogger.error('Error message from client component');
  }, []);

  return (
    <div className="p-4 border rounded-md bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">Logger Test</h2>
      <p>Check the browser console for log messages.</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => {
          clientLogger.info('Button clicked!', { timestamp: new Date().toISOString() });
        }}
      >
        Log a message
      </button>
    </div>
  );
};
