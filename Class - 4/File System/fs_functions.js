const fs = require('fs');

fs.readdir(__dirname, (err, folder) => {

    if (err)
        console.log("Some error occurred: ", err);

    else
        console.log(folder);
})

fs.writeFile("test.txt", "Hi I am a txt file.", err => {

    if (err)
        console.log("Error is: ", err);

    else
        console.log("Created a new file and write done");
});

fs.appendFile('test.txt', " Appending new content.", err => {

    if (err)
        console.log("Error is: ", err);

    else
        console.log("Data Appended");
});

fs.copyFile('test.txt', 'test2.txt', err => {

    if (err)
        console.log("Error is: ", err);

    else
        console.log("Copy done");
})

let isExist = fs.existsSync('test.txt');
console.log(isExist);

fs.unlink('test2.txt', err => {

    if (err)
        console.log("Error is: ", err);

    else
        console.log("Unlink done");
})

try {

    fs.mkdirSync("/tmp");
    console.log("Directory made");
}

catch (err) {

    console.log("Error is: ", err);
}