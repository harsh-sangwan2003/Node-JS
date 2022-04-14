const fs = require('fs');
const path = require('path');

function readStaticFile(url, response) {

    const dirPath = path.normalize(__dirname + "/..");

    if (url == '/')
        url = '/index.html';

    const fullPath = path.join(dirPath, 'public', url);

    const stream = fs.createReadStream(fullPath);
    stream.pipe(response);
}

module.exports = readStaticFile;