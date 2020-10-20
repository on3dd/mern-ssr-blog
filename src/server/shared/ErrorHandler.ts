import { logger } from '@server/shared/Logger';
import AppError from '@server/shared/AppError';

export default class ErrorHandler {
  private static instance: ErrorHandler;

  private constructor() {}

  public handleError(err: Error) {
    logger.error(err.stack);
  }

  public isTrustedError(error: Error) {
    if (error instanceof AppError) {
      return error.isOperational;
    }

    return false;
  }

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }

    return ErrorHandler.instance;
  }
}
