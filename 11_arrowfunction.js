// Normal function
greet = function(a){
    console.log("Hello World")
    console.log(a)
};
greet(5);


//Arrow function
greetArrow1 = (a) => {
    console.log("Hello world")
    console.log(a)
};
greetArrow1(6);


// Another way - only for single lined functions
greetArrow2 = (a) => console.log("Hello world");
greetArrow2(7);


// Another way - only for single parameter functions
greetArrow3 = a => console.log("Hello world");
greetArrow3();

//                                                         This is important

//Normal Arrow
const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwo = (num1, num2) => ( num1 + num2 ) //This works, when u use () there is no need to use return keyword

const addTwo = (num1, num2) => {num1 + num2}   //This won't work because when u use {} u have to use return keywork.


console.log(addTwo(3, 4))
