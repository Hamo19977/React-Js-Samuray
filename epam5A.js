// function foo() {
//     x = 1;
//     console.log(x);
// }
// foo();
// console.log(x);
// var x = 5;
// 1. ReferenceError: x is not defined,
//     2. undefined, undefined,
//     3. 1, undefined,
//     4. 1, 1,   +

// const person = { name: 'John' };
// const sayHi = (name) => this.name;
// console.log(sayHi.call(person, 'Lily'));
// console.log(sayHi.apply(person, ['Ani']));
// 1. 'Lily', 'Ani',
//     2. 'Lily', undefined,
//     3. 'John', 'John',
//     4. 'John', undefined,
//     5. undefined, undefined +

// function print1(){
//     var name = 'Alice';
//     print2();
// }
// function print2(){
//     console.log(name);
// }
// print1();
// print2();
// var name;
// 1. ReferenceError: name is not defined,
//     2. 'Alice', ReferenceError: name is not defined,
//     3. 'Alice', 'Alice',
//     4. 'Alice, 'undefined',
// 5. undefined', undefined, +

// let result =
//     [1, 2, NaN, {}, '', [], '0'].filter(item => item);
// console.log(result);
// 1. [1, 2, NaN, {}, '', [], '0'],
//     2. [1, 2, {}, [], '0'],  +
//     3. [1, 2, '0'],
//     4. [true, true, false, false, false, false, true],


// function foo() {
//     return a => {
//         console.log(this.a);
//     };
// }
// const obj1 = {
//     a: 2
// };
// const obj2 = {
//     a: 3
// };
// const bar1 = foo.call(null);
// const bar2 = foo.call(obj1);
// bar1.call(obj2);
// bar2.call(obj2);
// 1. undefined, 3,
//     2. undefined, 2,  +
//     3. undefined, undefined,
//     4. 3, 3,


// const user = {
//     email: 'b@mail.com',
//     password: '12345',
// }
// const updateUser = ({ email, password }) => {
//     if (email) {
//         Object.assign(user, { email });
//     }
//     if (password) {
//         user.password = password;
//     }
//     return user;
// }
// const updatedUser = updateUser({ email: 'a@mail.com' });
// console.log(updatedUser === user);
// console.log(updatedUser.email);
// 1. true, 'a@mail.com', +
//     2. true, 'b@mail.com',
//     3. false, 'a@mail.com',
//     4. false, 'b@mail.com',


// class List extends Array {
//     getLastItem() {
//         return this[this.length - 1];
//     }
// }
// const list = new List();
// console.log(list instanceof Object);
// console.log(list instanceof Function);
// console.log(list instanceof List);
// console.log(list instanceof Array);
// 1. true, false, true, true,  +
//
//     2. false, false, true, true,
//     3. true, false, false, false,
//     4. true, true, true, true,


// class Employee {
//     static id = 5;
//     constructor(name) {
//         this.name = name;
//     }
//     getName1 = () => {
//         return this.name;
//     }
//     getName2() {
//         return this.name;
//     }
// }
// const employee = new Employee('Bob');
// console.log(employee.hasOwnProperty('id'));
// console.log(employee.hasOwnProperty('name'));
// console.log(employee.hasOwnProperty('getName1'));
// console.log(employee.hasOwnProperty('getName2'));
// 1. false, true, true, false, +
//     2. false, true, false, true,
//     3. true, true, true, true,
//     4. false, true, true, true,


// console.log('start');
// (async () => {
//     console.log(1);
//     await Promise.resolve();
//     console.log(2);
// })();
// console.log('end');
// 1. 'start', 1, 2, 'end',  +
//     2. 'start', 'end' 1, 2,
//     3. 'start', 1, 'end', 2,
//     4. 'start', 1, 2, 'end',

// const promise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 0, 2);
//     reject(1);
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
// 1. 2, 4
// 2. 2,
//     3. 1,
//     4. 1, 4,  +


// const promise1 = new Promise(r => setTimeout(r, 10, 1));
// const promise2 = new Promise(r => setTimeout(r, 100, 2));
// const promise4 = Promise.reject(4);
// const promise3 = Promise.resolve(3);
// Promise
//     .all([promise1, promise2, promise3, promise4])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// 1. 4,  +
//     2. [1,2,3],
//     3. [],
//     4. [1,2],

// foo("The quick brown fox jumps over the lazy dog"));


const text = "Theaaaaaaaaa quicka brownaaa  jumpsaaaa over the lazy dog";

const  longest = (strings) => strings.split(' ').reduce((acc, curr) => acc > curr.length ? acc : curr.length, strings[0].length);

console.log(longest(text))