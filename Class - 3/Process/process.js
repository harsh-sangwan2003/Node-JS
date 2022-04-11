console.log(process.cwd());
console.log(process.arch);

process.stdout.write('Hi Node JS\n');

console.log(process.platform);
console.log(process.version);
console.log(process.cpuUsage());

// Attaching events with process
process.on('exit', (code) => {

    console.log("Node App exit with code: ", code);
})

process.on('uncaughtException', (err) => {

    console.log(`Some error occurred ${err}`);
})

show();