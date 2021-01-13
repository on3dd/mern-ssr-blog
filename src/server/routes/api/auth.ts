import { Router } from 'express';
import { authenticate } from 'passport';
import { sign } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

const router = Router();

const secret = process.env.JWT_SECRET || '';

router.post('/', (req, res) => {
  authenticate(
    'login',
    { session: false },
    (error, user) => {
      if (error || !user) {
        console.log('error', error);
        console.log('user', user);

        return res
          .status(StatusCodes.BAD_REQUEST)
          .send({ data: null, error });
      }

      /** This is what ends up in our JWT */
      const payload = {
        _id: user._id,
        username: user.username,
        expires:
          Date.now() +
          Number(process.env.JWT_EXPIRATION_MS),
      };

      /** assigns payload to req.user */
      req.login(payload, { session: false }, (error) => {
        if (error) {
          console.error(error);

          return res
            .status(StatusCodes.BAD_REQUEST)
            .send({ data: null, error });
        }

        /** generate a signed json web token and return it in the response */
        const token = sign(JSON.stringify(payload), secret);

        console.log('token', token);

        /** assign our jwt to the cookie */
        res.cookie('token', token, {
          // domain: 'localhost',
          // path: '/',
          httpOnly: true,
          // secure: true,
          secure: false,
        });

        return res
          .status(StatusCodes.OK)
          .send({ data: user });
      });
    },
  )(req, res);
});

export default router;
