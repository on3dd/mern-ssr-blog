import logger from '@server/shared/Logger';
import AppError from '@server/shared/AppError';

export default class ErrorHandler {
  public handleError(err: Error) {
    logger.error(err.message);
  }

  public isTrustedError(error: Error) {
    if (error instanceof AppError) {
      return error.isOperational;
    }

    return false;
  }
}
