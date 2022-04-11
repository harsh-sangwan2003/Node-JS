// console.log(arguments);

// (function (exports, require, module, __filename, __dirname) {

//     console.log("Hello Node JS");
// })(); //IIFE

//Public pattern
// module.exports = {

//     add() { },
//     sub() { }
// }

const add = () => { }
const sub = () => { }
const mul = () => { }

const public = { sub, mul };
module.exports = public;