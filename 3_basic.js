// always use "let" instead of "var" to initialize  variable because:

// The let declaration was introduced in ECMAScript 6 (ES6) and provides block-level scoping for variables. This means that a variable declared with let is limited in scope to the block (enclosed within curly braces) where it is defined. It is considered a best practice because it helps prevent accidental variable hoisting and reduces the risk of unintended side effects.

// On the other hand, var has function-level scoping. When a variable is declared with var, it is accessible throughout the entire function in which it is defined, regardless of block scope. This behavior can sometimes lead to unexpected results and make code harder to reason about.





// let greet = "Hello"
// console.log(greet)


// let arr = []
// arr[0] = 10
// arr[1] = 100
// arr[2] = 1000
// arr[1] = 50
// console.log(arr)
// console.log(arr.pop())
// l = arr.length
// console.log(l)
// console.log(arr.shift())
// m = arr.length
// console.log(m)
// console.log(arr.unshift(10000))
// console.log(arr)


// // Objects
// let person = {
//     firstName: "Harshal",
//     lastName: "Gunjal",
//     age: 18,
//     ownsCar: false
// }
// console.log(person)
// nameofperson = person.firstName
// console.log(nameofperson)
// console.log(person['age'])
// // nested object
// const student = { 
//     name: 'John', 
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// }
// // accessing property of marks object
// console.log(student.marks.science); // 70
// student.class = 10
// console.log(student)
// delete student.name


// // for loop
// const n = 5;
// for (let i = 1; i <= n; i++) {
//     console.log(`I love JavaScript.`);
// }
// //while loop
// let i = 1, n = 5;
// while (i <= n) {
//     console.log(i);
//     i += 1;
// }
// //do-while loop
// let i = 1;
// const n = 5;
// do {
//     console.log(i);
//     i++;
// } while(i <= n);


// //for-in loop in objects
// let colors = {
//     primary: "Red",
//     secondary: "Blue",
//     tertiary: "Green"
// }
// for(let color in colors){
//     console.log(color + " -> " + colors[color]);                    //Notice how we only get the keys of the object or indexes of the array
                                                                       //instead of the elements
// }
// //for-in loop in arrays
// let colorsArray = ["Red", "Yellow", "Green", "Purple"]
// for(let color in colorsArray){
//     console.log(color + " -> " + colorsArray[color]);
// }


// //for-of loop in arrays
// let colorsArray = ["Red", "Yellow", "Green", "Purple"]
// for(let color of colorsArray){
//     console.log(color);                                                 //Notice how we cannot get the indexes of the elements my using for of
//                                                                         //instead we get the the elements
// }
// //for-of loop in strings
// let str = "Harshal"
// for(letter of str){
//     console.log(letter);
// }


// //method - entries()
// let colors = ["Red", "Blue", "Green", "Yellow"]
// for(var [index, color] of colors.entries()){
//     console.log(index + " -> " + color);
// }


