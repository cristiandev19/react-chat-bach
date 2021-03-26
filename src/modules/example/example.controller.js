exports.exampleHola = (req, res, next) => {
  try {
    return res.status(200).send({
      msj: 'Hola como estas',
    });
  } catch (error) {
    next(error);
  }
};
