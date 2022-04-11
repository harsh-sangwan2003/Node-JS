const os = require('os');

//win32
console.log(os.platform());

//X64
console.log(os.arch());

//Windows_NT
console.log(os.type());

//10.0.19044
console.log(os.release());

console.log(os.cpus());

console.log(os.freemem());

//C:\Users\asang
console.log(os.homedir());

console.log(os.networkInterfaces());

console.log(os.totalmem());

console.log(os.userInfo());

//DESKTOP-V979BED
console.log(os.hostname());

//Windows 10 Home
console.log(os.version());