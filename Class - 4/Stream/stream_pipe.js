const fs = require('fs');

const bigFile = 'C:\\Users\\asang\\Desktop\\Harsh\\Web Development\\Front-End Masters\\Recordings\\JavaScript\\1-Introduction\\Class - 3&4\\1.mkv';

const readStream = fs.createReadStream(bigFile, { highWaterMark: 10000000 });

//Shows data in the form of string
readStream.pipe(process.stdout);