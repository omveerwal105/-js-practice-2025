//  Problem 1: Remove Duplicates from Sorted Array
const arr = [1, 1, 2, 2, 3, 3, 3, 4];

// ✅ Two-pointer technique

// ✅ In-place modification

// ✅ No extra space used

// ✅ O(n) time complexity

// ✅ O(1) space complexity

function remove(arr){
    if(arr.length===0) return 0;
    let i =0;

    for(let j=1;j<arr.length;j++){                
        if(arr[j]!==arr[i]){
            i++;
            arr[i]=arr[j];
        }
    }
    return i + 1;
    
}
console.log(remove(arr));


//  Problem 2: First Non-Repeating Character

const str = 'leetcode';
function unique(str){
    let count = {};
     str = str.toLowerCase(); 
    for(let i=0;i<str.length;i++){
        count[str[i]] = (count[str[i]] || 0) + 1;
    }
    for(let i=0;i<str.length;i++){
        if(count[str[i]]===1){
            return i;
        }
    }
    return -1;
}
console.log(unique(str));

// Write a function to group an array of strings into anagrams.
const words = ["bat", "tab", "tap", "pat", "cat", "act"];

function group(words){
  let map = {};
  for(let word of words){
    const sorted = word.split('').sort().join('');
    if(!map[sorted]){
        map[sorted] = [];
    }
    map[sorted].push(word);
  }
  return Object.values(map);
}
console.log(group(words))
