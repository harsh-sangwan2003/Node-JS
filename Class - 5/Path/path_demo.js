const path = require('path');

const fullPath = path.join(__dirname, "/a/b/c.txt");
console.log(fullPath);

const parentDir = path.normalize(__dirname + "/../..");
console.log(parentDir);

console.log("Directory path: ", path.dirname(fullPath));
console.log("File name: ", path.basename(fullPath));
console.log("Extension name: ", path.extname(fullPath));

// ;
console.log("Delimeters: ", path.delimiter);

// \
console.log("Seperators: ", path.sep);

//Converts path to object
const obj = path.parse(fullPath);
console.log(obj);

// Converts object to path
const path2 = path.format(obj);
console.log(path2);