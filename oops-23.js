class Bank {
    #balance;

    constructor(name, balance) {
        if (balance < 0) throw new Error("Initial balance cannot be negative");
        this.name = name;
        this.#balance = balance;
    }

    get balance() {
        return `₹${this.#balance.toFixed(2)}`;
    }

    set balance(value) {
        throw new Error("Direct balance modification is not allowed");
    }

    deposit(amount) {
        if (amount <= 0) throw new Error('Deposit amount must be positive');
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error('Withdrawal amount must be positive');
        if (amount > this.#balance) throw new Error('Insufficient balance — overdraft not allowed');
        this.#balance -= amount;
    }
}
