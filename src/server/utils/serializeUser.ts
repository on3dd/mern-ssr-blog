const serializeUser = (user, done) => {
  done(null, user._id);
};

export default serializeUser;
