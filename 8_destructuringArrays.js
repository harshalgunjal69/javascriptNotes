// Normal
const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const firstName = profile[0];
const lastName = profile[1];
const website = profile[2];

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"


// with destructuring
const profile2 = ["Oluwatobi", "Sofela", "codesweetly.com"];

const [firstName2, lastName2, website2] = profile2;

console.log(firstName2); // "Oluwatobi"
console.log(lastName2); // "Sofela"
console.log(website2); // "codesweetly.com"


// Also
const [, , website3] = ["Oluwatobi", "Sofela", "codesweetly.com"];

console.log(website3); // "codesweetly.com"


//Also
const [, lastName4, website4] = ["Oluwatobi", , "codesweetly.com"];

console.log(website4); // "codesweetly.com"
console.log(lastName4);  // undefined