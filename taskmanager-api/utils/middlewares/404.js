const messageBundle = require('../../locales/en');
const { FILE_NOT_FOUND } = require('../config').STATUS_CODES;

module.exports = (request, response) => {

    response.status(FILE_NOT_FOUND).json({ message: messageBundle['resource.notfound'] });
}