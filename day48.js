// Example: arr = [1,1,1,2,2,3], k = 2 → Output: [1,2]
//"Top K Frequent Elements"

const nums = [1,1,1,2,2,3], k = 2;

function frequent(nums){
    let seen = new Map();

    for(let num of nums){
        seen.set(num , (seen.get(num)||0)+1);
    }

    const bucket = new Array(nums.length+1).fill(null).map(()=>[]);

    for(let [num , freq] of seen.entries()){
        bucket[freq].push(num);
    }
    let result  = [];
    for(let i =bucket.length-1;i>=0 && result.length<k; i--){
        if(bucket[i].length>0){
        result.push(...bucket[i]);
        }
    }
     return result;
}
console.log(frequent(nums));
