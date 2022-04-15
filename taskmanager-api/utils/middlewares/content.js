const { JSON } = require('../config');

module.exports = (req, res, next) => {

    res.set({ 'Content-Type': JSON });
    next();
}