const express    = require('express');

const app        = express();

const httpServer = require('http').createServer(app);

const options = {
  transport : ['websocket', 'polling', 'flashsocket'],
  cors      : {
    origin: '*',
    // origin: ['http://localhost:3000'],
  },
};
const io = require('socket.io')(httpServer, options);

const cors       = require('cors');
const bodyParser = require('body-parser');
const passport      = require('passport');

// const { dbConnection } = require('./src/databases/mongodb');
const { config } = require('./src/config/index');

// passport stuff
const jwtStrategry  = require('./src/strategies/jwt');

passport.use(jwtStrategry);

// Hacemos la conexion a mongodb
// dbConnection();

// Importamos los middlewares para manejar los errores
const { logErrors, errorHandler } = require('./src/utils/middleware/errorHandler');

// Aqui configuraciones
app
  .use(cors({ origin: '*' }))
  .use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  .use(bodyParser.json({ limit: '5mb' }));

// Importamos modulos
const exampleRouter = require('./src/modules/example/example.router');
const authRouter = require('./src/modules/auth/auth.router');

app.get('/hola', (req, res) => {
  console.log('holaaaaaa');
  return res.send({
    hola: 'holaaaaaaa',
  });
});
// Establecemos las rutas
app
  .use('/example', exampleRouter)
  .use('/auth', authRouter);

// Middleware para manejo de errores
app
  .use(logErrors)
  .use(errorHandler);

let chats = [];
io.on('connection', (socket) => {
  socket.on('newMessage', (newMessage) => {
    console.log('new client of the socket', newMessage);
    socket.broadcast.emit('updateChat', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

httpServer.listen(config.port);
