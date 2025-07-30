// Prototype?
// In JavaScript, every object has an internal link to another object called its prototype.
// This is used to share properties and methods between objects.

function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHello = function () {
    console.log(`Hello , I'm ${this.name}`)
};

const dog = new Animal("buddy");

dog.sayHello();

console.log(dog.__proto__===Animal.prototype);
console.log(Animal.prototype.__proto__ === Object.prototype);

// Create a constructor function Car that has:

// A brand property

// A method drive() on its prototype

// Instantiate two cars (car1, car2) and call drive() on both

// Add another method stop() later only to the prototype, and verify it’s available on both cars

function Car(brand){
    this.brand = brand;
}

Car.prototype.drive = function () {
    console.log(`${this.brand} cars gives smoothing drive`)
};

const myCar1 = new Car('XuV');
const myCar2 = new Car('verna');

myCar1.drive();
myCar2.drive();

Car.prototype.stop = function () {
    console.log(`${this.brand} car stops `);
}
myCar1.stop();
myCar2.stop();