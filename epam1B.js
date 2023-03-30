// for (var i = 0; i < 3; i++) {
//     console.log(i, 'var')
//     setTimeout(() => console.log(i));
// }
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i));
// }
// 1. 0, 1, 2 and SyntaxError: Identifier 'i' has already been declared
// 2. 3, 3, 3 and 3, 3, 3
// 3. 3, 3, 3 and 0, 1, 2 +
// 4. 0, 1, 2 and 0, 1, 2

// function foo(cb) {
//     return setTimeout(cb.bind(null, 'bye'), 0);
// }
// foo((val = 'hello') => {
//     console.log(val);
// })
// 1. 'hello',
//     2. undefined,
//     3. 'bye', +
//     4. null,



// function print1(){
//     console.log(name);
// }
// function print2(){
//     var name = 'Alice';
//     print1();
// }
// print2();
// print1();
// 1. ReferenceError: name is not defined, +
//     2. 'Alice', ReferenceError: name is not defined,
//     3. 'Alice', 'Alice',
//     4. 'Alice', undefined,




// let item = 'pen';
// (function foo(item){
//     console.log(item);
//     item = 'book';
//     return item;
// })();
// console.log(item);
// 1. 'pen', 'book',
//     2. 'pen', 'pen',
//     3. undefined, 'book',
//     4. undefined, 'pen', +


// const obj = {
//     name: 'Bob',
// }
// const group = [obj];
// console.log(group === [{ name: 'Bob' }]);
// console.log(group === [obj]);
// console.log(group[0] === obj);
// 1. false, true, true,
//     2. false, true, false,
//     3. false, false, true, +
//     4. true, false, false,

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);
// // 1. 123,
// //     2. 'b',
// //     3. { key: 'b' },
// // 4. 456, +
// // Temaaa



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
// console.log(item.getName1());
// console.log(item.getName2());
// 1. 'pen', 'pen',
//     2. 'pencil', 'pencil',
//     3. 'pen', undefined, +
//     4. 'pencil', undefined,


// const Foo = function(){
//     this.name = 'Nick';
// }
// const obj = new Foo();
// console.log(Object.getPrototypeOf(obj) ===  Foo);
// console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(Foo));
// console.log(Object.getPrototypeOf(obj) === Function.prototype);

// new i jamanak ccreeate a anum object darnum a object/**/
// 1. true, false, true,
//     2. false, false, true,
//     3. true, true, true,
//     4. false, false, false, +




// class Employee {
//     static id = 5;
//     constructor(name) {
//         this.name = name;
//     }
//     getName1 = () => {
//         return this.name;
//     }
//     static getName2 = () => {
//         return this.name;
//     }
// }
// const employee = new Employee('Bob');
// console.log(employee.id);
// console.log(employee.name);
// console.log(employee.getName1());
// console.log(employee.getName2());
// 1. TypeError: employee.id is not defined,
//     2. undefined, 'Bob', 'Bob', TypeError: employee.getName2 is not function, +
// 3. undefined, 'Bob', 'Bob', undefined,
//     4. undefined, 'Bob', undefined, undefined,
//     5. 5, 'Bob', 'Bob', 'Bob',



// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(1), 0);
//     resolve(3);
// })
// promise
//     .then(result => {
//         console.log(result);
//         return 2;
//     }).catch(error => {
//         console.log(error);
//         return 4;
//     }).then(result => {
//         console.log(result);
//     });
// 1. 1,
//     2. 1, 4,
//     3. 3,
//     4. 3, 2, +






// const promise1 = Promise.reject(1);
// const promise2 = Promise.resolve(2);
// const promise3 = new Promise(resolve => setTimeout(resolve, 10, 3));
// const promise4 = new Promise((resolve, reject) => setTimeout(reject, 10, 4));
// Promise
//     .all([promise1, promise2, promise3, promise4])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// 1. [2],
//     2. [2,3],
//     3. 1, +
//     4. 4,



// 12. Coding task
// Write a function to find the intersection of two arrays.
//     Instructions:
// 1. Write a function that takes two arrays arr1 and arr2 as input.
// 2. The function should return a new array that contains only the elements that are
// common to both arr1 and arr2 .
// 3. The order of elements in the resulting array should be the same as they appear
// in arr1 .
// 4. If there are no common elements between the two arrays, the function should
// return an empty array.


// const arr1 = [1,2,3,4]
// const arr2 = [3,4,5,6]
// const arr3 = ['banana', 'orange']
// const arr4 = ['pear', 'mear']
//
// const filterTwoArrays = (arr1,arr2) => arr1.filter((item) => arr2.includes(item)) ?? []
//
//
// console.log(filterTwoArrays(arr1,arr2))
// console.log(filterTwoArrays(arr3,arr4))