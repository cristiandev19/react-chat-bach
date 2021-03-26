/* eslint-disable no-param-reassign */
const { User } = require('../models/User');
const Validator = require('../helpers/dao/Validator');

exports.createUser = ({
  email, password, profile,
}) => new Promise((resolve) => {
  try {
    const validator = new Validator();
    if (!email) validator.setMessage('El email el obligatorio');
    if (!password) validator.setMessage('La contraseña es obligatoria');
    if (!profile) validator.setMessage('Problemas con la informacion del usuario');
    if (validator.isInvalid()) {
      throw new Error(validator.message);
    }

    const user = new User({ email, password, profile });
    user.save();

    return resolve({ success: true, user });
  } catch (error) {
    return resolve({ error });
  }
});

exports.readUser = () => new Promise((resolve) => {
  try {
    return resolve({ success: true });
  } catch (error) {
    return resolve({ error });
  }
});

exports.updateUser = () => new Promise((resolve) => {
  try {
    return resolve({ success: true });
  } catch (error) {
    return resolve({ error });
  }
});

exports.deleteUser = () => new Promise((resolve) => {
  try {
    return resolve({ success: true });
  } catch (error) {
    return resolve({ error });
  }
});
