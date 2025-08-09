// ===============================
// DAY 28 - OOP Concepts in JavaScript
// ===============================

// --------------------------------
// 1. Shape Inheritance
// --------------------------------
class Shape {
    getArea() {
        return 0; // Default implementation
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Example usage
console.log("=== Shape Inheritance ===");
const rect = new Rectangle(10, 5);
const circle = new Circle(7);
console.log("Rectangle Area:", rect.getArea());
console.log("Circle Area:", circle.getArea());
console.log("\n");


// --------------------------------
// 2. E-Commerce Models
// --------------------------------
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Book extends Product {
    constructor(name, price, author) {
        super(name, price);
        this.author = author;
    }
}

class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
}

class Cart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    calculateTotal() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
}

console.log("=== E-Commerce Models ===");
const book1 = new Book("JavaScript Guide", 500, "John Doe");
const phone = new Electronics("Smartphone", 15000, "1 year");
const cart = new Cart();
cart.addProduct(book1);
cart.addProduct(phone);
console.log("Total Price:", cart.calculateTotal());
console.log("\n");


// --------------------------------
// 3. User Roles (Method Overriding)
// --------------------------------
class BaseUser {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }

    action() {
        console.log(`${this.name} is just browsing...`);
    }
}

class Admin extends BaseUser {
    deleteUser(user) {
        console.log(`Admin ${this.name} deleted user: ${user.name}`);
    }

    action() {
        console.log(`Admin ${this.name} is managing the system.`);
    }
}

class Customer extends BaseUser {
    purchaseItem(item) {
        console.log(`Customer ${this.name} purchased: ${item}`);
    }

    action() {
        console.log(`Customer ${this.name} is shopping online.`);
    }
}

console.log("=== User Roles ===");
const admin1 = new Admin("Om", "om@fitgoals.com");
const customer1 = new Customer("Ravi", "ravi@gmail.com");
admin1.getInfo();
admin1.action();
customer1.getInfo();
customer1.action();
admin1.deleteUser(customer1);
customer1.purchaseItem("Yoga Mat");
console.log("\n");


// --------------------------------
// 4. Fitness App OOP Design
// --------------------------------
class FitUser {
    constructor(name, age, goals) {
        this.name = name;
        this.age = age;
        this.goals = goals;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Goals: ${this.goals}`);
    }
}

class WorkoutPlan {
    constructor(exercises, duration) {
        this.exercises = exercises;
        this.duration = duration;
    }

    showPlan() {
        console.log(`Workout Plan: ${this.exercises.join(", ")} | Duration: ${this.duration} min`);
    }
}

class DietPlan {
    constructor(meals, calories) {
        this.meals = meals;
        this.calories = calories;
    }

    showPlan() {
        console.log(`Diet Plan: ${this.meals.join(", ")} | Calories: ${this.calories} kcal`);
    }
}

class Trainer extends FitUser {
    assignWorkout(user, workoutPlan) {
        user.workoutPlan = workoutPlan;
        console.log(`${this.name} assigned a workout plan to ${user.name}.`);
    }

    assignDiet(user, dietPlan) {
        user.dietPlan = dietPlan;
        console.log(`${this.name} assigned a diet plan to ${user.name}.`);
    }
}

class FitAdmin extends FitUser {
    constructor(name, age, goals) {
        super(name, age, goals);
        this.trainers = [];
    }

    addTrainer(trainer) {
        this.trainers.push(trainer);
        console.log(`${trainer.name} has been added as a trainer.`);
    }

    removeTrainer(trainerName) {
        this.trainers = this.trainers.filter(t => t.name !== trainerName);
        console.log(`${trainerName} has been removed from trainers.`);
    }
}

console.log("=== Fitness App OOP ===");
const user1 = new FitUser("Ravi", 25, "Weight Loss");
const trainer1 = new Trainer("Om", 23, "Train Clients");
const admin2 = new FitAdmin("Amit", 30, "Manage Platform");

const workout = new WorkoutPlan(["Pushups", "Squats"], 45);
const diet = new DietPlan(["Oats", "Salad"], 1200);

trainer1.assignWorkout(user1, workout);
trainer1.assignDiet(user1, diet);

admin2.addTrainer(trainer1);
admin2.removeTrainer("Om");
