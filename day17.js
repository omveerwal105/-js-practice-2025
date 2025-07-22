// Write a function that checks whether a given string has all unique characters (case-insensitive).

const str  = "omveer";

function unique(str){
    let count = {};
     str  = str.toLowerCase();

    for(let i = 0; i<str.length;i++){
        if(count[str[i]]){
            return false;
        }
        count[str[i]]=1;
}
return true;

}
console.log(unique(str));

// Write a function that groups an array of names by their first letter.

const group = ["Alice", "Arjun", "Bob", "Charlie", "Chirag"];

function groupNames(group){

    let grouped = {};

    for(let i=0;i<group.length;i++){
        let firstLetter = group[i][0].toUpperCase();

        if(!grouped[firstLetter]){
            grouped[firstLetter] = [];
        }

        grouped[firstLetter].push(group[i]);
    }

    return grouped;
}
console.log(groupNames(group));

// Write a function that takes a string (sentence) and returns the longest word.

const sentence = 'Frontend developers love JavaScript';

function longest(sentence){
    let maxLen = 0;
    sentence = sentence.split(' ');
    let longestWord = '';

    for(let i=0;i<sentence.length;i++){
        if(maxLen<sentence[i].length){
            maxLen = sentence[i].length;
            longestWord = sentence[i];
        }
    }
    return longestWord;
}
console.log(longest(sentence));