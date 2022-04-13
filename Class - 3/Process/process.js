console.log(process.cwd());
console.log(process.arch);
console.log(process.version);
console.log(process.platform);

process.stdout.write("Hi Node JS");

//Overriding console.log
console.log = function (val) {

    process.stdout.write("Process says -> " + val + "\n");
}

console.log("Hello Node");