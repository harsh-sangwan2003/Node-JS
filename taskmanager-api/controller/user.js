const { SUCCESS } = require('../utils/config').STATUS_CODES;
const messageBundle = require('../locales/en');

const login = (request, response) => {

    console.log("Data received: ", request.body);
    // response.send('Login');
    response.status(SUCCESS).json({ message: messageBundle['login.success'] });
}

const register = (request, response) => {

    console.log("Data received: ", request.body);
    response.status(SUCCESS).json({ message: messageBundle['register.success'] });
}

module.exports = { login, register };