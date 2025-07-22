//  Task 1: Manual Inheritance Using Object.create()

const Person = {
  isHuman: true,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
   Walk() {
    console.log(`${this.name} can walks`)
  }
};

const om = Object.create(Person);
om.name = "Om";
om.greet();
om.Walk(); 

// Create a custom hierarchy like:
// User → AdminUser → SuperAdmin

// Each one should override/add its own method or property.
// Let me know when you’re done and I’ll review it.

const User = {
    role : 'user dept',

    responsibility() {
        console.log(`Resposnibilty of a ${this.role}`);
    }
};

const AdminUser = Object.create(User);
AdminUser.role = "Admin dept";

AdminUser.responsibility = function () {
    console.log(`${this.role} Manages the whole User dept`);
}

const SuperAdmin = Object.create(AdminUser);
SuperAdmin.role = "Super Admin dept";

SuperAdmin.responsibility = function () {
    console.log(` ${this.role} Manages the whole admin dept `)
}

// User (name, email) → Admin (level) → SuperAdmin (permissions)

class user {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(`Loign as a ${this.name}`);
    }
}
class admin extends user {
    constructor(name , email , level){
        super(name,email);
        this.level = level;
    }
    deleteUser(){
         console.log(`${this.name} (${this.level}) has access to delete users`);
    }
}
class superAdmin extends admin {
    constructor(name , email , level , permission){
        super(name , email , level);
        this.permission = permission;
    }
    accessServer(){
          console.log(`${this.name} with ${this.permission} permission can access the server`);
    }
}

const khushi = new superAdmin('om', 'om@example.com', 'Top-Level', 'Full');



khushi.login();         
khushi.deleteUser();    
khushi.accessServer();  
