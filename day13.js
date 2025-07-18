// map 
const nums = [1, 2, 3, 4];
const double =  nums.map((item)=>item*2);
console.log(double);

// filter
const arr = [5, 6, 7, 8, 9];
const filterArr = arr.filter((arr)=>arr %2 === 0 );
console.log(filterArr);

//  reduce
const cart = [
  { item: "Shirt", price: 799 },
  { item: "Shoes", price: 1999 },
  { item: "Cap", price: 299 },
];

const totalSum = cart.reduce((sum , item)=>{
    sum+=item.price; 
    return sum;
},0);

console.log(totalSum);

// get names of user over 25
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 29 },
  { name: "Charlie", age: 31 },
];


const adults = users.filter((user)=>user.age > 25);
const names = adults.map((user)=>user.name);
console.log(names);

// Count Frequency of Words

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const freqWords = words.reduce((count, word) => {
  count[word] = (count[word] || 0) + 1;
  return count;
}, {});
console.log(freqWords);

//  Reverse all strings and filter those with length > 3

const naming = ["Om", "Veer", "Jay", "Naman"];


const reversed = naming.map((name)=>{
    return name.split('').reverse().join('');
});

const result = reversed.filter((name)=>name.length > 3);

console.log(result);




