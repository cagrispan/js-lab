class Animal {

    constructor(name, sound, owners) {
        this.name = name;
        this.sound = sound;
        this.owners = owners;
    }

    soundPerOwner() {
        const self = this;
        return this.owners.map(function (owner) {
            return self.sound;
        });
    }

    soundPerOwnerArrow() {
        return this.owners.map(owner => this.sound);
    }
}

const animals = [
    new Animal('cat', 'meow'),
    new Animal('dog', 'woof'),
    new Animal('bird', 'tweet')
];

var func = animals.map(function (animal) {
    return animal.name;
});
console.log(func);//[ 'cat', 'dog', 'bird' ]

var arrow = animals.map(animal => animal.name);
console.log(arrow);//[ 'cat', 'dog', 'bird' ]

var multiLine = animals.map(animal => {
    const name = animal.name.toUpperCase();
    return name;
});
console.log(multiLine);//[ 'CAT', 'DOG', 'BIRD' ]

var multiParams = animals.map((animal, index) => `${index} - ${animal.name}`);
console.log(multiParams);//[ '0 - cat', '1 - dog', '2 - bird' ]

// ---------------------------------------------------------------

const cat = new Animal('cat', 'meow', ['Bob', 'Jim']);
console.log(cat.soundPerOwner().join(' '));//meow meow

const dog = new Animal('dog', 'woof', ['John', 'Dave', 'Rob']);
console.log(dog.soundPerOwnerArrow().join(' '));//woof woof woof
