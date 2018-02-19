console.log('---------- Template Literals ------------');
console.log('\n');

const fruits =
    'banana'
    + '\n'
    + 'orange'
    + '\n'
    + 'apple';

const newFruits =

`banana
orange
apple`;

console.log(fruits);
console.log('\n');
console.log(newFruits);

const cities = ['London', 'New York', 'Rio de Janeiro'];

console.log('\n');
cities.forEach(city => {
    const love = `I love ${city}!`;
    console.log(love);
});

console.log('\n');
cities.forEach(city => {
    const love = 'I love ' + city + '!' ;
    console.log(love);
});
