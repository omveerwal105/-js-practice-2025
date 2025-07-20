//  Array Rotation by k
const array = [1,2,3,4,5];
let k = 2;
function reverse(arr , start ,end){
    while(start < end){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }
}

class Solution {
       rotate(arr,k){
        let n = array.length;
        k=k%n;
        if(k===0) return;

        reverse(arr,0,n-1);
        reverse(arr,0,k-1);
        reverse(arr,k,n-1);
        
    }
}

const solution = new Solution();
solution.rotate(array,k);
console.log(array);

// Word Frequency Counter
const str = 'this is a test this is only a test';

function freq(str){
    const word = str.split(' ');
    const count = {};

    for(let words of word){
        count[words] = (count[words] || 0)+1;
    }

    return count ;

}
console.log(freq(str));