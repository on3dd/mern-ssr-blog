import Db from '@server/db';
import Server from '@server/server';

import logger from '@server/shared/Logger';
import AppError from '@server/shared/AppError';
import ErrorHandler from '@server/shared/ErrorHandler';

const url = String(process.env.DB_URL) || '';
const port = Number(process.env.PORT) || 3000;

const db = Db.getInstance();
const server = Server.getInstance();

const errorHandler = new ErrorHandler();

const start = async () => {
  try {
    await db.connect(url);
    await server.start(port);

    logger.info(`Serving at http://localhost:${port}`);
  } catch (err) {
    throw new AppError('Error starting server', err, false);
  }
};

start();

(process as NodeJS.EventEmitter).on('unhandledRejection', (reason: string) => {
  throw reason;
});

(process as NodeJS.EventEmitter).on('uncaughtException', (error: Error) => {
  errorHandler.handleError(error);

  if (!errorHandler.isTrustedError(error)) {
    process.exit(1);
  }
});
