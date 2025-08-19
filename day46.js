// Implement Debounce & Throttle functions from scratch

// debounce

function debouncing(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

console.log('hello');
function log(){
    console.log('Hello');
}
const debouncedLog = debouncing(log , 1000);

debouncedLog();
debouncedLog();
debouncedLog();

// throttle

function throttling(fn , delay){
    let last =0;
    return function (...args){
        let now = Date.now();
        if(now - last >=delay){
            fn.apply(this,args);
            last = now
        }
    };
}

function log() {
    console.log("Hello",Date.now());
}
const throttledLog = throttling(log, 1000);
 
setInterval(throttledLog , 200);