// Given an array of numbers, return a new array 
// where each number is doubled but only if it's odd.
const arr = [1, 2, 3, 4] 
function transformOdds(arr) {
  return arr
  .filter((num)=>num % 2 !==0)
  .map((num)=>num*2);
}
console.log(transformOdds([1, 2, 3, 4]));


// Group an array of people by their age
// Example:
const  people = ([{name: 'A', age: 20}, {name: 'B', age: 20}, {name: 'C', age: 30}])
// Output: { 20: ['A', 'B'], 30: ['C'] }
function groupByAge(people) {
  return people.reduce((group,person)=>{
     const age = person.age;
     
    if(!group[age]){
        group[age] = []
    }

        group[age].push(person.name);

        return group
    
  },{});
}
console.log(groupByAge([{name: 'A', age: 20}, {name: 'B', age: 20}, {name: 'C', age: 30}]));

// Count how many times each character appears in a string
// Example: "hello" → { h:1, e:1, l:2, o:1 }
function charCount(str) {
 return  str.split('').reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0)+1;
    return acc;
  },{});
}
console.log(charCount("hello"));


