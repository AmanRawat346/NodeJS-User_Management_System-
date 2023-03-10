const express = require('express');

const authController = require('../controller/authController');

const router = express.Router();

router.post('/login', authController.login);

router.post('/signUp', authController.signUp);

module.exports = router;
