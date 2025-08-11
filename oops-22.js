// Payment Gateway Simulation
// ---------------- Singleton Logger ----------------
class Logger {
    static instance;
    logs = [];

    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message) {
        setTimeout(() => { // async "write"
            const timestamp = new Date().toISOString();
            this.logs.push({ message, timestamp });
            console.log(`[${timestamp}] ${message}`);
        }, 500);
    }

    getLogs() {
        return this.logs;
    }
}

// ---------------- Payment Methods ----------------
class CreditCardPayment {
    #cardNumber;
    constructor(details) {
        this.#cardNumber = details.cardNumber;
        this.name = details.name;
        this.logger = Logger.getInstance();
    }

    pay(amount) {
        // Validation
        if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(this.#cardNumber)) {
            this.logger.log(`❌ Invalid card number for ${this.name}`);
            return;
        }

        // Simulate API call delay
        this.logger.log(`Processing Credit Card payment of ₹${amount} for ${this.name}...`);
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% chance success
            if (success) {
                this.logger.log(`✅ Credit Card payment of ₹${amount} for ${this.name} succeeded.`);
            } else {
                this.logger.log(`❌ Credit Card payment of ₹${amount} for ${this.name} failed.`);
            }
        }, 1500);
    }
}

class UPIPayment {
    #upiId;
    constructor(details) {
        this.#upiId = details.upiId;
        this.logger = Logger.getInstance();
    }

    pay(amount) {
        // Validation
        if (!/^[\w.-]+@[\w]+$/.test(this.#upiId)) {
            this.logger.log(`❌ Invalid UPI ID: ${this.#upiId}`);
            return;
        }

        // Simulate API call delay
        this.logger.log(`Processing UPI payment of ₹${amount} from ${this.#upiId}...`);
        setTimeout(() => {
            const success = Math.random() > 0.1; // 90% chance success
            if (success) {
                this.logger.log(`✅ UPI payment of ₹${amount} from ${this.#upiId} succeeded.`);
            } else {
                this.logger.log(`❌ UPI payment of ₹${amount} from ${this.#upiId} failed.`);
            }
        }, 1200);
    }
}

// ---------------- Factory ----------------
class PaymentFactory {
    static createPayment(type, details) {
        switch(type.toLowerCase()) {
            case "creditcard": return new CreditCardPayment(details);
            case "upi": return new UPIPayment(details);
            default: throw new Error("Invalid payment type");
        }
    }
}

// ---------------- Usage ----------------
const payment1 = PaymentFactory.createPayment("creditcard", { name: "Om", cardNumber: "1234-5678-9876-5432" });
const payment2 = PaymentFactory.createPayment("upi", { upiId: "amit@upi" });

payment1.pay(5000);
payment2.pay(2000);

setTimeout(() => {
    console.log("\n📜 All Logs:", Logger.getInstance().getLogs());
}, 4000);
