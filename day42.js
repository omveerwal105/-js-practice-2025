const data = [
  { name: "Alice", role: "dev" },
  { name: "Bob", role: "dev" },
  { name: "Charlie", role: "designer" }
];

// Output: { dev: [...], designer: [...] }

const result = data.reduce((acc,curr)=>{
    const role = curr.role;
    if(!acc[role]){
        acc[role] = [];
    }
    acc[role].push(curr);
    return acc;
},{});
 
console.log(result);

// Sliding Window Technique

// Problems:

// Maximum sum subarray of size k.


const arr = [2, 1, 5, 1, 3, 2], k = 3  
function sumSubArray(arr,k){
    let start = 0;
    let sum = 0;
    let maxSum = -Infinity;
    for(let end=0;end<arr.length;end++){
        sum+=arr[end];

        while(end - start + 1 > k){
            sum-=arr[start];
            start++;
        }
        if(end-start+1===k){
            maxSum = Math.max(maxSum , sum);
        } 
    }
    return maxSum;
}

console.log(sumSubArray(arr,k)); 

// Given a string s, find the length of the longest substring without repeating characters.

const  s = "abcabcbb"  

function subString(s){
    let start =0;
    let seen = new Set();
    let maxLength = 0;

    for(let end =0;end<s.length;end++){
        while(seen.has(s[end])){
            seen.delete(s[start]);
            start++;
        }
        seen.add(s[end]);
        maxLength = Math.max(maxLength , end-start+1);
    }
    return maxLength;
}
console.log(subString(s));





