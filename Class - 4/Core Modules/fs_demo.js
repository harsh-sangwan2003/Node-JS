//Responsible for handling file system operations
const fs = require('fs');

//Async Version
fs.readFile(__filename, { encoding: 'utf-8' }, (err, buffer) => {

    if (err)
        console.log("Error is: ", err);

    else
        console.log("Buffer is: ", buffer.toString());
})

//Sync Version
try {

    let content = fs.readFileSync(__filename, { encoding: 'utf-8' });
    console.log("Sync content is: ", content.toString());
    console.log("#################################");
}

catch (err) {

    console.log("Error is: ", err);
}

//1.readfile is not good for reading very large file
//buffer will have some limit - created on ram(goes inside head) upto 2GB
//process is very slow as until the file is read completely it will not give the result