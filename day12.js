// Converted to async/await:

function fetchDataPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve('Data Recieved'),1000);
    })
}

async function getData() {
    const mssg = await fetchDataPromise();
    console.log(mssg);
}
getData();




// duplicates
const arr = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr){
    let result = [];

    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result ;
}
console.log(removeDuplicates(arr));

// Flatten a Nested Array  (recursion)
const array = [1, [2, [3, [4]]]];

function flattenArray(array){
    const result = [];

    for(let i=0;i<array.length;i++){
       if(Array.isArray(array[i])){
        const flat = flattenArray(array[i]);
        result.push(...flat);
       }
       else {
        result.push(array[i]);
       }

    }
    return result;
}
console.log(flattenArray(array));


// palindrome questions 

const str = 'A man a plan a canal Panama';

function checkPalindrome(str){
    let result = str.replace(/\s+/g, '').toLowerCase();
    let i=0;
    let j=result.length-1;
    while(i<j){
        if(result[i]!==result[j]){
          return false;
        }
        i++;
        j--;
    }

    return true;
  
}
console.log(checkPalindrome(str));

// custom map function

Array.prototype.myMap = function(callback){
    let result = [];
    for(let i =0 ;i<this.length;i++){
        const modified = callback(this[i]);
        result.push(modified);
    }
    return result;
}
const nums = [1,2,3];
const doubled = nums.myMap(x=>x*2);
console.log(doubled);

// debounce function
function debounce(callback, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId); // cancel previous timer

    timerId = setTimeout(() => {
      callback(...args); // run after delay
    }, delay);
  };
}

const debouncedLog = debounce((msg)=>{
      console.log("API Call:", msg);

},500);
debouncedLog('a');
debouncedLog('ab');
debouncedLog('abc');

// first non repeating character

const s = 'leetcode';

function nonRepeating(s) {
  let count = {};

  
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }

 
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) {
      return i; 
    }
  }

  return -1;
}
