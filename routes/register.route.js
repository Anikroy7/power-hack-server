const express = require('express');
const registerController = require('../controller/register.controller');
const verityJwt = require('../middleware/verifyJwt');

const router = express.Router();

router.route('/')
    .post(registerController.registration)

module.exports = router