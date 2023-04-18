// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 0);
// }
// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 0);
// }
// 1. 0, 1, 2 and SyntaxError: Identifier 'i' has already been declared
// 2. 3, 3, 3 and 3, 3, 3,
//     3. 0, 1, 2 and 0, 1, 2,
//     4. 3, 3, 3 and 0, 1, 2,

// function add(x, y) {
//     return function(y) {
//         return x + y;
//     }
// }
// console.log(add(2, 3)());

// temaaa
// 1. 5,
//     2. function(y) { return x + y; },
// 3. NaN
// 4. ReferenceError: 'y' is not defined,




// function outer() {
//     var x = 10;
//     function inner() {
//         console.log(x);
//     }
//     x = 20;
//     return inner;
// }
// var x = 30;
// var inner = outer();
// inner();
// console.log(x);
// 1. 10, 30,
//     2. 10, 20,
//     3. 20, 30
// 4. 20, 20,


// let x = 10;
// (function () {
//     console.log(x);
//     var x = 20;
//     console.log(x);
// })();
// 1. 10, 20,
//     2. undefined, 20,
//     3. 20, 20,
//     4. ReferenceError: 'x' is not defined,



// const obj1 = {
//     name: 'Alice'
// };
// const obj2 = {
//     name: 'Alice'
// };
// const group = [obj1];
// console.log(group === [{ name: 'Alice' }]);
// console.log(group === [obj1]);
// console.log(group[0] === obj1);
// console.log(obj1 === obj2);


// 1. true, true, true, false
// 2. false, false, false, true
// 3. false, true, true, false
// 4. false, false, true, false


// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);


// 1. 123,
//     2. 456
// 3. { key: 'b' },
// 4. 'b',


// const item = {
//     name: 'pen',
//     getName1: function() {
//         var name = 'pencil';
//         return this.name;
//     },
//     getName2: () => {
//         return this.name;
//     }
// }
// const getName1 = item.getName1.bind(item);
// const getName2 = item.getName2.bind(item);
// console.log(getName1());
// console.log(getName2());

// 1. 'pencil', 'pencil',
//     2. 'pen', 'pen',
//     3. 'pencil', undefined,
//     4. 'pen', undefined,


// class Vehicle {
//     constructor(make) {
//         this.make = make;
//     }
// }
// const car = new Vehicle('Toyota');
// console.log(Object.getPrototypeOf(car) === Vehicle.prototype);
// console.log(Object.getPrototypeOf(car) === Object.getPrototypeOf(Vehicle));
// console.log(Object.getPrototypeOf(car) === Function.prototype);
// 1. true, false, false,
//     2. true, true, false,
//     3. true, false, true,
//     4. false, false, true,


// class Person {
//     static species = 'human';
//     constructor(id) {
//         this.id = id;
//     }
//     greet1() {
//         return this.id;
//     }
//     greet2 = () => {
//         return this.id;
//     }
//     getSpecies() {
//         return Person.species;
//     }
// }
// const person = new Person('Alice', 25);
// console.log(person.species);
// console.log(person.greet1());
// console.log(person.greet2());
// console.log(person.getSpecies());


// 1. 'human', 'Alice', 'Alice', undefined,
//     2. undefined, 'Alice', 'Alice', 'human'
// 3. undefined, 'Alice', undefined, 'human'
// 4. undefined, 'Alice', undefined, undefined


// const promise = new Promise((resolve, reject) => {
//     resolve(10);
//     setTimeout(() => reject(20), 0);
// });
// promise
//     .then(result => {
//         console.log(result);
//         throw 5;
//     })
//     .catch(error => {
//         console.log(error);
//         return 15;
//     })
//     .then(result => {
//         console.log(result);
//     });
// 1. 20, 15,
//     2. 20,
//     3. 10, 5,
//     4. 10, 5, 15,




// const promise1 = Promise.resolve('1');
// const promise3 = new Promise(r => setTimeout(r, 10, new Error('2').message));
// const promise4 = new Promise(r => setTimeout(r, 10, '3'));
// Promise
//     .all([promise1, promise3, promise4])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// 1. ['1', '3'],
//     2. ['1', '2', '3'],
//     3. '2'
// 4. Error: 2 at Object.<anonymous> + is not defined


const sortObjectsById = objects => objects.sort((a, b) => a.id - b.id);


const objects = [
    { id: 3, name: "Alice" },
    { id: 1, name: "Bob" },
    { id: 2, name: "Charlie" },
    { id: 77, name: "Charlie" },
    { id: 74, name: "Charlie" },
];
console.log(sortObjectsById(objects))