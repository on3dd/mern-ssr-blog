import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

import {
  USER_DOES_NOT_EXIST,
  USER_CREDENTIALS_ARE_INCOMPLETE,
} from '@server/utils/errorMessages';

import AuthController from '@server/controllers/auth';

const router = Router();
const controller = new AuthController();

const secret = process.env.JWT_SECRET || '';

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  /** Check if user credentials are complete  */
  if (!username || !password) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      data: null,
      error: USER_CREDENTIALS_ARE_INCOMPLETE,
    });
  }

  const user = await controller.authenticate({
    username,
  });

  /** Check if user exist  */
  if (user === null) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      data: null,
      error: USER_DOES_NOT_EXIST,
    });
  }

  const validate = await user.isValidPassword(password);

  /** Check if user password is valid  */
  if (!validate) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      data: null,
      error: USER_DOES_NOT_EXIST,
    });
  }

  /** This is what ends up in our JWT */
  const payload = {
    _id: user._id,
    username: user.username,
    expires:
      Date.now() + Number(process.env.JWT_EXPIRATION_MS),
  };

  /** Generate a signed json web token and return it in the response */
  const token = sign(JSON.stringify(payload), secret);

  console.log('token', token);

  /** Assign our jwt to the cookie */
  res.cookie('token', token, {
    httpOnly: true,
    secure: false, // TODO: change with "true"
    // domain: 'localhost',
    // path: '/',
  });

  return res
    .status(StatusCodes.OK)
    .send({ data: user, error: null });
});

export default router;
