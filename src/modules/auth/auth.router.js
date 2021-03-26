const express = require('express');

const router = express.Router();

const authController = require('./auth.controller');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router
  .post('/loginEmail', authController.loginEmail)
  .get('/verifyLogin', authController.verifyLogin);

module.exports = router;
