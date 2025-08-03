class User {
  static #count = 0; // private static counter
  #subscriptionStatus;

  constructor(name, goal, subscription = 'Inactive') {
    this.name = name;
    this.goal = goal;
    this.#subscriptionStatus = subscription;
    User.#count++; // increment on each instantiation (including subclasses)
  }

  // static method to get total users created
  static getUserCount() {
    return User.#count;
  }

  get subscriptionStatus() {
    return this.#subscriptionStatus;
  }

  set subscriptionStatus(status) {
    this.#subscriptionStatus = status;
  }

  getDetails() {
    return `${this.name} wants to ${this.goal}`;
  }

  getSubscription() {
    return `${this.name} has a subscription status: ${this.#subscriptionStatus}`;
  }
}

class PremiumUser extends User {
  constructor(name, goal, planType, subscription) {
    super(name, goal, subscription);
    this.planType = planType;
  }

  getPlan() {
    return `${this.name} has a ${this.planType} plan.`;
  }

  renewPlan() {
    this.subscriptionStatus = 'active';
    return `${this.name} has renewed their ${this.planType} plan.`;
  }
}

// Example usage:
const u1 = new User('Rahul', 'lose weight', 'active');
const u2 = new PremiumUser('Om', 'gain strength', 'Gold', 'expired');
const u3 = new PremiumUser('Alice', 'learn coding', 'Platinum', 'inactive');

console.log(u1.getDetails()); // Rahul wants to lose weight
console.log(u2.getPlan());    // Om has a Gold plan.
console.log(u2.getSubscription()); // Om has a subscription status: expired
console.log(u2.renewPlan());  // Om has renewed their Gold plan.
console.log(u2.getSubscription()); // Om has a subscription status: active

console.log('Total users created:', User.getUserCount()); // 3

// auth

const AuthManager = (function () {
  let instance; // private variable

  function createInstance() {
    const token = Math.random().toString(36).substr(2);
    return { token };
  }

  return {
    getInstance: function () {
      if (!instance) instance = createInstance();
      return instance; // fixed typo here
    }
  };
})(); // <-- added parentheses to execute immediately


const a1 = AuthManager.getInstance();
const a2 = AuthManager.getInstance();

console.log(a1.token);  
console.log(a2.token);  
console.log(a1 === a2); 
