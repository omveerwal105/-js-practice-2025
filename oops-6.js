class Vehicle {
  #fuel; // private field

  constructor(fuel) {
    if (this.constructor === Vehicle) {
      throw new Error("Abstract class can't be instantiated directly.");
    }
    this.#fuel = fuel;
  }

  drive() {
    throw new Error("Drive method must be implemented.");
  }

  getFuel() {
    return this.#fuel;
  }
}

class Car extends Vehicle {
  constructor(fuel) {
    super(fuel);
  }

  drive() {
    console.log(`Driving car with ${this.getFuel()} fuel`);
  }
}

const myCar = new Car('Petrol');
myCar.drive();

 

// Try writing a class PaymentProcessor which is abstract.
// Then create two child classes: PaytmPayment and StripePayment that implement the process() method.

class PaymentProcessor {
    #amount;
    constructor(amount){
        if(this.constructor===PaymentProcessor){
            throw new Error("Abstract class can't be instantiated directly");
        }
        this.#amount=amount;
    }
    payment(){
        throw new Error("Method 'payment()' must be implemented in subclass");
    }
    getamount(){
        return this.#amount;
    }
}
class PaytmPayment extends PaymentProcessor {
    constructor(amount,name){
        super(amount);
        this.name = name;
    }
    payment(){
        console.log(`payment is done of ${this.getamount()} by ${this.name}`);
    }
}
class StripePayment extends PaymentProcessor {
    constructor(amount,name){
        super(amount);
        this.name = name;
    }
    payment(){
        console.log(`payment is done of ${this.getamount()} by ${this.name}`);
    }
}
const myMode = new PaytmPayment(1000,'Paytm');
myMode.payment();

const myMode2 = new StripePayment(2000,'Cash');
myMode2.payment();



