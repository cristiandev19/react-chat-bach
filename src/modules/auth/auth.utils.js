const jwt = require('jsonwebtoken');
const { config } = require('../../config/index');

exports.signToken = (
  payload, secret = config.authJwtSecret,
) => jwt.sign(payload, secret, {
  expiresIn: process.env.JWT_EXPIRE_TIME,
});

exports.verifyToken = (
  token, secret = config.authJwtSecret,
) => {
  try {
    const verified = jwt.verify(token, secret);
    return {
      msj     : 'Autentificado con exito',
      payload : verified,
    };
  } catch (error) {
    return {
      msj: error.message || 'Problemas al verificar el token',
      error,
    };
  }
};
