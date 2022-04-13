//Similar to commands used in cmd - arguments are in the command itself
console.log(process.argv);

let sum = 0;
for (let i = 2; i < process.argv.length; i++)
    sum += parseInt(process.argv[i]);

console.log("Sum is: ", sum);