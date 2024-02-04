// Polymorphism

// Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.

class Car {
    constructor(color, speed) {
        this._speed = speed;
        this._color = color;
    }

    showInfo() {
        console.log(
            "I'm " +
                this._make +
                ", my color is " +
                this._color +
                ", and my speed is " +
                this._speed
        );
    }
}

class BMW extends Car {
    constructor(color, speed, make) {
        super(color, speed);
        this._make = make;
    }

    showInfo() {
        console.log(
            "I'm " +
                this._make +
                ", my color is " +
                this._color +
                ", and my speed is " +
                this._speed
        );
    }
}

class Toyota extends Car {
    constructor(color, speed, make) {
        super(color, speed);
        this._make = make;
    }

    showInfo() {
        console.log(
            "I'm " +
                this._make +
                ", my color is " +
                this._color +
                ", and my speed is " +
                this._speed
        );
    }
}

class Bentely extends Car {
    constructor(color, speed, make) {
        super(color, speed);
        this._make = make;
    }

    showInfo() {
        console.log(
            "I’m " +
                this._make +
                ", my color is " +
                this._color +
                ", and my speed is " +
                this._speed
        );
    }
}

let bmw = new BMW("red", 220, "BMW");
let toyota = new Toyota("blue", 180, "Toyota");
let bentely = new Bentely("black", 280, "Bentely");

bmw.showInfo();
toyota.showInfo();
bentely.showInfo();

//The fact that all three classes have the same method showInfo() is a form of polymorphism called method overriding. Method overriding means that a child class redefines a method in the parent class. In our example, the showInfo() method is defined in the parent class Car and redefined in the child classes BMW, Toyota, and Bentely.






// Encapsulation

// Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a "blackbox" out of the object. Because of this, a user of that class only needs to know its interface (that is, the data and functions exposed outside the class), not the hidden implementation.

class person {
    constructor(_name, _age) {
        let name = _name; // private variables - can't be accessed outside the class
        let age = _age; // private variables - can't be accessed outside the class

        this.getName = function () {
            return name;
        }

        this.getAge = function () {
            return age;
        }
    }
}

let p = new person("Raj", 21);

console.log(p._name);   //Undefined
console.log(p.name);    //Undefined

console.log(p.getName());
console.log(p.getAge());

// In the above example, the name and age variables are encapsulated inside the person class. The getName() and getAge() functions are exposed outside the class. So, the user of the person class only needs to know the interface of the class, not the hidden implementation.
        