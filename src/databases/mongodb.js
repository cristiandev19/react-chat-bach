const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT, {
      useNewUrlParser    : true,
      useUnifiedTopology : true,
      useCreateIndex     : true,
    });
  } catch (error) {
    throw new Error('Algo salio mal en la coneccion a mongo');
  }
};

module.exports = {
  dbConnection,
};
