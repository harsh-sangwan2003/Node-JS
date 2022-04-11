const fs = require('fs');
const path = require('path');

console.log("Start");
let fullPath = path.join(__dirname, 'sample.txt');
fs.readFile(fullPath, (err, buffer) => {

    if (err)
        console.log("Error is: ", err);

    else
        console.log("Buffer is: ", buffer.toString());
});

fullPath = path.join(__dirname, 'sample2.txt');
fs.readFile(fullPath, (err, buffer) => {

    if (err)
        console.log("Error is: ", err);

    else
        console.log("Buffer is: ", buffer.toString());
});

console.log("End");