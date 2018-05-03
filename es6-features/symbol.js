const foo = Symbol('name');
const bar = Symbol('name');

console.log(foo === bar); // false
console.log(foo == bar); // false

const obj = {
    [Symbol('name')]: 'Carlos',
    [Symbol('age')]: 30,
    nationality: 'Brazilian',
    city: 'Curitiba',
    state: 'Paraná'
};

// const iterator = obj.nationality[Symbol.iterator]()

console.log(Object.keys(obj)); // [ 'nationality' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(name), Symbol(age) ]


obj[Symbol.iterator] = function* () {
    const keys = Object.keys(obj);
    let index = 0;
    while (keys[index]) {
        yield keys[index++];
    }
}

const iterator = obj[Symbol.iterator]();

console.log(iterator.next()); // { value: 'nationality', done: false }
console.log(iterator.next()); // { value: 'city', done: false }
console.log(iterator.next()); // { value: 'state', done: false }
console.log(iterator.next()); // { value: 'undefined,', done: true }

for (let property of obj) {
    console.log(property);
    // nationality
    // city
    // state
}