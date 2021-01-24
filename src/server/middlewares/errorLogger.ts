import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import ErrorHandler from '@server/shared/ErrorHandler';

const errorHandler = ErrorHandler.getInstance();

type Err = Error | string;

/** Note: It must be placed after the router! */
const errorLogger = (
  err: Err,
  req: Request,
  res: Response,
  _: NextFunction,
) => {
  const error = err instanceof Error ? err : new Error(err);

  errorHandler.handleError(error);

  return res.status(StatusCodes.BAD_REQUEST).json({
    data: null,
    error: error.message,
  });
};

export default errorLogger;
