const fs = require('fs');

console.log("Before");

//Async Task - 1
let path = "C:\\Users\\hsang.000\\Desktop\\Harsh\\Web Development\\Brain Mentors\\Node JS\\Class - 2\\sample.txt";
fs.readFile(path, (err, buffer) => {

    if (err)
        console.log("Error is: ", err);

    else
        console.log("Buffer is: ", buffer.toString());
})


//Async Task - 2
path = "C:\\Users\\hsang.000\\Desktop\\Harsh\\Web Development\\Brain Mentors\\Node JS\\Class - 2\\sample2.txt";
fs.readFile(path, (err, buffer) => {

    if (err)
        console.log("Error is: ", err);

    else
        console.log("Buffer is: ", buffer.toString());
})

console.log("After");