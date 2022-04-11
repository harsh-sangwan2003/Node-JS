const fs = require('fs');

// Async Version
// {encoding:'utf-8'} is an optional argument 
// fs is not good for reading very large files
// buffer will explode if the file is very large as we have limited capacity of buffer
fs.readFile(__filename, { encoding: 'utf-8' }, (err, data) => {

    if (err)
        console.log("Some error occurred : ", err);

    else
        console.log("Data is : ", data.toString());
})

// Sync Version
try {

    let content = fs.readFileSync(__filename, { encoding: 'utf-8' });

    console.log("Sync content is: ", content.toString());
    console.log("---------------------");
}

catch (err) {

    console.log("Error while reading sync version: ", err);
}