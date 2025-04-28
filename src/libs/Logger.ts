import type { DestinationStream } from 'pino';
import pino from 'pino';
import { Env } from './Env';

// Check if we're running in a browser environment
const isBrowser = typeof window !== 'undefined';

// Create a browser-compatible logger
const createBrowserLogger = () => {
  // Simple console-based logger for the browser
  return pino({
    browser: {
      asObject: true,
    },
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
  });
};

// Create a Node.js logger with all features
const createNodeLogger = async () => {
  let stream: DestinationStream;

  // Dynamically import Node.js-specific modules
  const pretty = (await import('pino-pretty')).default;

  if (Env.LOGTAIL_SOURCE_TOKEN) {
    const logtail = (await import('@logtail/pino')).default;

    stream = pino.multistream([
      await logtail({
        sourceToken: Env.LOGTAIL_SOURCE_TOKEN,
        options: {
          sendLogsToBetterStack: true,
        },
      }),
      {
        stream: pretty(), // Prints logs to the console
      },
    ]);
  } else {
    stream = pretty({
      colorize: true,
    });
  }

  return pino({ base: undefined }, stream);
};

// Create and export the appropriate logger
export const logger = isBrowser
  ? createBrowserLogger()
  : // For server-side, we'll use a basic logger initially and replace it when the async imports complete
    (() => {
      // Create a temporary logger
      const tempLogger = pino({ level: 'info' });

      // Replace it with the full-featured logger when ready
      if (!isBrowser) {
        createNodeLogger().then(nodeLogger => {
          // Copy methods from nodeLogger to tempLogger
          Object.assign(tempLogger, nodeLogger);
        }).catch(err => {
          console.error('Failed to initialize logger:', err);
        });
      }

      return tempLogger;
    })();
