// Filter only products priced above ₹20,000.

// Get only their names in uppercase.

// Calculate the total price of these filtered products.

const products = [
  { name: "Laptop", price: 60000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 25000 },
  { name: "Earbuds", price: 3000 }
];

const result = products.filter((product)=>product.price >20000);
const upperCase = result.map((product)=>product.name.toUpperCase());
const totalPrice = result.reduce((sum , product)=>sum + product.price , 0);

console.log("Uppercase Names:", upperCase);

console.log(totalPrice);


// Challenge 2 – Sort Objects by Multiple Keys

const students = [
  { name: "Ravi", grade: "B", age: 20 },
  { name: "Anita", grade: "A", age: 19 },
  { name: "Priya", grade: "A", age: 22 },
  { name: "Karan", grade: "B", age: 19 }
];

const res = students.sort((a,b)=>{
    if(a.grade === b.grade){
        return a.age - b.age;
    }
    return a.grade.localeCompare(b.grade)
});
console.log(res);

// Problem 1 – Easy: Remove Duplicates from Sorted Array

// Given a sorted array nums, remove the duplicates in-place so that each element appears only once and return the new length.
// You must use O(1) extra space.


const nums = [1,1,2,2,3];

function duplicates(nums){
    let j = 1;
    for(let i =1;i<nums.length;i++){
        if(nums[i] !== nums[i-1]){
            nums[j]=nums[i];
            j++;
        }
    }
    nums.length = j;
    
    return nums;
}

console.log(duplicates(nums));

// Problem 2 – Medium: Longest Substring Without Repeating Characters

const str  = "abcabcbb";

function longest(str){
    let seen = new Set();
    let len = 0;
    let j =0;

    for(let i =0;i<str.length;i++){
        while(seen.has(str[i])){
            seen.delete(str[j]);
            j++;
        }
        seen.add(str[i]);
        len = Math.max(len , i - j +1);
    }
    return len;
}
console.log(longest(str));


const products2 = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 }
];
const highestPrice = products2.reduce((max , product)=>{
  return product.price > max.price ? product : max;
},products2[0]);

console.log(highestPrice);

function isPrime(n) {
  if (n < 2) return false; // primes are >= 2
  for (let i = 2; i <= Math.sqrt(n); i++) { // optimization: sqrt(n)
    if (n % i === 0) return false;
  }
  return true;
}
const nums2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primes = nums2.filter(isPrime);

console.log(primes);
