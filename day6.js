

//using map function
const prices = [100, 200, 300];


const gstPrices = prices.map(price => (price * 1.10).toFixed(2));

console.log(gstPrices); 


// using filter
const users = [
  { name: "Om", isActive: true },
  { name: "Veer", isActive: false },
  { name: "Wal", isActive: true }
];
// Q: Get only active users
const updatedUser = users.filter((user)=>user.isActive);

console.log(updatedUser);

// using reducer

const cart = [
  { item: "Shirt", price: 500 },
  { item: "Shoes", price: 1500 },
  { item: "Cap", price: 200 }
];
// Q: Calculate total cart value

const totalSum = cart.reduce((acc,curr)=>{
    acc+=curr.price;
    return acc;
},0);
console.log(totalSum);

// using some 
const scores = [88, 92, 76, 45];
// Q: Check if anyone failed (score < 50)

const failed = scores.some((score)=>score <50);
console.log(failed);

// .every

const ages = [22, 24, 29, 20];
// Q: Check if all are above 18

const adult = ages.every((age)=>age>18);
console.log(adult);

//✅ Filter out only active members

// 🔠 Map their names into uppercase

// 🧓 Check if all active members are above 20 

// 📦 Return an object like: 

const members = [
  { name: "Om", age: 22, isActive: true },
  { name: "Veer", age: 25, isActive: true },
  { name: "Jay", age: 19, isActive: false },
  { name: "Raj", age: 27, isActive: true }
];

const updated = (members)=>{
    const activeUser = members.filter((user)=>user.isActive);
    const uppercaseUser = activeUser.map((user)=>(user.name).toUpperCase());
    const allAdult = activeUser.every((user)=>user.age>18);

    return {
        activeNames : uppercaseUser,
        allAbove20 : allAdult
    };
};
console.log(updated(members));


