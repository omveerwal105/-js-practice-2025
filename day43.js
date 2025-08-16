const  arr = [2, 1, 5, 1, 3, 2], k = 3
  // subarray [5,1,3]

function sliding(arr , k){
    let start =0;
    let maxSum = -Infinity;
    let sum =0;
    for(let end=0;end<arr.length;end++){
        sum += arr[end];
        while(end - start +1 >k){
            sum -= arr[start];
            start++;
        }
        if(end - start +1===k){
            maxSum = Math.max(maxSum , sum);
        }
    }
    return maxSum;
}
console.log(sliding(arr,k));

// First Negative Number in Every Window of Size k

// Problem:
// Given an array and a number k, for each window of size k,
//  print the first negative number in that window. If no negative number, print 0.

const nums = [12, -1, -7, 8, -15, 30, 16, 28], t = 3;
//   [-1, -1, -7, -15, -15, 0]

function firstNegativeInWindow(nums , k){
    let result = [];
    let queue = [];

    let n = nums.length;

    for(let i =0;i<n;i++){
        if(nums[i]<0){
            queue.push(i);
        }

        while(queue.length>0 && queue[0]<=i-k){
            queue.shift();
        }

        if(i >= k-1 ){
            if(queue.length>0){
                result.push(nums[queue[0]]);
            } else {
                result.push(0);
            }
        }
    }
    return result;
}
console.log(firstNegativeInWindow(nums , k));

// Problem:
// Given a string, find the length of the longest substring with at most k distinct characters.

const s = "eceba", kk = 2  ;

function substring(s,kk){
    let count = {};
    let start = 0;
    let maxLen = -1;

    for(let i=0;i<s.length;i++){
        count[s[i]] = (count[s[i]] || 0) +1;

        while(Object.keys(count).length>kk){
            count[s[start]]--;
            if(count[s[start]]===0){
                delete count[s[start]];
            }
            start++;
        }
        maxLen = Math.max(maxLen , i-start + 1);
    }
    return maxLen;
}
console.log(substring(s,kk));


// Problem:
// Given an array of positive integers and a number S,
//  find the length of the smallest contiguous subarray whose sum is greater than or equal to S.
//   Return 0 if no such subarray exists.

const array = [2,3,1,2,4,3], S = 7

function subarray(array , s){
    let start =0;
    let minLen = Infinity;
    let sum =0;

    for(let end =0;end<array.length;end++){
        sum +=array[end];

        while(sum>=s){
            minLen = Math.min(minLen , end - start +1);
            sum -= array[start];
            start++;
        }
        
    }
     return minLen === Infinity ? 0 : minLen;
}
console.log(subarray(array , S));