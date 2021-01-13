import { Strategy } from 'passport-local';

import options from '@server/strategies/options';

import User from '@server/models/user';

const Login = new Strategy(
  options,
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username });

      console.log('props', username, password);
      console.log('user', user);

      if (!user) {
        return done(null, false, {
          message: 'User not found',
        });
      }

      const validate = await user.isValidPassword(password);

      if (!validate) {
        return done(null, false, {
          message: 'Wrong Password',
        });
      }

      return done(null, user, {
        message: 'Logged in Successfully',
      });
    } catch (error) {
      return done(error);
    }
  },
);

export default Login;
