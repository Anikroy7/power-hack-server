const express = require('express');
const registerController = require('../controller/register.controller');

const router = express.Router();

router.route('/')
    .get(registerController.postUser)

module.exports = router