import server from '@server/server';
import logger from '@server/shared/Logger';
import ErrorHandler from '@server/shared/ErrorHandler';

const port = Number(process.env.PORT || 3000);

const errorHandler = new ErrorHandler();

server.listen(port, () => {
  logger.info(`Serving at http://localhost:${port}`)
});

(process as NodeJS.EventEmitter)
  .on('unhandledRejection', (reason: string, _: Promise<any>) => {
    throw reason;
  });

(process as NodeJS.EventEmitter)
  .on('uncaughtException', (error: Error) => {
    errorHandler.handleError(error);
    if (!errorHandler.isTrustedError(error)) process.exit(1);
  });
