import User from '../models/user';

const deserializeUser = (_id, done) => {
  User.findOne({ _id }).then((user) => {
    done(null, user);

    return null;
  });
};

export default deserializeUser;
