// Sequential vs Parallel Async Execution (async/await)

// 👉 Sequential: Each await waits before moving on.
// 👉 Parallel: Kick off all promises, then wait for them together.

function delay(ms , val){
    return new Promise(res  => setTimeout(()=>res(val),ms));
};

async function Sequential() {
    console.time('sequential');
    console.log(await delay(1000 , 'A'));
    console.log(await delay(1000,'B'));
    console.timeEnd("Sequential");
}

// parallel

async function parallel() {
    console.time("Parallel");
    const [a,b] = await Promise.all([delay(1000,'A'),(delay(1000,'B'))]);
    console.log(a,b);
    console.timeEnd("parallel");
}

Sequential();

parallel();

// . Retry Logic (with max attempts)

// 👉 Retry API call up to n times before failing.

async function  fetchWithRetry(url , retries=3){
    for(let i=0;i<retries;i++){
        try{
            let res = await fetch(url);
            if(!res.ok) throw new Error('API error');
            return await res.json();
        } catch(err){
            console.log(`Retry ${i+1} failed`);
            if(i===retries-1) throw err;
        }
    }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1")
.then(data => console.log("Date:",data))
.catch(err => console.log("Final error:",err));

debounce

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Throttle
function throttle(fn, limit) {
  let inThrottle = false;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Example
const searchApi = (q) => console.log("API call with:", q);

const debouncedSearch = debounce(searchApi, 500);
const throttledScroll = throttle(() => console.log("Scroll event"), 1000);

// Abort Controller

const Controller = new AbortController();

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  signal: Controller.signal,
})
  .then((res) => res.json())
  .then((data) => console.log("Data:", data))
  .catch((err) => {
    if (err.name === "AbortError") {
      console.log("fetch aborted");
    } else {
      console.error("error", err);
    }
  });

setTimeout(() => Controller.abort(), 100);

//

async function fetch3APIs() {
  console.time("Total Time");

  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];

  try{
    const response = await Promise.all(urls.map(url => fetch(url)));

    const data = await Promise.all(response.map(res=>res.json()));

    console.log("Data:",data);
  } catch(err){
    console.error("error",err);
  }
  console.timeEnd("Total Time");
}

fetch3APIs();


async function fetch3APIsSequential() {
  console.time("Sequential Time");

  try {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data1 = await res1.json();

    const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const data2 = await res2.json();

    const res3 = await fetch("https://jsonplaceholder.typicode.com/posts/3");
    const data3 = await res3.json();

    console.log("Data:", [data1, data2, data3]);
  } catch (err) {
    console.error("Error:", err);
  }

  console.timeEnd("Sequential Time");
}

fetch3APIsSequential();


async function  retryFetch(url , retries = 3 , delay = 500){
    for(let i=0;i<retries;i++){
        try{
            const response = await fetch(url);

            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status} `);
            }
            return await response.json();
        } catch(err){
            console.warn(`attempts ${i+1} failed :`,err.message);
        }
        if(i+1===retries){
             throw new Error("All retries failed ❌");
        }
    }
}
retryFetch("https://jsonplaceholder.typicode.com/posts/1", 3)
  .then(data => console.log("Success ✅:", data))
  .catch(err => console.error("Failed ❌:", err.message));


