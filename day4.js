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


// my map custom function

Array.prototype.myMap = function(callback) {
    let result = [];
    for(let i=0;i<this.length;i++){
        const modified = callback(this[i]);
        result.push(modified);
    }
    return result;
}

const nums = [1,2,3];
const doubled = nums.myMap(x=> x*2);
console.log(doubled);

// my filter custom function

Array.prototype.myFilter = function(callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {         
      result.push(this[i]);
    }
  }

  return result;
};

const num = [5, 7, 8, 12, 15];
const find = num.myFilter(x => x > 10);
console.log(find);

//Reduce
const arr = [1, 2, 3, 4, 5];

const product = arr.reduce((acc,curr)=>{
    return acc * curr
},1);
console.log(product);


//custom reducer function

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }

    return accumulator;
};

const array = [1, 2, 3, 4];

const sum = array.myReduce((acc,curr)=>curr + acc,0);
console.log(sum);