// dsa removeDuplicates
const arr = [1, 2, 2, 3, 4, 4, 5];

function removesDuplicates(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removesDuplicates(arr));

// non-repeating character

const str = "aabbccddeefo";

function nonRepeating(str){
    let count = {};
    for(let char of str){
        count[char] = (count[char] || 0) +1;
    }
    for(let char of str){
        if(count[char]===1)
            return char;
    }
    return null;
}
console.log(nonRepeating(str));

// two sum indeces

const  nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums , target){

    const seen = new Map();
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        let complement = target - num;
        if(seen.has(complement)){
            return [seen.get(complement),i];
        }
            seen.set(num , i);  
    }
};
console.log(twoSum(nums , target));