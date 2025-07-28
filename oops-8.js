// inheritance 
class Animal {
    constructor(name){
        this.name = name;
    }
    speak () {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    speak () {
        console.log(`${this.name} barks it is a ${this.breed}`);
    }
}
const dog1 = new Dog("Rocky", "Labrador");
dog1.speak();

// Write a Vehicle class with a start() method.
// Then create a Car class that extends it and overrides start() with a message like:

// "Car started. Fuel level is good."

class Vehicle {
    constructor(type) {
        this.type = type;
    }
    start() {
        console.log(`${this.type} engine starts`);
    }
}

class Car extends Vehicle {
    constructor(type, brand) {
        super(type);
        this.brand = brand;
    }
    start() {
        console.log(`${this.type} started. ${this.brand} fuel level is good.`);
    }
}

const myCar = new Car('Car', 'XUV');
myCar.start();















