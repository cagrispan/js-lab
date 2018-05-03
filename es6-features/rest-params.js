function sum (...numbers) {
    return numbers.reduce((total, item) => total + item);
};

console.log(sum(1, 2, 3)); // 6