// module.exports = function (first, second) {

//     return first + second;
// }

module.exports.add = function add(first, second) {

    return first + second;
}

module.exports.sub = function sub(first, second) {

    return first - second;
}

module.exports.mul = function mul(first, second) {

    return first * second;
}

// function add(first, second) {

//     return first + second;
// }

// function sub(first, second) {

//     return first - second;
// }

// function mul(first, second) {

//     return first * second;
// }

// const calc = { add, sub, mul };

// const calc = {

//     add(first, second) {

//         return first + second;
//     },

//     sub(first, second) {

//         return first - second;
//     },

//     mul(first, second) {

//         return first * second;
//     }
// };

// module.exports = calc;

// module.exports = {

//     add(first, second) {

//         return first + second;
//     },

//     sub(first, second) {

//         return first - second;
//     },

//     mul(first, second) {

//         return first * second;
//     }
// };

console.log(module.exports);
console.log(exports);
console.log(module.exports === exports);