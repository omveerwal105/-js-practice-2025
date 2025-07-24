// Create a Vehicle class and a Car class that extends it.

// Vehicle has type and start() method

// Car has brand and overrides start() method

class Vehicle {
    constructor(type){
        this.type = type;
    }
    start(){
        console.log(`${this.type} Vehicle engine starts`);
    }
}
class Car extends Vehicle {
    constructor(type,brand){
        super(type);
        this.brand=brand;
    }
    start(){
        console.log(`${this.type} specially the ${this.brand} enigne works reallly well`);
    }
}

const myCar = new Car('Car', 'Mahindra XUV');

myCar.start();


// : Create a User class with login()

// Extend it with AdminUser class having deleteUser() method

class User{
    constructor(name){
        this.name = name;
    }
    login(){
        console.log(`Login as a User ${this.name}`);
    }
}
class AdminUser extends User{
    deleteUser(userName){
        console.log(`${this.name} deleted the ${userName}`);
    }
}
const om = new AdminUser('Om');
om.deleteUser('shivani');
om.login();

// Make a parent Shape class and extend it to Circle and Rectangle. Each should have its own getArea() method.

// Make a parent Shape class and extend it to Circle and Rectangle. Each should have its own getArea() method.

class Shape {
    constructor(type) {
        this.type = type;
    }
}

class Rectangle extends Shape {
    getArea(length, breadth) {
        const area = length * breadth;
        console.log(`${this.type} has area = ${length} * ${breadth} = ${area}`);
        return area;
    }
}

class Circle extends Shape {
    getArea(radius) {
        const area = 3.14 * radius * radius;
        console.log(`${this.type} has area = π * ${radius}^2 = ${area.toFixed(2)}`);
        return area;
    }
}


const myRect = new Rectangle('Rectangle');
myRect.getArea(3, 4);  

const myCircle = new Circle('Circle');
myCircle.getArea(5);   
