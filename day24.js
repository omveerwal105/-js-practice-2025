// dsa pattern question two pointers
//  valid palindrome


const str = "A man, a plan, a canal: Panama";
function valid(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        // Skip non-alphanumeric characters
        while (i < j && !isAlphaNum(str[i])) i++;
        while (i < j && !isAlphaNum(str[j])) j--;

        // Compare lowercase characters
        if (str[i].toLowerCase() !== str[j].toLowerCase()) return false;

        i++;
        j--;
    }

    return true;
}

function isAlphaNum(ch) {
    return /^[a-z0-9]$/i.test(ch);
}


console.log(valid(str)); // true

// reverse 

function reverse(str){
    let rev = '';
    for(let i =str.length-1;i>=0;i++){
        rev +=str[i];
    }
    return rev;
}
