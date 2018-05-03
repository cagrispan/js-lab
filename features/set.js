const mySet = new Set(['carlos', 'augusto', 'grispan']);

console.log(mySet); // Set { 'carlos', 'augusto', 'grispan' }
console.log(mySet.size); // 3

mySet.add('lima');
console.log(mySet); // Set { 'carlos', 'augusto', 'grispan', 'lima' }

mySet.add('lima');
console.log(mySet); // Set { 'carlos', 'augusto', 'grispan', 'lima' }

mySet.delete('lima');
console.log(mySet); // Set { 'carlos', 'augusto', 'grispan' }

console.log(mySet.has('carlos')); // true
console.log(mySet.has('lima')); // false

const values = mySet.values();
console.log(values); // [Set Iterator] { 'carlos', 'augusto', 'grispan' }

const keys = mySet.keys();
console.log(keys); // [Set Iterator] { 'carlos', 'augusto', 'grispan' }

const entries = mySet.entries();
console.log(entries); // [Set Iterator] {[ 'carlos', 'carlos' ],[ 'augusto', 'augusto' ], [ 'grispan', 'grispan' ] }

const objectOne = {
    value: 1
};

const weakSet = new WeakSet();

weakSet.add(objectOne);
console.log(weakSet.has(objectOne)); // true

weakSet.delete(objectOne);
console.log(weakSet.has(objectOne)); // false