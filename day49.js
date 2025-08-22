const  arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0], k = 3
// Output: sum = 16, subarray = [7, 8, 1]

function sliding(arr,k){
    let left = 0;
    let maxSum = 0;
    let sum = 0;
    let subarray =0;

    for(let right = 0;right<arr.length;right++){
        sum+=arr[right];
        while(right-left+1>k){
            sum-=arr[left];
            left++;
        }
        if(right-left+1===k){
            if(sum>maxSum){
                maxSum = sum;
             subarray = left;
            }
        }
    }
    const bestSubarray = arr.slice(subarray , subarray+k);
    return {maxSum , bestSubarray};
}
console.log(sliding(arr , k));

// fetchWithRetry

async function fetchWithRetry(url , retries = 3 , delay = 1000) {
    for(let attempt = 0; attempt <= retries ; attempt++){
        try {
            const res = await fetch(url);

            if(!res.ok){
                if(res.status>=400 && res.status < 500 ){
                    throw new Error(`Client Error ${res.status}: ${res.statusText}`);
                }
            }

            const data = await res.json();
            return data;
        }catch(err){
            if(attempt === retries){
                console.error(`Failed after ${retries + 1} fetchWithRetry`);
                throw err;
            }
            const backoff = delay * 2 ** attempt;
            console.warn(`Attempt ${attempt +1 }failed.Retrying in ${backoff}ms..`);
            await new Promise((res)=>setTimeout(res,backoff));
        }
    }
}
(async () => {
  try {
    const data = await fetchWithRetry(
      "https://dummyjson.com/products/1", // try a valid or invalid URL
      4, // retries
      1000 // initial delay 1s
    );
    console.log("Fetched data:", data);
  } catch (err) {
    console.error("Fetch failed:", err.message);
  }
})();