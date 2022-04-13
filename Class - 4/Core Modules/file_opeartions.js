const fs = require('fs');

// fs.writeFile('test.txt', "Hi, I am a test file.", err => {

//     if (err)
//         console.log("Error while writing in the file", err);

//     else
//         console.log("File created!");
// })

// fs.copyFile('test.txt', 'test2.txt', err => {

//     if (err)
//         console.log("Error while copying the file");

//     else
//         console.log("File copied");
// });

fs.appendFile('test.txt', ' Appending new data', err => {

    if (err)
        console.log("Error while appending new content: ", err);

    else
        console.log("Data appended");
})

let isExist = fs.existsSync('test.txt');
console.log(isExist);

fs.unlink('test2.txt',err=>{

    if(err)
    console.log("Error while deleting the file: ",err);

    else 
    console.log("File deleted");
})