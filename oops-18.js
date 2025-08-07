// Create a class Vehicle with properties: brand, model
// Method: describe() => "Brand Model"

// Create a subclass Car with additional property: type (e.g. SUV)
// Override describe() => "Brand Model is a type car"


class Vehicle {
    constructor(brand , model){
        this.brand = brand;
        this.model = model;
    }
    describe(){
        console.log(`${this.brand} has ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(brand , model , type){
        super(brand , model);
        this.type = type;
    }
    describe(){
        console.log(`${this.brand} has ${this.model} is ${this.type} Car`);
    }
}

const myCar = new Car('car','mahindra ','xuv');
myCar.describe();

// Class: User (name, email)
// Method: showDetails() => "Name: name, Email: email"

// Subclass: Admin (add level: 'super' | 'moderator')
// Override showDetails() => include level info

class User {
    constructor(name , email){
        this.name = name;
        this.email = email;
    }
    showDetails(){
        console.log(`Name : ${this.name}  Email : ${this.email} `);
    }
}
class Admin extends User {
    constructor(name , email , level){
        super(name ,email);
        this.level = level;
    }
    showDetails(){
        console.log(`Name : ${this.name}  Email : ${this.email} Level : ${this.level} `);
    }
}

const myUser = new Admin('om','om@123','sde-2');
myUser.showDetails();

// Parent class Shape: name
// Subclasses: 
//    - Circle: radius, area()
//    - Rectangle: width, height, area()
// Use super() and override area method in each subclass

class Shape {
    constructor(name){
        this.name = name;
    }
}
class Circle extends Shape{
    constructor(name , radius){
        super(name);
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius * this.radius ;
    }
}
class Rectangle extends Shape{
    constructor(name , width , height){
        super(name);
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

const myRect = new Rectangle('rectangle',4,5);
const myCicle = new Circle('circle',3);

console.log('Area' , myRect.getArea());

// Class: Account
// - name, balance
// - deposit(), withdraw(), getBalance()

// Subclass: SavingsAccount (adds interestRate)
// - Method: addInterest()

// Subclass: CurrentAccount (adds overdraftLimit)
// - Override withdraw(): allow overdraft within limit

class Account {
    constructor(name , balance){
        this.name = name;
        this.balance = balance;
    }
    deposit(amount){
        if(typeof amount !== 'number' || amount <0 ){
            return false;
        }
        else {
            this.balance += amount;
            return true;
        }
    }
    withdraw(amount){
         if(amount > this.balance){
            return false;
         }

         this.balance -= amount;

         return true;
    }
    getBalance(){
        return this.balance;
    }
}

class SavingsAccount extends Account {
    constructor(name , balance , interestRate){
        super(name , balance);
        this.interestRate = interestRate;
    }
    addInterest(){
        const interest = (this.balance * this.interestRate) / 100;
        this.balance += interest;
    }
}
class CurrentAccount extends Account {
    constructor(name , balance , overdraftLimit){
        super(name,balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount){
        if(amount > this.overdraftLimit){
            console.log(`amount can only be withdraw within the ${this.overdraftLimit} `);
            return false;
        }
        else {
            this.balance -= amount;
            return true;
        }
    }
}

// Base Class: Booking
// - customerName, amount, status ('pending', 'confirmed')
// - confirm(), cancel(), summary()

// Subclass: FlightBooking (adds flightNumber, date)
// - Override summary() to include flight details

// Subclass: HotelBooking (adds hotelName, nights)
// - Override summary() to include hotel info & total price (amount * nights if not prepaid)

class Booking {
    constructor(customerName , amount , status){
        this.customerName = customerName;
        this.amount = amount;
        this.status = status;
    }

    confirm(){
        this.status = 'Confirmed';
        console.log(`${this.customerName} booking has been confirmed of ${this.amount}`);
    }
    cancel(){
        this.status = 'Cancel'
        console.log(`${this.customerName} booking has been canceld`);
    }
    summary(){
        console.log(`name : ${this.customerName} booking status : ${this.status} amount :${this.amount}`);
    }
}

class FlightBooking extends Booking{
    constructor(customerName , amount , status , flightNumber , date){
        super(customerName , amount , status);
        this.flightNumber = flightNumber;
        this.date = date;
    }
    summary(){
        console.log(`name : ${this.customerName} booking status : ${this.status} amount :${this.amount} flightNumber : ${this.flightNumber} date :${this.date}`);
    }
}

class HotelBooking extends Booking{
    constructor(customerName , amount , status , hotelName , nights){
        super(customerName , amount ,status);
        this.hotelName =  hotelName ;
        this.nights = nights;
    }
    getAmount(){
        if(this.nights){
        const totalAmount = this.nights * this.amount;
        return totalAmount;
        }
        return this.amount;
    }
    summary(){
         console.log(`name : ${this.customerName} booking status : ${this.status} amount :${this.amount} hotelName : ${this.hotelName} totalPrice :${this.getAmount()}`);
    }
}
const flight = new FlightBooking("Om", 15000, "pending", "AI-202", "2025-09-12");
flight.confirm();
flight.summary();

const hotel = new HotelBooking("Om", 2000, "pending", "Taj", 3);
hotel.confirm();
hotel.summary();


















