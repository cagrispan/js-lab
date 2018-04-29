const successPromise = new Promise((resolve, reject) => {
    resolve('successPromise: Success');
});

const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('errorPromise: Error');
    }, 3000);
});

const getCurrencies = new Promise((resolve, reject) => {
    const currencies = ['USD', 'CAD', 'EUR'];
    setTimeout(() => {
        resolve(currencies);
    }, 1000);
});

const getCountries = new Promise((resolve, reject) => {
    const countries = ['EUA', 'Canada', 'Germany'];
    setTimeout(() => {
        resolve(countries);
    }, 2000);
});

successPromise
    .then(console.log) // successPromise: Success
    .catch(console.log); // Will not pass here.

errorPromise
    .then(console.log) // Will not pass here.
    .catch(console.log); // errorPromise: Error

Promise.all([getCurrencies, getCountries, errorPromise])
    .then(console.log) // Will not pass here.
    .catch(console.log); // [ [ 'USD', 'CAD', 'EUR' ], [ 'EUA', 'Canada', 'Germany' ] ]

Promise.all([getCurrencies, getCountries])
    .then(console.log)
    .catch(console.log); // Will not pass here.

Promise.race([getCurrencies, getCountries])
    .then(console.log) // [ 'USD', 'CAD', 'EUR' ]
    .catch(console.log); // Will not pass here.
