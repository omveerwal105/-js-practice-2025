function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
console.log(findMax([5, 10, 20, 8, 15]));

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("Codesthetics"));

function sumEvenNumbers() {
    let sum = 0;
    for (let i = 0; i <= 50; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;

}
console.log(sumEvenNumbers());

// Write a function to find the first non-repeating character in a string.
function nonRepeating(str) {
    let freq = {};

    // Build frequency map
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Find the first character with frequency 1
    for (let char of str) {
        if (freq[char] === 1) {
            return char;
        }
    }

    return null; // If no non-repeating character found
}

console.log(nonRepeating('aabbcddbe'))