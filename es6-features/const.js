var count = 10;
console.log('\n');

function log(value) {
    try {
        console.log(`${count++} - ${value}`);
    } catch (error) {
        log(error);
    }
}

// -------------------- Const -------------------------
console.log('------------ Const -------------');

// Const is block scoped

try {
    log(animal);
} catch (error) {
    log(error);
}

const animal = { name: 'Cat' };
log(animal.name);

try {
    animal = { name: 'Turtle' };
} catch (error) {
    log(error);
}

try {
    animal.name = 'Tiger' ;
} catch (error) {
    log(error);
}

function innerScopeConst() {
    log(animal.name);
}

innerScopeConst();

function functionScopeConst() {
    try {
        log(animal.name);
    } catch (error) {
        log(error);
    }

    const animal = { name: 'Dog' };;
    log(animal.name);
}

functionScopeConst();

{
    const animal = 'rabbit';
    log(animal.name);
}

log(animal.name);

innerScopeConst();
functionScopeConst();

/*
Result:

------------ Const -------------
10 - ReferenceError: animal is not defined
11 - Cat
12 - TypeError: Assignment to constant variable.
13 - Tiger
14 - ReferenceError: animal is not defined
15 - Dog
16 - undefined
17 - Tiger
18 - Tiger
19 - ReferenceError: animal is not defined
20 - Dog

*/