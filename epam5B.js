// let name = 'A';
// function sayName(){
//     console.log(name);
//     var name = 'B';
//     name = 'C';
// }
// sayName();
// console.log(name);
// 1. 'A', 'A',
//     2. 'B', 'A'
// 3. undefined, 'A',  +
//     4. undefined, 'C',
//     5. ReferenceError: Cannot access 'name' before initialization,


// const foo = () => {
//     console.log(this.bar);
// };
// const obj = {
//     bar: "hello"
// };
// foo.call(obj);
// foo.bind(obj);

// 1--- arrow function a dra hamar undefined , 2- bind e new function a veradardznum piti kaanches vor run lini/
// 1. undefined,
//     2. 'hello',
//     3. 'hello', undefined  +
// 4. 'hello', 'hello',

// function print1(){
//     var name = 'Alice';
//     print2();
// }
// function print2(){
//     console.log(name);
// }
// let name = 'Bob';
// print1();
// print2();
// 1. ReferenceError: Cannot access name before intialization,
//     2. 'Alice', ReferenceError: Cannot access name before intialization,
//     3. 'Alice', 'Bob',
//     4. 'Bob', 'Bob',   ++
//     5. undefined, 'Bob'


// const add = x => x + x;
// function myFunc(num = 2, value = add(num)) {
//     console.log(num, value);
// }
// myFunc();
// myFunc(4);
// 1. ReferenceError: num is not defined
// 2. 2, NaN and 3, NaN,
//     3. 2, 4 and 4, 8,  +
//     4. 2, 4 and 2, 4,


// const name = 'pencil';
// const item = {
//     getName1: function() {
//         return this.name;
//     },
//     getName2: () => {
//         return this.name;
//     }
// }
// const getName1 = item.getName1.bind({ name });
// const getName2 = item.getName2.bind({ name });
// console.log(getName1());
// console.log(getName2());
// console.log(getName1.call({ name: 'book' }));
// console.log(getName2.call({ name: 'book' }));

// 1. 'pencil', 'pencil', 'book', 'book',
//     2. 'pencil', undefined, 'book', undefined,
//     3. 'pencil', undefined, 'pencil', undefined, +
//     4. undefined, undefined, 'book', 'book',

// const person = {
//     name: 'Lydia',
//     age: 21,
// };
// const changeAge = (x = { ...person }) => (x.age += 1);
// const changeAgeAndName = (x = { ...person }) => {
//     x.age += 1;
//     x.name = 'Sarah';
// };
// changeAge(person);
// changeAgeAndName(person);
// console.log(person);
// 1. { name: "Sarah", age: 22 },
// 2. { name: "Sarah", age: 23 },  +
// 3. { name: "Lydia", age: 22 },
// 4. { name: "Lydia", age: 23 },


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
// }
// class Employee extends Person {
//     getName = () => {
//         return this.name;
//     }
// }
// const person = new Person('Alice');
// const employee = new Employee('Bob');
// console.log(person.getName());
// console.log(person.hasOwnProperty('getName'));
// console.log(employee.getName());
// console.log(employee.hasOwnProperty('getName'));
// 1. 'Alice', false, undefined, true,
//     2. 'Alice', true, 'Bob', true,
//     3. 'Alice', true, undefined, true,
//     4. 'Alice', false, 'Bob', true,   ++

// const Foo = function(){
//     this.name = 'Nick';
// }
// const obj = new Foo();
// console.log(Object.getPrototypeOf(obj) === Foo);
// console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(Foo));
// console.log(Object.getPrototypeOf(obj) === Foo.prototype);

// 1. true, false, false,
//     2. false, true, false,
//     3. false, false, true,  +
//     4. true, false, true,


// (async () => {
//     console.log('debugger-1');
//     await Promise.resolve();
// })();
// (async () => {
//     await Promise.resolve();
//     console.log('debugger-2');
// })();
// console.log('debugger-3');

// 1. 'debugger-3', 'debugger-1', 'debugger-2',
//     2. 'debugger-3', 'debugger-2', 'debugger-1',
//     3. 'debugger-1', 'debugger-3', 'debugger-2',  +
//     4. 'debugger-1', 'debugger-2', 'debugger-3',


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1));
//     reject(2);
// });
// promise
//     .catch(error => {
//         console.log(error);
//         return 3;
//     })
//     .then(result => {
//         console.log(result);
//         return 4;
//     })
//     .then(result => {
//         console.log(result);
//     });
// 1. 2
// 2. 2, 3, 4  +
// 3. 1
// 4. 1, 4,


// const promise1 = new Promise(r => setTimeout(r, 10 ,1));
// const promise2 = new Promise(r => setTimeout(r, 100, 2));
// const promise3 = Promise.resolve(3);
// const promise4 = Promise.resolve(4);
// Promise
//     .all([promise1, promise2, promise3, promise4])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// 1. [1,2],
//     2. [1,2,3,4],  +
//     3. [3,4,1,2],
//     4. []

// const text = "Thequicka brownaa fwwjumps a";
//
// let shortest = (text) => text.split(" ").reduce((acc, curr) => curr.length < acc ? curr.length : acc, text.split(" ")[0].length);
//
// console.log( shortest(text))


