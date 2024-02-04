// // function

// function greet() {
//     console.log("Hello there");
// }
// greet()



// // function as expression

// let add = function(a, b){
//     console.log(a+b);
//     return (a+b)         
// }
// add(3, 4)
// let c = add(3, 4)
// console.log(c);
// var sum = add
// sum(3, 4)






// Hoisting in javascript:
// Hoisting can cause undesirable outcomes in your program. And it is best to declare variables and functions first before using them and avoid hoisting.

// In the case of variables, it is better to use let than var.
// In case of functions, it is better to declare the functions as expressions to avoid hoisting.



// In javascript there are two steps to execution:
// 1)Memory execution
// 2)code execution

// In memory execution, the variables are initialised inside the memory as undefined, whereas the functions are completely written in the memory(full function block is written). So, you can easily call a function in a code before even initialising instanceof, but if you call a variable after initialising, the variable returns undefined as its value.

// In code execution, the variables are assigned their respective values. But, this happens from top to bottom. So, if any variable is used before initialising it, it is stored as undefined at the memory execution and hence returns undefined.





// // using test before declaring
// console.log(test);                                // undefined
// var test = 1;
// // The above program works and the output will be undefined


// // using test after declaring
// var test;
// console.log(test);                               // undefined
// // Since the variable test is only declared and has no value, undefined value is assigned to it.


// // program to display value
// a = 5;
// console.log(a);          
// var a;                                           // 5
// // In the above example, variable a is used before declaring it. And the program works and displays the output 5.


// // However in JavaScript, initializations are not hoisted. For example,
// console.log(a);
// var a = 5;                                       // undefined
// // Only the declaration is moved to the memory in the compile phase. Hence, the value of variable a is undefined because a is printed without initializing it.





// //function hoisting

// // A function can be called before declaring it. For example,
// greet();
// function greet() {
//     console.log('Hi, there.');
// }
// // and it works completely fine because functions are completely stored in the memory


// // However, when a function is used as an expression, an error occurs because only declarations are hoisted. For example;
// greet();                                         //error
// var greet = function() {
//     console.log('Hi, there.');
// }




