// brute force approach

// Find the maximum sum of any subarray of size k.

const nums = [2, 1, 5, 1, 3, 2],
  k = 3;

// function subarray(nums,k){
//     let maxSum = 0;
//     let sum =0;
//     for(let i=0;i<=nums.length-k;i++){
//         sum=0;
//         for(let j=i;j<i+k;j++){
//             sum+=nums[j];
//         }
//         maxSum = Math.max(maxSum , sum);
//     }
//     return maxSum;
// }

// console.log(subarray(nums , k));

// sliding window approach

function sliding(nums, k) {
  let left = 0;
  let sum = 0;
  let maxSum = -Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (right - left + 1 > k) {
      sum -= nums[left];
      left++;
    }
    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}
console.log(sliding(nums, k));
