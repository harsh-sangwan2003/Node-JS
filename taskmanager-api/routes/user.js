const express = require('express');
const route = express.Router();

const { LOGIN, REGISTER } = require('../utils/config').ROUTES.USER;
const controller = require('../controller/user');

route.post(LOGIN, controller.login);

route.post(REGISTER, controller.register);

module.exports = route;