const fs = require('fs');
const path = require('path');

function readStaticFile(url, response) {

    const parentDir = path.normalize(__dirname + "/..");

    if (url == "/")
        url = "/index.html";

    const filePath = path.join(parentDir, "/public", url);

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(response);
}

module.exports = readStaticFile;