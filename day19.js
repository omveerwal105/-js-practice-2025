// Given an array of positive integers and a target sum k, return true if there's a contiguous subarray that adds up to k.

const arr = [1, 3, 2, 5, 1, 1, 2, 3], k = 8 ;

function targetSum(arr,k){
    let sum =0;
    let start =0;
    for(let end =0;end<arr.length;end++){
        while(sum>k && start <= end){
            sum -= arr[start];
            start++;
        }
        sum+=arr[end];

        if(sum===k){
            return true;
        }
    }
    return false;
}
console.log(targetSum(arr,k));

// Given an array of integers, return an object (map) showing the frequency of each element.

const nums =  [1, 2, 2, 3, 1, 4, 2]  ;

function countNum(nums){
    let seen = new Map();

    for(let i=0;i<nums.length;i++){
        const num = nums[i];
       seen.set(num , (seen.get(num) || 0 )+1);
    }
    return Object.fromEntries(seen); 

}
console.log(countNum(nums));

// two sum 
const  num = [2, 7, 11, 15], target = 9 ;

function twoSum(num,target){
    let seen = new Map();
    for(let i=0;i<num.length;i++){
        const compliment = target - num[i];
        if(seen.has(compliment)){
            return [seen.get(compliment),i];
        }
        seen.set(num[i],i);
        
    }
    return null;
}
console.log(twoSum(num,target));