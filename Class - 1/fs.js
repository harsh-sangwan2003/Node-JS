// fs is not a global object so we need to import/require it
//Node comes with core libraries and fs is a core library 
const fs = require('fs');

var a = 10;
var b = 20;
var c = a + b;

const path = "C:\\Users\\hsang.000\\Desktop\\Harsh\\Web Development\\Brain Mentors\\Node JS\\Class - 1\\sample.txt";

//Async Task - Handed over to the libuv and the main thread becomes free
fs.readFile(path, (err, buffer) => {

    if (err)
        console.log("Error is : ", err);

    else
        console.log("Buffer is : ", buffer.toString());
})

console.log("C is: ", c);