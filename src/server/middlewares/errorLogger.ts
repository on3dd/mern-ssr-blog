import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import ErrorHandler from '@server/shared/ErrorHandler';

const errorHandler = ErrorHandler.getInstance();

const errorLogger = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction,
) => {
  errorHandler.handleError(err);

  return res.status(StatusCodes.BAD_REQUEST).json({
    data: null,
    error: err.message,
  });
};

export default errorLogger;
