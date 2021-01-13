import User from '@server/models/user';

const deserializeUser = (
  _id: any,
  done: (...args: any[]) => any,
) => {
  User.findOne({ _id }).then((user) => {
    done(null, user);

    return null;
  });
};

export default deserializeUser;
