const util = require('util');

// Overriding console.log
// console.log = function (val) {

//     // Takes string as an argument
//     process.stdout.write('Process ' + val + "\n");
// }

console.log("Node JS");

// console.log also has a feature of formatting
//formattig is acquired through util module

var myName = 'Harsh';
console.log('My name is %s', myName);

var result = util.format('My name is %s', myName);
console.log(result);

const obj = {

    name: 'Harsh',
    courses: {

        sections: {

            content: {

                text: 'JavaScript',
                format: {

                    webformat: {

                        json: { a: 10, b: 20 }
                    }
                }
            }
        }
    }
};

console.log(util.inspect(obj, { depth: 6 }));
// console.dir(obj, { depth: 6 });
console.log(obj);