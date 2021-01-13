const serializeUser = (
  user: any,
  done: (...args: any[]) => any,
) => {
  done(null, user._id);
};

export default serializeUser;
