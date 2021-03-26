const authUtils = require('./auth.utils');

exports.loginEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    const result = authUtils.signToken({ email, isLoged: true });
    return res.status(200).send({
      msj   : 'Ingreso existoso',
      token : result,
    });
  } catch (error) {
    next(error);
  }
};

exports.verifyLogin = (req, res, next) => {
  try {
    const result = authUtils.verifyToken(req.query.token);
    if (result.error) {
      throw new Error(result.msj);
    }
    res.status(200).send({
      msj: result.msj,
    });
  } catch (error) {
    next(error);
  }
};
