// In browser Non-strict mode




//normal
console.log(this); //Window object (given below)





//inside a function
function displayThis(){
    console.log(this);    
}
displayThis(); // Window Object





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
        console.log(this.fullName);  //this will return the object as well.
    }
}
myobj.myfn()  // { fullName: 'Harshal', age: 23, myfn: [Function: myfn] } , i.e the object itself









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
myobj3.myfn()  //Window object here as well



