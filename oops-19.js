// You create a base class Course

// Create a child class PaidCourse

// Add enroll() method in both – child should call super.enroll() then add a custom message

// Show use of super() and method overriding

class Course {
    constructor(userName , courseType){
        this.userName = userName;
        this.courseType = courseType;
    }
    enroll(){
        console.log(`${this.userName} has been enrolled in ${this.courseType}`);
    }
}
class PaidCourse extends Course {
    constructor(userName , courseType , amount){
        super(userName , courseType);
        this.amount = amount;
    }
    enroll(){
        super.enroll();
        console.log(`Course Fee : ${this.amount} `);
    }
}

const myCourse = new PaidCourse('Om', 'React King',5000);
myCourse.enroll();


//  user managment 
// User Management System

class User {
    constructor(name, level, subscription = 'active', facility = true) {
        this.name = name;
        this.level = level;
        this.subscription = subscription;
        this.facility = facility;
    }

    userData() {
        console.log(`${this.name} has been a ${this.subscription} member at ${this.level} level.`);
    }

    getPlan() {
        if (this.subscription === 'expired') {
            console.log(`${this.name}'s subscription has expired. You will not be facilitated.`);
            this.facility = false;
        } else {
            console.log(`${this.name}'s subscription is active. Facility granted.`);
            this.subscription = 'active';
            this.facility = true;
        }
    }
}

class PremiumUser extends User {
    constructor(name, level, subscription = 'active', facility = true, amount = 0) {
        super(name, level, subscription, facility);
        this.amount = amount;
        this.premium = amount >= 1000; 
    }

    userData() {
        super.userData();
        if (this.premium) {
            console.log(`Premium amount: ${this.amount}. This member is a premium user.`);
        } else {
            console.log(`Premium amount: ${this.amount}. This member is NOT a premium user.`);
        }
    }

    getPlan() {
        super.getPlan();
        if (this.amount >= 1000) {
            this.premium = true;
            console.log(`${this.name} is upgraded to premium plan.`);
        } else {
            this.premium = false;
            console.log(`${this.name} is not eligible for premium plan.`);
        }
    }
}
const u1 = new User('Alice', 'Gold', 'expired');
u1.userData();
u1.getPlan();
console.log(u1);

const u2 = new PremiumUser('om' , 'goat','active',true , 1200 );
u2.userData();
u2.getPlan();


