const firstName = 'Carlos Augusto';
const surName = 'Gispan';
const age = 30;

//es5
const full = {
    firstName: firstName,
    surName: surName,
    age: age,

    getName: function () {
        return `${this.firstName} ${this.surName}`;
    }
}

console.log('\n');
console.log('full ', full);
console.log('full ', full.getName());

//es6
const short = {
    firstName,
    surName,
    age,

    getName() {
        return `${this.firstName} ${this.surName}`;
    }
}

console.log('\n');
console.log('short ', short);
console.log('short ', short.getName());