// Create a constructor function for Person with a name property.
// Add a prototype method greet that logs: "Hello, I'm <name>"


// Constructor function
function Person(name) {
  this.name = name; // assigning name to the object
}

// Adding greet method to the prototype
Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

// Creating an instance
const om = new Person("Om");
om.greet(); // Output: Hello, I'm Om


// Use Object.create to create an object 'student' that inherits from 'person' object

const person = {
  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

const khushi = Object.create(person);
khushi.name = 'KHUSHI';
khushi.introduce();

// Create two classes: Animal and Dog
// Dog should inherit from Animal and override a method

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name); // Call parent constructor
        this.breed = breed;
    }

    // Overriding the speak method
    speak() {
        console.log(`${this.name} barks loudly`);
    }

    barks(){
        console.log(`${this.name} is a ${this.breed}`);
    }
}

const dog = new Dog("Tommy", "Labrador");
dog.speak();  // Output: Tommy barks loudly
dog.barks();  // Output: Tommy is a Labrador

// Create a class 'User' with properties: name, email
// Create a class 'Member' that extends User and adds: planType (e.g., "Basic", "Premium")
// Add a method showInfo() in Member to print all info

// Base class: User
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// Derived class: Member
class Member extends User {
    constructor(name, email, planType) {
        super(name, email); // Call the User constructor
        this.planType = planType;
    }

    // Method to show all info
    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Plan Type: ${this.planType}`);
    }
}

// Example usage:
const member1 = new Member("Om", "om@example.com", "Premium");
member1.showInfo();
