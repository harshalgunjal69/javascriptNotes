//Normal
const profile = {
    firstName: "Oluwatobi", 
    lastName: "Sofela", 
    website: "codesweetly.com"
  };
  
const { firstName, lastName, website } = profile;

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"



// With destructuring

// Warning: You have to use the name of the key as reference and you cannot directly use a variable for destructuring. If u accidently did not use the key name and directly used the varuable, the variables will all return undefined.

const profile2 = {
    firstName2: "Oluwatobi", 
    lastName2: "Sofela", 
    website2: "codesweetly.com"
};

const { firstName2: forename, lastName2: surname, website2: onlineSite } = profile;

console.log(forename); // "Oluwatobi"
console.log(surname); // "Sofela"
console.log(onlineSite); // "codesweetly.com"
console.log(website); // "ReferenceError: website is not defined"




// destructuring nested objects
person = {
    fullName : "Harshal",
    age : 18,
    address : {
        city : "Boisar",
        state : "Maharashtra",
        pincode : 401504
    }
}

let {fullName, age, address} = person;
console.log(fullName);                     //Harshal  
console.log(age);                      //18  
console.log(address);                  //{ city: 'Boisar', state: 'Maharashtra', pincode: 401504 }






// But, what if we just want to get the city or pinncode instead of the whole address object?
// Warning: After doing this, u won't be able to access the address, instead u will only be able to access the the keys inside arrays that you redefine while destructuring.

person2 = {
    name2 : "Harshal",
    age2 : 18,
    address2 : {
        city2 : "Boisar",
        state2 : "Maharashtra",
        pincode2 : 401504
    }
}
let {name2, age2, address2 : {city2, pincode2}} = person2;
console.log(name2);                     //Harshal  
console.log(age2);                      //18  
console.log(city2);
console.log(pincode2)
console.log(address2)                   //Error

// notice how this time, address is not defined as a variable and we cannot access it, we can only access city2 and pincode2 of thhe address object.
