const text = 'carlos';

const textArray = Array.from(text);

console.log(textArray);

console.log(Array.of(text, 1, 5, { name: 'carlos' }));

console.log(textArray.find(letter => letter === 'r'));

console.log(textArray.findIndex(letter => letter === 'r'));

const arr = new Array(10);

arr.fill(0)
console.log(arr);

const startingFrom = 1;
const endingAt = 3;
arr.fill(1, startingFrom, endingAt);
console.log(arr);


