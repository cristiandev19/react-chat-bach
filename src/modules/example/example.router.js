const express = require('express');

const router = express.Router();
const passport = require('passport');

const exampleController = require('./example.controller');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/hola', exampleController.exampleHola);
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => res.status(200).send({
  example: 'este es el mensaje dentor de example',
}));

module.exports = router;