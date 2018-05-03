const myMap = new Map();

myMap.set('Carlos', 30);
console.log(myMap); // Map { 'Carlos' => 30 }

console.log(myMap.get('Carlos')); // 30;

myMap.set('André', 32);
myMap.set('Mario', 25);
console.log(myMap.entries()); // [Map Iterator] { [ 'Carlos', 30 ], [ 'André', 32 ], [ 'Mario', 25 ] }
console.log(myMap.keys()); // [Map Iterator] { 'Carlos', 'André', 'Mario' }
console.log(myMap.values()); // [Map Iterator] { 30, 32, 25 }

myMap.delete('Mario');
console.log(myMap); // Map { 'Carlos' => 30, 'André' => 32 }

console.log(myMap.has('Carlos')); // true

console.log(myMap.size); // 2

//----------------------------------------------------------------------------------------

const weakMap = new WeakMap()

const weakObject = {};

weakMap.set(weakObject, 30);
console.log(weakMap.has(weakObject)); // true

console.log(weakMap.get(weakObject)); // 30;

weakMap.delete(weakObject);
console.log(weakMap.has(weakObject)); // false

let weakObject2 = () => { };
weakMap.set(weakObject2, 100);

console.log(weakMap.get(weakObject2)); // 100
weakObject2 = null;
/**
 * It will not exist within the weak map anymore since
 * there is no other reference to this object.
*/
console.log(weakMap.get(weakObject2)); // undefined

