//  Q1. Create a class BankAccount with:
// Private field #balance

// deposit(amount) and withdraw(amount) methods

// Getter for balance

// Restrict overdraft (don’t allow withdraw if insufficient balance)

class BankAccount {
    #balance;
    constructor(name, balance) {
        this.name = name;
        if (typeof balance !== 'number' || balance < 0) {
            throw new Error('Initial balance must be a non-negative number');
        }
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (typeof amount !== 'number' || amount < 0) {
            console.error('Deposit amount must be a positive number.');
            return false;
        }

        this.#balance += amount; return true;
    }
    withdraw(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            console.error('Withdrawal amount must be a positive number.');
            return false;
        }

        if (amount > this.#balance) {
            console.log(
                `${this.name}'s account has insufficient funds. Current balance: ${this.#balance}, attempted withdrawal: ${amount}.`
            )
            return false;
        }
        else {
            this.#balance -= amount;
            return true;
        }
    }
}

const myBank = new BankAccount('om', 2000);
myBank.deposit(2000);
myBank.withdraw(1000);
console.log(myBank.balance);

myBank.withdraw(4000);

// Q2. Create a class Shape with a method getArea() returning 0
// Then extend it into:

// Rectangle → constructor(width, height) → area = w*h

// Circle → constructor(radius) → area = πr²

class Shape{
    constructor(name){
        this.name = name;
    }

    getArea(){
        return 0;
    }
}

class Rectangle extends Shape{
    constructor(name , width , height){
        super(name);
        this.width = width;
        this.height = height;
    }
    getArea(){
        const  area = this.width * this.height;
        console.log(`${this.name} has ${area}`);
        return area;
    }
}

class Circle extends Shape{
    constructor(name , radius){
        super(name);
        this.radius = radius;
    }
    getArea(){
        const area =  Math.PI * this.radius * this.radius;
        
        console.log(`${this.name} has area ${area}`);
        return area;
    }

}

const myRect = new Rectangle('rectangle',4, 5);
myRect.getArea(4,5);

//  Q3. Create a class User with static method isEmailValid(email) that checks if a string contains @ and .

class User {
  static isEmailValid(email){
    if(typeof email !== 'string') return false;
    return email.includes('@') && email.includes('.');
  }
}

console.log(User.isEmailValid('omveerwal@gmail.com'));
console.log(User.isEmailValid('omveerwalgmailcom'));


// Stretch Challenge (Optional)
class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    constructor(name){
        super(name);
    }
    speak(){
        console.log(`${this.name} barks`);
    }
}
class Cat extends Animal {
    constructor(name){
        super(name)
    }
    speak(){
        console.log(`${this.name } meows`);
    }
}

const myAnimal = new Dog('husky');
myAnimal.speak();
const myCat = new Cat('lucy');
myCat.speak();

