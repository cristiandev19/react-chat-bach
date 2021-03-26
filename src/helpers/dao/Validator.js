module.exports = class Validator {
  constructor() {
    this.invalid = false;
    this.message = '';
  }

  setMessage(message) {
    this.message = message;
    this.invalid = true;
  }

  isInvalid() {
    return this.invalid;
  }
};
