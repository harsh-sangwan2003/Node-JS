const fs = require('fs');

try {

    fs.mkdirSync('tmp');
}

catch (err) {

    console.log("Error while creating directory: ", err);
}

fs.rmdirSync('tmp');