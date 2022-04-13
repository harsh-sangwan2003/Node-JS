const util = require('util');
//Overriding console.log
// console.log = function (val) {

//     process.stdout.write("Process says -> " + val + "\n");
// }

// console.log("Hello Node");

//1.console.log is using util.format for formatting
var myName = "Harsh";
// console.log("My name is: %s", name);
var result = util.format('My name is: %s', myName);
console.log(result);

const obj = {

    name: 'Harsh',
    courses: {

        sections: {

            content: {

                text: 'JavaScript',
                format: {

                    webFormat: {

                        json: { a: 10, b: 10 }
                    }
                }
            }
        }
    }
};

//2.console.dir is using util.inspect to traverse down the object
// console.dir(obj, { depth: 1 });
console.log(util.inspect(obj, { depth: 6 }));