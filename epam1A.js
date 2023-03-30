// x = 20;
// console.log(x);
// console.log(y);
// var y = 10;
// console.log(x);
// console.log(y);
// var x;

// 1. ReferenceError: Cannot access 'x' before initialization,
//     2. 20, undefined, 20, 10, +
//     3. undefined, undefined, undefined, 10,
//     4. 20, 10, 20, 10,

// function foo() {
//     return (() => 0)();
// }
// console.log(typeof foo());

// 1. 'number', +
//     2. 'object',
//     3. 'function',
//     4. 'undefined',

// const name = 'Bob';
// function print1(){
//     console.log(name);
// }
// function print2(){
//     const name = 'Alice';
//     print1();
// }
// print1();
// print2();
// 1. 'Bob', 'Bob', +
//     2. undefined, 'Alice',
//     3. 'Bob', 'Alice',
//     4. undefined', undefined,


// let item = 'pen';
// (function foo(){
//     console.log(item);
//     item = 'book';
//     return item;
// })(item);
// console.log(item);

// 1. 'pen', 'book',
//     2. 'pen', 'pen',
//     3. undefined, 'book',
//     4. undefined, 'pen',




// const person = {
//     name: 'Lydia Hallie',
//     address: {
//         street: '100 Main St',
//     },
// };
// Object.freeze(person);
// // Tema - Object Freez
// person.name = 'Evan Bacon'
// delete person.address
// person.address.street = '101 Main St' +
// person.pet = { name: 'Whiskey' }
// console.log(person)


// const person = {
//     name: 'Lydia Hallie',
//     hobbies: ['coding'],
// };
// function addHobby(hobby, hobbies = person.hobbies) {
//     hobbies.push(hobby);
//     return hobbies;
// }
// addHobby('running', []);
// addHobby('dancing');
// addHobby('baking', person.hobbies);
// console.log(person.hobbies);
// 1. ['coding'],
//     2. ['coding', 'dancing'],
//     3. ['coding', 'dancing', 'baking'], +
//     4. ['coding', 'running', 'dancing', 'baking'],


// const Bar = (name, surname) => {
//     this.name = name;
//     this.surname = surname;
//     this.greet = () => {
//         console.log(`${this.name} ${this.surname}`)
//     }
// };
// let bar = new Bar('Michael', 'Jackson');
// console.log(bar.name);
// console.log(bar.greet());
// 1. 'Michael', undefined,
//     2. 'Michael', 'Michael Jackson', undefined,
//     3. 'Michael', undefined, 'Michael Jackson',
//     4. TypeError: Bar is not a constructor, +


// const Foo = function(){
//     this.name = 'Nick';
// }
// const obj =new Foo();
//
// console.log(Object.getPrototypeOf(obj) === Foo.prototype);
// console.log(Object.getPrototypeOf(Foo) === Function.prototype);
// console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
// 1. true, false, true,
//     2. false, false, true,
//     3. true, true, true, +
//     4. true, false, false,


// class Employee {
//     static id = 5;
//     constructor(name) {
//         this.name = name;
//     }
//     getName1(){
//         return this.name;
//     }
//     getName2 = () => {
//         return this.name;
//     }
// }
// const employee = new Employee('Bob');
// console.log(employee.id);
// console.log(employee.name);
// console.log(employee.getName1());
// console.log(employee.getName2());
// 1. 5, 'Bob', 'Bob', 'Bob',
//     2. 5, 'Bob', 'Bob', undefined
// 3. undefined, 'Bob', 'Bob', 'Bob' +
// 4. undefined, 'Bob', 'Bob', undefined


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1));
//     reject(3);
// })
// promise
//     .then(result => {
//         console.log(result);
//         return 2;
//     })
//     .catch(error => {
//         console.log(error);
//         return 4;
//     })
//     .then(result => {
//         console.log(result);
//     });
// 1. 1,
//     2. 1, 2,
//     3. 3,
//     4. 3, 4, +



// const promise1 = Promise.reject(1);
// const promise2 = Promise.resolve(2);
// const promise3 = new Promise(resolve => setTimeout(resolve, 0, 3));
// const promise4 = new Promise((_, reject) => setTimeout(reject, 0, 4));
// const promises = [promise1, promise2, promise3, promise4];
// Promise.race(promises)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// 1. 1, +
//     2. 2,
//     3. [1, 4],
//     4. [2, 3],






/// xndir



// function transformToMirror(arr) {
//     let len = arr.length;
//     let result = [];
//     for (let i = len - 2; i >= 0; i--) {
//         result.push(arr[i]);
//     }
//     return result;
// }
//
// let arr = [1, 2, 3, 4];
// let result = transformToMirror(arr);
// console.log(result); // [1, 2, 3, 4, 3, 2, 1]
//
// arr = [5, 6, 1, 8, 8];
// result = transformToMirror(arr);
// console.log(result); // [5, 6, 1, 8, 8, 8, 1, 6, 5]




