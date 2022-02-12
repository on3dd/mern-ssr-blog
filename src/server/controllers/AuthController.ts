import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UsersService } from '@server/services';
import {
  USER_CREDENTIALS_ARE_INCOMPLETE,
  USER_DOES_NOT_EXIST,
} from '@server/utils/errorMessages';
import { TokenPayload } from '@server';
import { sign } from 'jsonwebtoken';

export class AuthController {
  constructor(
    private readonly secret: string,
    private readonly usersService: UsersService,
  ) {}

  public async authenticate(req: Request, res: Response) {
    const { username, password } = req.body;

    /** Check if user credentials are complete  */
    if (!username || !password) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        data: null,
        error: USER_CREDENTIALS_ARE_INCOMPLETE,
      });
    }

    const user = await this.usersService.find({
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
    const payload: TokenPayload = {
      username,
      expires:
        Date.now() + Number(process.env.JWT_EXPIRATION_MS),
    };

    /** Generate a signed json web token and return it in the response */
    const token = sign(
      JSON.stringify(payload),
      this.secret,
    );

    /** Assign our jwt to the cookie */
    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // TODO: set to 'true'
    });

    return res.status(StatusCodes.OK).send({
      data: { username },
      error: null,
    });
  }
}
