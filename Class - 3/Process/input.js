// process.stdout.write("Enter your name : \n");

//Not a good way to take input
// process.stdin.on('data', (chunk) => {

//     console.log("Chunk is: ", chunk.toString());
// })

const prompt = require('prompt-sync')();
let name = prompt("Enter your name: ");
process.stdout.write(`${name}`);