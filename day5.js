function createCounter(){
    let counter =0;
    return function innerCounter(){
        counter++;
        console.log(counter);
    }
}
const count = createCounter();

// promise function

const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Task DOne");  
    }, 1000);
});
myPromise
.then((mssg)=>{
    console.log(mssg ,'1st then');
    return mssg + 'passed to the other';
})
.then((Nextmssg)=>{
    console.log(Nextmssg ,'2nd then ');
})
.catch((err)=>{
    console.log(err,'error while loading');
})
.finally(()=>{
    console.log('clean up done');
})

// fetching api using async and await

async function fetchTodo() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data, 'fetching data');
    } catch (err) {
        console.log(err, 'error while fetching');
    } finally {
        console.log('Fetch complete ✅');
    }
}

fetchTodo();

// reverse Array 
function reverseArr(arr){
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr;
}
console.log(reverseArr([1, 2, 3, 4, 5]));


