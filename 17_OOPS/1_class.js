class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
let p = new person("Raj", 21);

console.log(p.name);

console.log(p.getName());
console.log(p.getAge());