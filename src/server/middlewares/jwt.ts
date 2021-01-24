import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { UNAUTHORIZED } from '@server/utils/errorMessages';

const secret = process.env.JWT_SECRET || '';

const jwt = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.token;

  verify(token, secret, (err: unknown) => {
    if (err) {
      return next(UNAUTHORIZED);
    }

    next();
  });
};

export default jwt;
