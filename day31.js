// flatten array

const arr = [1, [2, [3, [4]], 5]];

function flat(arr){
    let result = [];

    for(let i =0 ;i<arr.length;i++){
        const value = arr[i];

        if(Array.isArray(value)){
            result = result.concat(flat(value));
        }
        else {
            result.push(value);
        }
    }
    return result;
}
console.log(flat(arr));

// deboucned fucntion

function debounce(func, delay) {
  let timerId;

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const say = (msg) => console.log(msg);
const debouncedSay = debounce(say, 1000);

debouncedSay('Hello Om');


// Deep Clone an Object — Must-Know Interview Problem

const original = {
  name: "Om",
  info: {
    age: 24,
    skills: ["React", "Redux"]
  }
};

const clone = deepClone(original);
clone.info.skills.push("Node.js");

console.log(original.info.skills); // Should NOT include "Node.js"

function deepClone(value , seen = new WeakMap()) {
    if (value === null || typeof value !== 'object') return value;

    let copy;

    if(Array.isArray(value)){
        copy = [];
        seen.set(value , copy);
        for(let i =0;i<value.length;i++){
            copy[i] = deepClone(value[i] ,seen );
        }
    }
    else {
        copy = {};
        seen.set(value , copy);
        for(const key of Object.keys(value)){
             copy[key] = deepClone(value[key],seen);
        }
    }

    return copy;
}
console.log(original.info.skills); // ["React", "Redux"] — unaffected
console.log(clone.info.skills);  


// 



