// 1️⃣ Filter out usernames with length > 5
const names = ["Om", "Shivani", "Vijeta", "Dev", "khushi"];

const filterNames = names.filter((name)=>name.length > 5);
console.log(filterNames);

function filterName(names){
    const result = [];
    for(let name of names){
        if(name.length > 5){
            result.push(name);
        }
    }
    return result;
}
console.log(filterName(names));

// 2️⃣ Count frequency of each letter in a string
const str = "codesthetics";

function countFreq(str){
  
    const freq = {}

    for(let char of str){
    
        freq[char] = (freq[char] || 0) +1;
    }
    return freq;
}
console.log(countFreq(str));


