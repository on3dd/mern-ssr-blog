import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { TokenPayload } from '@server';

import {
  UNAUTHORIZED,
  AUTH_EXPIRED,
} from '@server/utils/errorMessages';

const secret = process.env.JWT_SECRET || '';

const jwt = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.token;

  verify(
    token,
    secret,
    (err: unknown, decoded: object | undefined) => {
      if (err || decoded === undefined) {
        return next(UNAUTHORIZED);
      }

      if (Date.now() > (decoded as TokenPayload).expires) {
        return next(AUTH_EXPIRED);
      }

      next();
    },
  );
};

export default jwt;
