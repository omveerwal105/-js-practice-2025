// sliding window

const s = 'abcabcbb';

function sliding(s){
    let count = {};
    let left =0;
    let maxLen = -Infinity;
    for(let right = 0; right<s.length;right++ ){
        count[s[right]] = (count[s[right]]||0) +1;
        while(count[s[right]]>1){
            count[s[left]]--;
            if(count[s[left]]===0){
                delete count[s[left]];
            }
            left++;
        }
        maxLen = Math.max(maxLen , right - left +1);
    }
     return maxLen;
}
 console.log(sliding(s));

//  api fetch

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data=>console.log('Data',data.slice(1,5)))
.catch(err => console.error(err));

async function getPosts() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data.slice(0,5));
    } catch (err){
        console.error(err);
    }
}
getPosts();

