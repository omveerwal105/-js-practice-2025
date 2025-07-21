//  Longest Subarray with Sum ≤ K (Sliding Window)
// Given an array of positive integers nums and an integer k,
//  find the length of the longest contiguous subarray such that the sum of its elements is less than or equal to k.
const nums = [1, 2, 1, 0, 1, 1, 0];
const k = 4;

function sliding(nums,k){
    let start = 0;
    let sum = 0;
    let maxlen = 0;
    for(let i=0;i<=nums.length-1;i++){
        sum+=nums[i];

        while(sum > k){
            sum-=nums[start];
            start++;
        }

        maxlen = Math.max(maxlen, i - start + 1);
        
    }
    return maxlen;
}
console.log(sliding(nums,k));

// Create a class Car with a constructor having brand and model, and a method start() logging "Car started"

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} Car is started`);
  }
}

class ElectricCar extends Car {
  constructor(brand, model, batteryLevel) {
    super(brand, model);
    this.batteryLevel = batteryLevel;
  }

  charge() {
    console.log(`Charging... Battery was at ${this.batteryLevel}%`);
    this.batteryLevel = 100;
    console.log(`Battery fully charged: ${this.batteryLevel}%`);
  }
}

// ✅ Create and test
const myCar = new ElectricCar('Mahindra', 'XUV 700', 35);
myCar.start();   // Mahindra XUV 700 Car is started
myCar.charge();  // Charging... Battery was at 35% ➝ Battery fully charged: 100%


// Create a class Vehicle with method start(), and a class Bike that overrides it.

class Vehicle {
    start(){
        console.log('Vehcile Starts');
    }
}
class Bike extends Vehicle {
    start(){
        console.log('Bike Starts');
    }
}

const myBike = new Bike();
myBike.start();


// Create a class Converter with a static method toINR(dollars) that returns amount in INR assuming 1 dollar = ₹83.

class Converter {
    static toINR(dollar) {
        return dollar * 83;
    }
}

console.log(Converter.toINR(7)); // Output: 581

// Make a class Account with:

// A private-like _balance

// A get balance() method that returns current balance

// A set balance(amount) that only sets balance if amount > 0
class Account {
    constructor(balance) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount <= 0) {
            console.log('Amount must be greater than 0');
            return;
        }
        this._balance += amount; // Deposit
    }
}

const myAccount = new Account(7000);

