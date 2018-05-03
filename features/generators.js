function* countOnce() {
    let index = 0;
    yield index++;
}

let getNumbers = countOnce();

console.log(getNumbers.next()); // { value: 0, done: false }
console.log(getNumbers.next()); // { value: undefined, done: true }

function* countToFive() {
    let index = 0;
    while (index < 5) {
        yield ++index;
    }
}

getNumbers = countToFive();

console.log(getNumbers.next()); // { value: 1, done: false }
console.log(getNumbers.next()); // { value: 2, done: false }
console.log(getNumbers.next()); // { value: 3, done: false }
console.log(getNumbers.next()); // { value: 4, done: false }
console.log(getNumbers.next()); // { value: 5, done: false }
console.log(getNumbers.next()); // { value: undefined, done: true }

function* paramOnNext(initialParam) {
    let value = initialParam;
    while (true)
        value += yield value;
}

const name = paramOnNext('My name is: ');

console.log(name.next()); // { value: 'My name is: ', done: false }
console.log(name.next('c')); // { value: 'My name is: c', done: false }
console.log(name.next('a')); // { value: 'My name is: ca', done: false }
console.log(name.next('r')); // { value: 'My name is: car', done: false }
console.log(name.next('l')); // { value: 'My name is: carl', done: false }
console.log(name.next('o')); // { value: 'My name is: carlo', done: false }
console.log(name.next('s')); // { value: 'My name is: carlos', done: false }