import User from '../models/user';

const deserializeUser = (
  _id: string,
  done: (...args: any[]) => any,
) => {
  User.findOne({ _id }).then((user) => {
    done(null, user);

    return null;
  });
};

export default deserializeUser;
