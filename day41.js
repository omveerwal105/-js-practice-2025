// biling system in js

const items = [
  { name: "Phone", price: 15000, category: "electronics" },
  { name: "Shoes", price: 2000, category: "fashion" },
];

function validatePromo(code) {
  const validPromo = "PROMO10";
  return code === validPromo;
}

function calculateDiscount(total, season, category, code) {
  let discountPrice = total;

  if (validatePromo(code)) {
    discountPrice -= discountPrice * 0.10; 
  }

  if (season === "summer") {
    discountPrice -= discountPrice * 0.05; 
  }

  if (category === "electronics") {
    discountPrice -= 500; 
  }

  return Math.floor(discountPrice);
}

function generateBill(items, season, code) {
  let total = items.reduce((sum, item) => sum + item.price, 0);
  let category = items.some(item => item.category === "electronics") ? "electronics" : "";
  
  let finalAmount = calculateDiscount(total, season, category, code);

  console.log(`Total before discount: ₹${total}`);
  console.log(`Total after discount: ₹${finalAmount}`);
  console.log(`You saved: ₹${total - finalAmount}`);
}

generateBill(items, "summer", "PROMO10");


// reverse a string

const str = 'Codesthetics';
function reverse(str){
    let result = '';
    for(let i=str.length-1 ;i>=0;i--){
        result += str[i];
    }
    return result;
}
console.log(reverse(str));

// First Non-Repeating Character

const words = 'aabbcde';
 function nonRepeat(words){
    let count = {};
    for(let word of words){
        count[word] = (count[word] || 0) +1;
    }
    for(let word of words){
        if(count[word]===1){
            return word;
        }
    }
    return -1;
 }
 console.log(nonRepeat(words));


// merge two sorted arrays

const arr1 =  [1, 3, 5], arr2= [2, 4, 6]

function merge(arr1,arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

console.log(merge(arr1 , arr2));
