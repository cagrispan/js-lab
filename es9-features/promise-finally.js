const finallyTest = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

finallyTest
    .then(console.log)
    .finally(() => console.log('Finally'));