const arr =  [10, 20, 4, 45, 99];
function secondMax(arr){
    let max = arr[0];
    let secMax = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            secMax = max;
            max=arr[i];
        }
        else if(secMax > arr[i] && secMax < max){
            secMax = arr[i];
        }
    }
    return secMax;
}
console.log(secondMax(arr));

const str =  "A man, a plan, a canal: Panama"

function palindrome(str){
     str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let i =0;
    let j=str.length-1;
    while(i<j){
        if(str[i]!==str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(palindrome(str));

const nums = [1, 2, 3];
const result = nums.map((num)=>num*2);

console.log(result);

const products = ["apple", "Banana", "banana", "Avocado", "apricot", "Mango", "mango"];
const letter = "a";

const res = products.filter((product)=>product)





