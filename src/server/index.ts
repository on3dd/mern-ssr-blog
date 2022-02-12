import Db from '@server/db';
import Server from '@server/server';

import { logger } from '@server/shared/Logger';
import AppError from '@server/shared/AppError';
import ErrorHandler from '@server/shared/ErrorHandler';

const dbUrl = String(process.env.DATABASE_URL) || '';
const appPort = Number(process.env.APP_PORT) || 8000;

const db = Db.getInstance();
const server = Server.getInstance();

const errorHandler = ErrorHandler.getInstance();

const start = async () => {
  try {
    await db.connect(dbUrl);
    await server.start(appPort);

    logger.info(`Serving at http://localhost:${appPort} \n`);
  } catch (err) {
    throw new AppError('Error starting server', err, false);
  }
};

start();

(process as NodeJS.EventEmitter).on(
  'unhandledRejection',
  (reason: string) => {
    throw reason;
  },
);

(process as NodeJS.EventEmitter).on(
  'uncaughtException',
  (error: Error) => {
    errorHandler.handleError(error);

    if (!errorHandler.isTrustedError(error)) {
      process.exit(1);
    }
  },
);

// const shutdown = async () => {
//   logger.warn(
//     'SIGTERM signal received: closing HTTP server',
//   );

//   await server.close();

//   logger.warn('HTTP server closed');
// };

// (process as NodeJS.EventEmitter).on('SIGTERM', shutdown);
// (process as NodeJS.EventEmitter).on('SIGINT', shutdown);
