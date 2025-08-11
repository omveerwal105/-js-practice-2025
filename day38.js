// debounce 
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Example
const logSearch = debounce((query) => {
    console.log("Searching for:", query);
}, 500);

logSearch("React"); 
logSearch("React Debounce");


// Throttle (from scratch).
// A function that ensures execution happens at most once every X milliseconds.
// Used for: Scroll events, button spam prevention.

function throttle(fn , limit){
    let inThrottle = false;
    return function (...args) {
        if(!inThrottle) {
            fn.apply(this,args);
            inThrottle = true;
            setTimeout(()=>{
                inThrottle = false;
            },limit);
        }
    };
}
const logScroll = throttle(() => {
    console.log("Scrolled:", Date.now());
}, 1000);




// Challenge 3 — Frequency Counter 

function countOccurences(arr){
    const freq = {};
    for(let i =0 ;i <arr.length;i++){
        const item = arr[i];
        if(freq[item]) {
            freq[item]++
        } else {
            freq[item] = 1;
        }
    }
     return freq;
}

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(countOccurences(fruits));
