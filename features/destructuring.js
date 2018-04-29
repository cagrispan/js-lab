const person = {
    name: 'Carlos',
    surname: 'Grispan'
}

const { name, surname:lastName, nationality = 'Brazilian' } = person;

console.log('name: ', name); // Carlos
console.log('lastName: ', lastName); // Grispan
console.log('nationality: ', nationality); // Brasilian

const browsers = [
    'Chrome',
    'Firefox',
    'Edge'
]

const [ chrome, firefox, edge, safari = 'Safari', opera ] = browsers;

console.log('chrome: ', chrome); // Chrome
console.log('firefox: ', firefox); // Firefox
console.log('edge: ', edge); // Edge
console.log('safari: ', safari); // Safari
console.log('opera: ', opera); // undefined

let a = 'a';
let b = 'b';

[ a, b ] = [ b, a ];

console.log('a: ', a);
console.log('b: ', b);
