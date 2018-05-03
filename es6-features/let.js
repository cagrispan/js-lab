var count = 0;
console.log('\n');

function log(value) {
    try {
        console.log(`${count++} - ${value}`);
    } catch (error) {
        log(error);
    }
}

// -------------------- Var -------------------------
console.log('------------ Var -------------');

// Var is function scoped

log(animal);

var animal = 'cat'
log(animal);

function useGlobalVarInFunction() {
    log(animal);
}

function functionScopedVar() {
    log(animal);
    var animal = 'dog';
    log(animal);
}

useGlobalVarInFunction();
functionScopedVar();

{
    var animal = 'rabbit';
    log(animal);
}

log(animal);

useGlobalVarInFunction();
functionScopedVar();

// -------------------- Clean Count -----------------

count = 0;
console.log('\n');

// -------------------- Let -------------------------
console.log('------------ Let -------------');

// Let is block scoped

try {
    log(letAnimal);
} catch (error) {
    log(error);
}

let letAnimal = 'cat'
log(letAnimal);

function innerScopeLet() {
    log(letAnimal);
}

innerScopeLet();

function functionScopeLet() {
    try {
        log(letAnimal);
    } catch (error) {
        log(error);
    }

    let letAnimal = 'dog';
    log(letAnimal);
}

functionScopeLet();

{
    let letAnimal = 'rabbit';
    log(letAnimal);
}

log(letAnimal);

innerScopeLet();
functionScopeLet();

/*
Result:

------------ Var -------------
0 - undefined
1 - cat
2 - cat
3 - undefined
4 - dog
5 - rabbit
6 - rabbit
7 - rabbit
8 - undefined
9 - dog


------------ Let -------------
0 - ReferenceError: letAnimal is not defined
1 - cat
2 - cat
3 - ReferenceError: letAnimal is not defined
4 - dog
5 - rabbit
6 - cat
7 - cat
8 - ReferenceError: letAnimal is not defined
9 - dog
*/