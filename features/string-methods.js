const text = 'a sample string';

let pattern = 'sam';
let startingFrom = 2;
console.log('startsWith sam: ', text.startsWith(pattern, startingFrom));

pattern = 'tri';
endingAt = 2;
console.log('endsWith tri: ', text.endsWith(pattern, endingAt));

pattern = 'tri';
endingAt = 13;
console.log('endsWith tri: ', text.endsWith(pattern, endingAt));

console.log('abc'.repeat(10));

pattern = 'tri';
startingFrom = 3;
console.log('includes tri: ', text.includes(pattern, startingFrom));