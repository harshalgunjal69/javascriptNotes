const fs = require("fs");

console.log("first line");

fs.readFile("file.txt", cb); // This is asynchronous execution
function cb(err, data) {
    if(err){
        console.log(err);
    }

    console.log('This file has -> '+data);
}
console.log("last line");

// Output:

// first line
// last line
// This file has -> My name is harshal.
