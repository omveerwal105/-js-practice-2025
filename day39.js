// Group an Array of Objects by City

const people = [
  { name: "Alice", city: "Delhi" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Delhi" }
];

const result = people.reduce((acc, curr)=>{
    const city = curr.city;
    if(!acc[city]){
        acc[city] = [];
    }
    acc[city].push(curr);
    return acc;
},{});

console.log(result);


// 2️⃣ Deep Clone an Object (Without structuredClone)

const obj = { a: 1, b: { c: 2 } };

const cloneObj = JSON.parse(JSON.stringify(obj));

console.log(cloneObj);


function deepClone(obj) {
    if(obj === null || typeof obj !== 'object') return obj;

    if(Array.isArray(obj)){
        return obj.map((item)=>deepClone(item));
    }

    const clonedObj = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return cloneObj;
}
console.log(deepClone(obj));

//  First Non-Repeating Character in a String
const str = "swiss";

function nonRepeating(str){
    const count = {};

    for(let word of str){
        count[word] = (count[word]||0)+1;
    }
    for(let word of str){
        if(count[word] === 1){
            return word;
        }
    }
    return null;
}

console.log(nonRepeating(str));

//  Merge Overlapping Intervals

const intervals = [[1,3], [2,6], [8,10], [15,18]];

function mergeArr(intervals){
    intervals.sort((a,b)=>a[0]-b[0]);

    let result = [intervals[0]]; // 1 , 3

    for(let i =1 ;i<intervals.length;i++){
        let last = result[result.length - 1] ;
        let current = intervals[i];

        if(current[0] <= last[1]){
            last[1] = Math.max(last[1],current[1]);
        }
        else {
            result.push(current);
        }
    }
    return result;
}
console.log(mergeArr(intervals));

// 2️⃣ Flatten a Deeply Nested Array Without flat()
const arr = [1, [2, [3, [4]], 5]];

function flattenArr(arr){

    
    let result =[];

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
          result = result.concat((flattenArr(arr[i])));  
        }else {
        result.push(arr[i]);
        }
    }
    return result;
}
console.log(flattenArr(arr));


// 3️⃣ Implement a Debounce Function
// Write a debounce function that ensures a function is only called after it hasn’t been called for a certain delay.

function debounce(fn , delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}


function log() {
  console.log("Hello");
}
const debouncedLog = debounce(log, 1000);
debouncedLog(); 
debouncedLog(); // Only logs once after 1 second

