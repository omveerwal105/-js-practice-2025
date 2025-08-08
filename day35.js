// filter functions

const nums =  [1, 2, 3, 4, 5, 6]
const filterArr = nums.filter((num)=>num%2===0);
console.log(filterArr);


// Input: [{name: 'task1', completed: true}, ...]
// Output: only tasks with completed = true

const tasks = [{name: 'task1', completed: true } , {name :'task2' , completed : false} , {name : 'task3' , completed : true}]

const filterTasks = tasks.filter((task)=>task.completed );
console.log(filterTasks);

// reduce

const arr = [1, 2, 3, 4]
// Output: 10
const Totalsum = arr.reduce((acc , sum)=>acc+sum,0);
console.log(Totalsum);


const str = 'hello';

const freqCount = str.split('').reduce((acc,curr)=>{
    acc[curr] = (acc[curr]||0)+1;

    return acc;
},{})
console.log(freqCount);

// flatten array


// Output: [1, 2, 3, 4, 5]

const flatten = (arr) => {
   return  arr.reduce((acc,curr)=>{
        if(Array.isArray(curr)){
            return acc.concat(flatten(curr));
        }
        else {
            return acc.concat(curr);
        }
    },[])
};
const array1 = [[1, 2], [3, 4], [5]];
console.log(flatten(array1));

// own map function using reduce 

const myMap = (arr,callback) => {
    return arr.reduce((acc,curr,index)=>{
        acc.push(callback(curr,index));
        return acc;
    },[]);
};

console.log(myMap([1, 2, 3], (n) => n * 2)); 