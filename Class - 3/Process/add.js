// We can operate on command line arguments through process.argv

console.log(process.argv);

let sum = 0;

for (let i = 2; i < process.argv.length; i++)
    sum += parseInt(process.argv[i]);

console.log(sum);