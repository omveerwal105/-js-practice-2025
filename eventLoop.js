// event Loop
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");


console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
  setTimeout(() => {
    console.log("D");
  }, 0);
}).then(() => {
  console.log("E");
});

console.log("F");

// a f c e b d

console.log('a');
Promise.resolve().then(()=>{
    console.log('c');
    setTimeout(()=>{
        console.log('b');
    },0);
}).then(()=>{
    setTimeout(()=>{
        console.log('d');
    })
    console.log('f');
})

setTimeout(()=>{
    console.log('e');
},0);
console.log('g') 


console.log('1');

setTimeout(() => {
    console.log('2');
    Promise.resolve().then(() => {
        console.log('3');
    });
}, 0);

Promise.resolve().then(() => {
    console.log('4');
    setTimeout(() => {
        console.log('5');
    }, 0);
}).then(() => {
    console.log('6');
});

console.log('7');

