const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/User');
const { config } = require('../config/index');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.authJwtSecret; // normally store this in process.env.secret

// Aqui debemos cambiarlo para que llame a la BD por un id dentro del token
module.exports = new JwtStrategy(opts, (jwtPayload, done) => {
  User.findOne({ _id: jwtPayload.sub }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  });
});
