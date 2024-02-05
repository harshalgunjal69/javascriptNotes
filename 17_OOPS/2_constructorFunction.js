// When we use new keyword on a function, and then use this keyword inside that function, it creates a new empty object and assigns it to 'this' keyword. This is how the classes work under the hood.


function createcar(_name, _model, _year) {
    this.name = _name;
    this.model = _model;
    this.year = _year;

    this.drive = function() {
        console.log("Driving " + this.name + " " + this.model);
    }
}

car1 = new createcar("Audi", "A6", 2015);
car2 = new createcar("BMW", "X5", 2016);

car1.drive()

console.log(car1);
console.log(car2);