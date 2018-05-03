class Animal {
    constructor(kind, sound) {
        this.kind = kind;
        this.sound = sound;
    }

    hello() {
        console.log(`I'm a ${this.kind}!`);
    }

    static info() {
        console.log(`This is a class to create animals.`);
    }

}

class Dog extends Animal {
    constructor(name, sound) {
        super('dog', sound);
        this.name = name;
    }

    bark() {
        console.log(`${this.sound}! I'm ${this.name}!`);
    }

    set petName(name) {
        this.name = name.toLowerCase();
    }

    get petName() {
        return this.name.toUpperCase();
    }

    static info() {
        console.log(`This is a class to create dogs.`);
    }
}

Animal.info(); // This is a class to create animals.

const dog = new Dog('Lessie', 'woof');
const cat = new Animal('cat');

dog.bark(); // woof! I'm Lessie!
cat.hello(); // I'm a cat!

console.log(dog.name); // Lessie
console.log(dog.petName); // LESSIE

Dog.info(); // This is a class to create dogs.

