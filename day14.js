// fizz Buzz task

// Write a function that:

// Prints numbers from 1 to 100

// For numbers divisible by 3, print "Fizz"

// For numbers divisible by 5, print "Buzz"

// For numbers divisible by both 3 and 5, print "FizzBuzz"

// Otherwise, just print the number

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(); 


// find the longest word in a string

const str = 'Codesthetics is building elite frontend warriors';

function find(str){
    const words = str.split(' ');
    let longest = '';

    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log(find(str));

// every first word of the sentence is capital

function capital(str){
    const words = str.split(' ');
    let result = [];

    for(let word of words){
        let capitalized =  word[0].toUpperCase() + word.substring(1);
        result.push(capitalized);
    }
    return result.join(' ');
}
console.log(capital(str));
