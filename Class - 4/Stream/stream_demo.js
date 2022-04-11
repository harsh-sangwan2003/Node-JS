//All the streams are event-driven while fs.readFile and fs.readFileSync are just functions 
const fs = require('fs');

const bigFile = 'C:\\Users\\asang\\Desktop\\Harsh\\Web Development\\Front-End Masters\\Recordings\\JavaScript\\1-Introduction\\Class - 3&4\\1.mkv';

// highWaterMark size must be chosen according to the hardware
const readStream = fs.createReadStream(bigFile, { highWaterMark: 20000 });

console.log("Hello");
// Is the stream open
readStream.on('open', () => {

    console.log('Stream opens');
})

//Is the data flowing
readStream.on('data', (chunk) => {

    console.log("Chunk is: ", chunk);
    // To close the stream in the middle
    // readStream.close();
    readStream.destroy();
})

//Error
readStream.on('error', (err) => {

    console.log("Some error occurred: ", err);
})

//No more data to be streamed
readStream.on('end', () => {

    console.log("No more data to be streamed");
})

//Close
readStream.on('close', () => {

    console.log("Stream closed");
})