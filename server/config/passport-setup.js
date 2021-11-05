const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const cookieExtractor = ({ cookies: { token } }) => {
  return token ? token : null;
};

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

const jwtStrategy = new JwtStrategy(jwtOptions, ({ _id }, done) => {
  done(null, { userId: _id });
});

module.exports = (passport) => {
  passport.use("jwt", jwtStrategy);
};
