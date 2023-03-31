// function foo() {
//     x = 1;
//     console.log(x);
// }
// var x;
// foo();
// console.log(x);
// 1. ReferenceError: x is not defined,
//     2. 1, undefined,
//     3. 1, 1, +
//     4. undefined, undefined,

// const person = { name: 'John' };
// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }
// console.log(typeof sayHi.call(person, 25));
// console.log(typeof sayHi.bind(person, 25));
// console.log(typeof sayHi.apply(person, [25]));
// 1. 'string', 'function', 'string',  +
//     2. 'string', 'string', 'string',
//     3. 'string', 'function', 'function',
//     4. 'function', 'string', 'function',
//     5. 'function', 'function', 'function',
//     6. 'function', 'function', 'string',


// function print1(){
//     var name = 'Alice';
//     print2();
// }
// function print2(){
//     console.log(name);
// }
// print1();
// print2();
// 1. ReferenceError: name is not defined,  +
//     2. 'Alice', ReferenceError: name is not defined,
//     3. 'Alice', 'Alice',
//     4. 'Alice, 'undefined',
// 5. undefined', undefined


// let result =
//     [[0, 1], [2, 3]].reduce((acc, current) => acc.concat(current), [1, 2]);
// console.log(result);
// 1. [0, 1, 2, 3, 1, 2],
//     2. [0, 1, 2, 3],
//     3. [1, 2, 0, 1, 2, 3],
//     4. [1, 2, 0, 3],

// const item = {
//     name: 'pen',
//     getName1: function() {
//         return this.name;
//     },
//     getName2: () => {
//         return this.name;
//     }
// }
// console.log(item.getName1());
// console.log(item.getName2());
// console.log(item.getName1.call({ name: 'book' }));
// console.log(item.getName2.call({ name: 'book' }));
// 1. 'pen', 'pen', 'book', 'book',
//     2. 'pen', 'pen', 'book', undefined,
// 3. 'pen', undefined, 'book', 'book',  +
//     4. 'pen', undefined, 'book', undefined,
//     5. 'pen', undefined, undefined, undefined,


// const user = {
//     email: 'a@mail.com',
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
// const updatedUser = updateUser({ email: 'b@mail.com' });
// console.log(updatedUser === user);
// console.log(updatedUser.email);
// 1. true, 'a@mail.com',
//     2. true, 'b@mail.com',  ++
//     3. false, 'a@mail.com',
//     4. false, 'b@mail.com',

// class List extends Array {
//     getLastItem() {
//         return this[this.length -1];
//     }
// }
// const list = new List();
// console.log(list instanceof List);
// console.log(list instanceof Array);
// console.log(list instanceof Function);
// console.log(list instanceof Object);
// 1. true, true, false, false,
//     2. false, true, false, true,
//     3. true, true, false, true,  ++
//     4. true, true, true, true,




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
// console.log(employee.hasOwnProperty('id'));
// console.log(employee.hasOwnProperty('name'));
// console.log(employee.hasOwnProperty('getName1'));
// console.log(employee.hasOwnProperty('getName2'));
// 1. false, true, true, false,
//     2. false, true, false, true,   +
//     3. true, false, false, true,
//     4. false, true, true, true,


// console.log('start');
// (async () => {
//     console.log(1);
//     await new Promise(resolve => {
//         setTimeout(() => {
//             console.log(2);
//             resolve();
//         }, 0);
//     });
//     console.log(3);
// })();
//
// console.log('end');
// 1. 'start', 1, 2, 3, 'end',  +
//     2. 'start', 'end' 1, 2, 3,
//     3. 'start', 1, 3, 2, 'end',
//     4. 'start', 1, 'end', 2, 3,


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
//     4. 4,  +

// const products = [
//     {name: 'Product 1', price: 10, quantity: 5},
//     {name: 'Product 2', price: 20, quantity: 3},
//     {name: 'Product 3', price: 5, quantity: 10},
// ];

// function calculateProductStats(products) {
//     const totalProducts = products.length;
//     const totalValue = products.reduce((total, product) => total + product.price * product.quantity, 0);
//     const averagePrice = totalValue / totalProducts;
//
//     return {
//         totalProducts: totalProducts,
//         totalValue: totalValue,
//         averagePrice: parseFloat(averagePrice.toFixed(2))
//     };
// }
//
// console.log(calculateProductStats(products))


