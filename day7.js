const str = 'Codesthetics is awesome';

function reverseWords(str){
    const words = str.split(' ');
    let  revWord = [];
    for(let i =0;i<words.length;i++){
        const word = words[i];
        const reverse = word.split('').reverse().join('');
        revWord.push(reverse);
      
    }

    return revWord.join(' ');
}
console.log(reverseWords(str));

// count vowels
function countVowels(str){
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels(str));