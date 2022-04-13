const fs = require('fs');
const bigFile = "C:\\Users\\hsang.000\\Desktop\\1.mp4";
const readStream = fs.createReadStream(bigFile, { highWaterMark: 1200000 });


readStream.on('open', () => {

    console.log("Stream open");
})

readStream.once('data', (chunk) => {

    console.log("Chunk is: ", chunk);
})

readStream.pipe(process.stdout);

// readStream.on('data', (chunk) => {

//     console.log("Chunk is: ", chunk);
//     readStream.destroy();
// })

// readStream.on('data', (chunk) => {

//     console.log("Chunk is: ", chunk);
//     readStream.close();
// })

readStream.on('error', (err) => {

    console.log("Error is: ", err);
})

readStream.on('end', () => {

    console.log("No more data to process");
})

readStream.on('close', () => {

    console.log("Stream closed");
})