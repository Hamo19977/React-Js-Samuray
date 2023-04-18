// let name = 'A';
// function sayName(){
//     console.log(name);
//     var name = 'B';
//     name = 'C';
// }
// sayName();
// console.log(name);
// 1. ReferenceError: Cannot access 'name' before initialization,
//     2. 'A', 'A',
//     3. undefined, 'A',
//     4. undefined, 'C',
//     5. 'B', 'A',




// const foo = () => {
//     console.log(this.bar);
// };
// const obj = {
//     bar: "hello"
// };
// foo.call(obj);
// foo.bind(obj);
// 1. 'hello', 'hello',
//     2. 'hello', undefined
// 3. 'hello',
//     4. undefined,



// function print1(){
//     var name = 'Alice';
//     print2();
// }
// function print2(){
//     console.log(name);
// }
// var name;
// print1();
// print2();
// 1. ReferenceError: name is not defined,
//     2. 'Alice', ReferenceError: name is not defined,
//     3. 'Alice', 'Alice',
//     4. 'Alice, 'undefined',
// 5. undefined', undefined,

// const add = x => x + x;
// function myFunc(num = 2, value = add(num)) {
//     console.log(num, value);
// }
// myFunc();
// myFunc(3);
// 1. 2, 4 and 3, 6,
//     2. 2, NaN and 3, NaN,
//     3. ReferenceError: num is not defined
// 4. 2, 4 and 2, 4,


// const name = 'pencil';
// const item = {
//     name: 'pen',
//     getName1: function() {
//         return this.name;
//     },
//     getName2: () => {
//         return this.name;
//     }
// }
// const getName1 = item.getName1;
// const getName2 = item.getName2;
// console.log(getName1());
// console.log(getName2());
// console.log(getName1.call({ name: 'book' }));
// console.log(getName2.call({ name: 'book' }));
// 1. 'pen', undefined, 'book', 'book',
//     2. undefined, undefined, 'book', 'book',
//     3. undefined, undefined, 'book', undefined,
//     4. 'pen', undefined, 'book', undefined,
//     5. undefined, undefined, undefined, undefined,


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
// changeAgeAndName();
// console.log(person);
// 1. { name: "Sarah", age: 22 },
// 2. { name: "Sarah", age: 23 },
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
//
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
//     2. 'Alice', false, 'Bob', true,
//     3. 'Alice', true, undefined, true,
//     4. 'Alice', true, 'Bob', true,


// const Foo = function(){
//     this.name = 'Nick';
// }
// const obj = new Foo();
// console.log(Object.getPrototypeOf(obj) === Foo);
// console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(Foo));
//     console.log(Object.getPrototypeOf(obj) === Foo.prototype);
// 1. true, false, false,
//     2. true, true, true,
//     3. false, false, true,
//     4. true, false, true,




// console.log('start');
// (async () => {
//     console.log('debugger-1');
//     await Promise.resolve();
// })();(async () => {
//     console.log('debugger-2');
//     await Promise.resolve();
// })();
// console.log('end');
// 1. 'start', 'debugger-1', 'debugger-2', 'end',
//     2. 'start', 'end', 'debugger-1', 'debugger-2',
//     3. 'start', 'end', 'debugger-2', 'debugger-1',
//     4. 'debugger-1', 'debugger-2', 'start', 'end',


// const promise = new Promise((_, reject) => {
//     reject(1);
//     return 2;
// });
// promise
//     .then(result => {
//         console.log(result);
//         return 3;
//     })
//     .catch(error => {
//         console.log(error);
//         return 4;
//     })
//     .then(result => {
//         console.log(result);
//     });
// 1. 1, 4
// 2. 1,
//     3. 2,
//     4. 2, 4,


// const promise1 = new Promise(resolve => setTimeout(resolve, 10 ,1));
// const promise2 = new Promise(resolve => setTimeout(resolve, 100, 2));
// const promise4 = Promise.reject(4);
// const promise3 = Promise.resolve(3);
// Promise
//     .all([promise1, promise2, promise3, promise4])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// 1. [1,2],
//     2. [1,2,3],
//     3. [],
//     4. 4,

// // Examples
// foo(["apple", "banana", "cherry", "date"]) --> 5
// // Note: The output is 5 because the shortest string in the array is "apple", // whi
// ch has a length of 5

// const fruits = ["app", "banana", "ch", "date"];
//
// function shortestStringLength(strings) {
//     if (strings.length === 0) return 0
//
//     return strings.reduce((acc, curr) => {
//         return curr.length < acc ? curr.length : acc;
//     }, strings[0].length);
// }
//
// console.log(shortestStringLength(fruits))


// let array = [1,4,5,2,4,5,7,99];
//
//
// console.log([...array].map(array.pop,array))