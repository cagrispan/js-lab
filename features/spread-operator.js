const name = 'Carlos';
const nameLetters = [...name];

console.log(nameLetters);

const frontend = ['angular', 'vue', 'react'];
const backend = ['python', 'java', 'php'];

const fullstack = [...frontend, 'c#', ...backend];

console.log(fullstack);

const person = {
    name: 'Carlos',
    age: 30,
};

const profession = {
    area: 'Information Technology',
    position: 'Analyst'
};

const professional = { ...person, ...profession };

console.log(professional);
