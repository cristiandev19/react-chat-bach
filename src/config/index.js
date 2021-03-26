require('dotenv').config();

const config = {
  dev               : process.env.NODE_ENV !== 'production',
  port              : process.env.PORT || 3000,
  mongoConnect      : process.env.MONGO_CONNECT,
  authJwtSecret     : process.env.AUTH_JWT_SECRET,
  authJwtExpireTime : process.env.AUTH_JWT_EXPIRE_TIME,
};

module.exports = { config };
