const fs = require('fs')

console.log('first line');
let data  = fs.readFileSync('file.txt', encoding="UTF-8")  // This is synchronous execution
console.log(data);
console.log('last line');
