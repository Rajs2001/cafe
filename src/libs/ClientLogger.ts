/**
 * A simple client-side logger that doesn't depend on Node.js modules
 * Use this in client components to avoid bundling issues
 */

// Log levels
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

// Determine the minimum log level based on environment
const getMinLogLevel = (): LogLevel => {
  return process.env.NODE_ENV === 'production' ? 'error' : 'debug';
};

// Map log levels to numeric values for comparison
const LOG_LEVEL_MAP: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

// The minimum log level to display
const MIN_LOG_LEVEL = getMinLogLevel();

// Check if a log level should be displayed
const shouldLog = (level: LogLevel): boolean => {
  return LOG_LEVEL_MAP[level] >= LOG_LEVEL_MAP[MIN_LOG_LEVEL];
};

// Format log data for output
const formatLogData = (data: any[]): any[] => {
  return data.map(item => {
    if (typeof item === 'object' && item !== null) {
      try {
        return JSON.stringify(item, null, 2);
      } catch (e) {
        return item;
      }
    }
    return item;
  });
};

// Create the client logger
export const clientLogger = {
  debug: (...data: any[]) => {
    if (shouldLog('debug')) {
      console.debug('[DEBUG]', ...formatLogData(data));
    }
  },
  
  info: (...data: any[]) => {
    if (shouldLog('info')) {
      console.info('[INFO]', ...formatLogData(data));
    }
  },
  
  warn: (...data: any[]) => {
    if (shouldLog('warn')) {
      console.warn('[WARN]', ...formatLogData(data));
    }
  },
  
  error: (...data: any[]) => {
    if (shouldLog('error')) {
      console.error('[ERROR]', ...formatLogData(data));
    }
  },
};
