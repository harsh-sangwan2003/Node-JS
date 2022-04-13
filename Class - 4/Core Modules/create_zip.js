//Transformation of one file to another
const fs = require('fs');
const zlib = require('zlib');

const path = "C:\\Users\\hsang.000\\Desktop\\a.pdf";
const target = "C:\\Users\\hsang.000\\Desktop\\a.zip";

fs.createReadStream(path)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(target));