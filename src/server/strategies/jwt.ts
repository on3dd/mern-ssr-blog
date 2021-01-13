import { Strategy } from 'passport-jwt';

const JWT = new Strategy(
  {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: (req) => req.cookies.token,
  },
  async (token, done) => {
    return Date.now() > token.expires
      ? done('jwt expired')
      : done(null, token);
  },
);

export default JWT;
