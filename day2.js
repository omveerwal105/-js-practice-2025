function isPalindrome(str){
    let i=str[0];
    let j=str.length-1;
    while(i<=j){
        if(str[i]!==str[j])
        {
            return false;
        }        
        i++;
        j--;
    }
    return true;
}
console.log(isPalindrome("racecar"));


function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));