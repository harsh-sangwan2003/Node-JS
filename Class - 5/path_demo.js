const path = require('path');

let fullPath = path.join(__dirname, "/a/b/c.txt");
console.log(fullPath);

console.log(path.normalize(fullPath + "/../../.."));

let dirName = path.dirname(fullPath);
console.log(dirName);

let fileName = path.basename(fullPath, ".txt");
console.log(fileName);

let extName = path.extname(fullPath);
console.log(extName);

console.log(path.delimiter);
console.log(path.sep);

//Converting string path to object
const obj = path.parse(fullPath);
console.log(obj);

//Object to string path
const path2 = path.format(obj);
console.log(path2);