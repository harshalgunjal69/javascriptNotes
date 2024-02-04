// "This" keyword refers to an object that is executing the current piece of code.It references the object that is executing the current function. If the function being referenced is a regular function, "this" references to the global object. If the function that is being referenced is a method in an object, "this" references the object itself.








// nodejs non-strict mode


//normal
console.log(this);  // {} -> empty object



//inside a function
function displayThis(){
    console.log(this);    
}
displayThis(); // Global Object (given below)
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  navigator: [Getter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/



//inside the method(function) of an object
let myobj = {
    fullName:"Harshal",
    age:23,

    myfn: function() {
        console.log(this);
    }
}
myobj.myfn()   // { fullName: 'Harshal', age: 23, myfn: [Function: myfn] } , i.e the object itself


//interesting property when inside the method of an object
let myobj2 = {
    fullName:"Harshal",
    age:23,

    myfn: function() {
        console.log(this.fullName);  //this will return the fullname of the current object.
    }
}
myobj.myfn()  //Harshal




// inside an object, then inside the function, then inside another function.
let myobj3 = {
    fullName:"Harshal",
    age:23,

    myfn: function() {
        function myfn2(){
            console.log(this);
        }
        myfn2()
    }
}
myobj3.myfn()  //We are again getting the global object.


//inside arrow function
const displayThis = () => {
    console.log(this);
}
displayThis()  //returns empty object {}

