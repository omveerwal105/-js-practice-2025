// You are given an array of integers. Return a new array where the numbers are sorted based on their frequency in descending order.

const nums = [4, 5, 6, 5, 4, 3]; 

function frequency(nums){
   let freqMap = new Map();
   let firstIndexMap = new Map();

   for(let i=0;i<nums.length;i++){
    freqMap.set(nums[i],(freqMap.get(nums[i]) || 0)+1);
    if(!firstIndexMap.has(nums[i])){
        firstIndexMap.set(nums[i],i);
    }
   }
   const result = [...nums].sort((a,b)=>{
    const freqA = freqMap.get(a);
    const freqB = freqMap.get(b);

    if(freqA !== freqB){
        return freqB - freqA;
    }
    else {
        return firstIndexMap.get(a) - firstIndexMap.get(b);
    }
   });

   return result;
}

console.log(frequency(nums));