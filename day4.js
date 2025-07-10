// Input: [12, 5, 9, 21, 21, 17, 3] 
 
 function secondLargest(arr){             
    let secondMax=-Infinity;
    let max=-Infinity;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            secondMax=max
            max=arr[i]; 
        }
        else if(arr[i]>secondMax && arr[i]<max){
            secondMax=arr[i];
        }
    }
    return secondMax;
}
console.log(secondLargest( [12, 5, 9, 21, 21, 17, 3] ));


function removeDuplicate(arr) {
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicate([10, 20, 10, 30, 20, 40])); 