const fs = require('fs');
const zlib = require('zlib');

const srcFile = 'C:\\\\Users\\\asang\\Desktop\\Harsh\\Web Development\\Front-End Masters\\Recordings\\JavaScript\\1-Introduction\\Class - 3&4\\1.mkv';
const destPath = 'C:\\Users\\asang\\Desktop\\Harsh\\Web Development\\Front-End Masters\\Recordings\\JavaScript\\1-Introduction\\Class - 3&4\\1.gz';

// Compressed versions are good for text file
// Transformation using pipe and zlib
fs.createReadStream(srcFile)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(destPath));