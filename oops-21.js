// Create a Student class with:

// Private fields #marks

// Getter to get marks

// Setter that prevents setting marks > 100 or < 0

class Student {
    #marks;
    constructor(name, marks) {
        this.name = name;
        this.#marks = marks;
    }

    get marks() {
        return this.#marks;
    }

    set marks(number) {
        if (number > 100 || number < 0) {
            throw new Error('Marks should be in the range of 0 to 100');
        }
        this.#marks = number;
        console.log(`${this.name} got ${this.#marks} marks`)
    }
}

const myStudent = new Student('Om', 75);

console.log(myStudent.marks);



// Implement a Singleton Logger class that logs messages but ensures only one logger instance exists.
// class Logger {
//     constructor() {

//         if (Logger.instance) {
//             return Logger.instance;
//         }

//         this.logs = [];
//         Logger.instance = this; // Save the instance
//     }

//     log(message) {
//         const timestamp = new Date().toISOString();
//         this.logs.push({ message, timestamp });
//         console.log(`[${timestamp}] ${message}`);
//     }

//     getLogs() {
//         return this.logs;
//     }
// }
// const logger1 = new Logger();
// const logger2 = new Logger();

// logger1.log("First log message");
// logger2.log("Second log message");

// console.log("Are both loggers same instance?", logger1 === logger2); // true
// console.log("All logs:", logger1.getLogs());

// Implement a Factory that creates Admin and Customer user types.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDetails() {
        return `${this.name} (${this.email})`;
    }
}


class Admin extends User {
    constructor(name, email) {
        super(name, email);
        this.role = "Admin";
    }

    deleteUser(user) {
        console.log(`${this.name} deleted user ${user.name}`);
    }
}


class Customer extends User {
    constructor(name, email) {
        super(name, email);
        this.role = "Customer";
    }

    purchaseItem(item) {
        console.log(`${this.name} purchased ${item}`);
    }
}


class UserFactory {
    static createUser(type, name, email) {
        switch (type) {
            case "ADMIN":
                return new Admin(name, email)

            case 'Customer':
                return new Customer(name, email)

            default:
                throw new Error('Invalid  user type');

        }
    }
}


// Banking System
// You’re building a small Banking App backend module where:

// We have different account types (SavingsAccount, CurrentAccount),

// Each account stores private balance (encapsulation),

// Transactions (deposit/withdraw) are logged by a Singleton Logger,

// Accounts are created via a Factory pattern so we don’t directly use new.

// logger
// ---------------- Singleton Logger ----------------
class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance; // ensures only one instance
        }
        this.logs = [];
        Logger.instance = this;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`[${timestamp}] ${message}`);
    }

    getLogs() {
        return this.logs;
    }
}

// ---------------- Base Account ----------------
class Account {
    #balance; // private field

    constructor(name, initialBalance) {
        this.name = name;
        this.#balance = initialBalance >= 0 ? initialBalance : 0;
        this.logger = new Logger(); // all accounts share same logger
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount < 0) {
            console.log("❌ Balance cannot be negative!");
            return;
        }
        this.#balance = amount;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("❌ Deposit must be positive!");
            return;
        }
        this.#balance += amount;
        this.logger.log(`${this.name} deposited ₹${amount}. New balance: ₹${this.#balance}`);
    }

    withdraw(amount) {
        throw new Error("Withdraw method must be implemented by subclass");
    }
}

// ---------------- Savings Account ----------------
class SavingsAccount extends Account {
    constructor(name, initialBalance) {
        super(name, initialBalance);
        this.interestRate = 0.05;
    }

    withdraw(amount) {
        if (amount <= 0) return console.log("❌ Withdrawal must be positive!");
        if (this.balance - amount < 0) {
            console.log("❌ Insufficient funds!");
            return;
        }
        this.balance = this.balance - amount;
        this.logger.log(`${this.name} withdrew ₹${amount}. New balance: ₹${this.balance}`);
    }
}

// ---------------- Current Account ----------------
class CurrentAccount extends Account {
    constructor(name, initialBalance) {
        super(name, initialBalance);
        this.overdraftLimit = 10000;
    }

    withdraw(amount) {
        if (amount <= 0) return console.log("❌ Withdrawal must be positive!");
        if (this.balance - amount < -this.overdraftLimit) {
            console.log("❌ Overdraft limit exceeded!");
            return;
        }
        this.balance = this.balance - amount;
        this.logger.log(`${this.name} withdrew ₹${amount}. New balance: ₹${this.balance}`);
    }
}

// ---------------- Factory ----------------
class AccountFactory {
    static createAccount(type, name, initialBalance) {
        switch (type) {
            case "Savings":
                return new SavingsAccount(name, initialBalance);
            case "Current":
                return new CurrentAccount(name, initialBalance);
            default:
                throw new Error("Invalid account type");
        }
    }
}

// ---------------- Usage ----------------
const acc1 = AccountFactory.createAccount("Savings", "Om", 5000);
const acc2 = AccountFactory.createAccount("Current", "John", 2000);

acc1.deposit(2000);
acc1.withdraw(1000);

acc2.withdraw(5000);
acc2.withdraw(12000); // overdraft check

console.log("\n📜 All Logs:");
console.log(new Logger().getLogs()); // returns same instance logs
