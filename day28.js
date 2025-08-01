// custom filter function

Array.prototype.customFilter = function (callback, thisArg) {
    if (this === null) throw new TypeError('Called on null or undefined');
    if (typeof callback !== 'function') throw new TypeError('call back must be a function');
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            const value = this[i];

            if (callback.call(thisArg, value, i, this)) {
                result.push(value);
            }
        }

    }
    return result;
}

function customFilter2(arr, callback) {
    if (arr === null) throw new TypeError('Called on null or undefined');
    if (typeof callback !== 'function') throw new TypeError('call back must be a function');
    let result = [];

    for(let i =0;i<arr.length;i++){
        if(i in arr){
            const value = arr[i];

            if(callback(value , i , arr)){
                result.push(value);
            }
        }
    }
    return result;

}

const nums = [1, 2, 3, 4, 5];
const result = customFilter2(nums , (num) => num % 2 === 0);
const result2 = nums.customFilter((num)=>num % 2===0);
console.log(result);
console.log(result2);

// non repeating 
const str = 'aabbbcde';

function firstNonRepeatingChar(str) {
  

  let count = {};

  for(let char of str){
    count[char]  = (count[char] || 0)+1;
  }
  for(let char of str){
    if(count[char]===1){
        return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar(str));