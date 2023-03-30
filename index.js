//
// // const  CC = require('currency-converter-lt');
// //
// //
// // let currencyConverter = new CC({from: 'USD', to: "AMD", amount: 1000})
// //
// //
// // currencyConverter.convert().then((response) => {
// //     console.log(`Result  ${response}`)
// //
// // })
//
//
//
// // const  os = require('os');
// // let res = os.platform()
// //  console.log(res)
// //
// //
// //  const my_math = require('./my_math');
// //
// // let res1 = my_math.add(1,9);
// // let res2 = my_math.minus(21,11);
// //  console.log(`add ${res1}  minus ${res2}`)
//
//
//
// // const  fs = require('fs');
// // fs.readFile('some.txt', 'utf-8', (error,data) => {
// //     fs.writeFile('some.txt', 'Hello Word\n' + data, (err,res) => {
// //         console.log('resultt:' + data )
// //     });
// // })
// // console.log(`resuult: ${result}`)
//
//
// // const fs = require('fs')
// // fs.mkdirSync('text-files')
//
// // fs.mkdir('text-files', () => {
// //     fs.writeFile('./text-files/some.txt', 'Hello', () => {});
// // })
//
// // fs.unlink('./text-files/some.txt', () => {
// //     fs.rmdir('./text-files', () =>{})
// // })
//
// const http = require('http');
// const fs = require('fs')
// let server = http.createServer((req,res) =>{
//     res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
//     if(req.url === '/'){
//         fs.createReadStream('./templates/index.html').pipe(res)
//     }else if (req.url === '/about'){
//         fs.createReadStream('./templates/about.html').pipe(res)
//     }
// })
// const PORT = 8080;
// const HOST = 'localhost';
//
// server.listen(PORT,HOST, () => {
//     console.log(`server  http://${HOST}:${PORT}`)
// });

// function transformToMirror(arr) {
//     let len = arr.length;
//     let result = arr.slice(); // create a copy of the array
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



// class Employee {
//     static id = 5;
//     constructor (name) {
//         this.name = name;
//     }
//     getName (){
//         return this. name;
//     }
//     getName2 = () => {
//         return this.name;
//     }
//
// }
//
// const employee = new Employee ('Bob');
// console.log(employee.id);
// console.log(employee.name);
// console.log(employee.getName());
// console.log(employee.getName2());


// x = 20;
// console.log(x);
// console.log (y);
// var y = 10;
// console.log(x);
// console.log(y);
// var x;


// let item = 'pen';
// (function foo (){
//     console. log (item);
//     item = 'book'
//     return item;
// }) (item);
// console. log (item);

// const Foo = function () {
//     this.name = 'Nick';
// }
//
// const obj = new Foo;
// console. log(Object.getPrototypeOf(obj) === Foo.prototype,   Foo.prototype ) ;
// console. log (Object.getPrototypeOf(Foo) === Function.prototype,   Function.prototype );
// console. log (Object.getPrototypeOf(Function.prototype) === Object.prototype, Object.prototype );
//
// console.log(Object.getPrototypeOf(obj) === Foo.prototype);
// console.log(Object.getPrototypeOf(Foo) === Function.prototype);
// console.log(Object.getPrototypeOf(Function.prototype) === Object);

// const person = {
//     name: 'Lydia Hallie',
//     hobbies: ['coding'],
// };
// function addHobby (hobby, hobbies = person.hobbies) {
//     hobbies.push (hobby);
//     return hobbies;
// }
// addHobby ('running', []);
// addHobby ('dancing');
// addHobby ('baking', person.hobbies);
// console. log (person.hobbies);


// const name = 'Bob';
// function print1(){
//     console.log(name);
// }
// function print2(){
//     const name = 'Alice'
//     print1();
// }
//
// print1();
// print2 ();




// var x = 10;
// function foo() {
//     console.log(x);
//     return x;
//     var x = 20;
// }
// foo();
// console.log(x);

// undefined , 10

// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
// const arr3 = [...arr1, ...arr2];
// const obj1 = { a: 15, b: 20, c: 35 };
// const obj2 = { c: 40, d: 45, e: 50 };
// const obj3 = { ...obj1, ...obj2 };
// console.log(arr3);
// console.log(obj3);

// 2. [1,2,3,3,4,5] and { a: 15, b: 20, c: 40, d: 45, e: 50 },



// function print1() {
//     console.log(name)
// }
//
// function print2(){
//     var name = 'Alice';
//     print1();
// }
// print1();
// var name = 'Bob';
// print2();
//     2. 'Bob', 'Bob',


// let item = 'pen';
// (function foo(item){
//     console.log(item);
//     item = 'book';
//     return item;
// })(item);
// console.log(item);
//
// // pen pen
//
// // let item = 'pen';
// (function foo(){
//     console.log(item);
//     item = 'book'
//     return item;
// }) (item);
// console.log(item);

// let name = 'book';
// const item = {
//     name: 'pen',
//     getName1: function() {
//         return this.name;
//     },
//     getName2: () => {
//         var name = 'pencil';
//         return this.name;
//     }
// }
// console.log(item.getName1());
// console.log(item.getName2());

// pen undefined

// const obj1 = {
//     name: 'Lily',
//     age: 23,
// };
// const obj2 = Object.create(obj1);
// console.log(!!obj2.name)
// console.log('name' in obj2);
// console.log(obj2.hasOwnProperty('name'));

// true true false



// function Car(model, engine) {
//     this.model = model;
//     this.engine = engine;
//     this.releaseDate = 2020;
//     return {};
// }
// const mercedes = new Car('Mercedes', 'V8');
// console.log(mercedes);

// return {}


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     getName = () => {
//         return this.name;
//     }
// }
// class Employee extends Person {}
// const person = new Person('Alice');
// const employee = new Employee('Bob');
// console.log(person.getName());
// console.log(person.hasOwnProperty('getName'));
// console.log(employee.getName());
// console.log(employee.hasOwnProperty('getName'));

// alice true, bob true

// console.log('start');
// (async () => {
//     console.log(1);
//     await Promise.resolve()
//     console.log(2);
// })()
// console.log('end');
//
// start
// 1
// end
// 2


// const promise = new Promise(resolve => {
//     resolve(1);
//     return 2;
// })
// promise.then(result => {
//         console.log(result);
//         return 3;
//     }).catch(error => {
//         console.log(error);
//         return 4;
//     }).then(result => {
//         console.log(result);
//     });

// 1, 3

// const promise1 = new Promise(resolve => setTimeout(resolve, 10, 1));
// const promise2 = new Promise((_, reject) => setTimeout(reject, 100, 2));
// const promise3 = Promise.resolve(3);
// const promise4 = Promise.reject(4);
// const promises = [promise1, promise2, promise3, promise4];
// Promise.race(promises)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// then race 3 if all 4


//  const  replaceSpacesWithCommas = (str) => {
//      return str.split(' ').filter((el, index, array) => {
//
//          if(el.trim().length === 0){
//              return !!(index === 0 || index === array.length - 1);
//          } else return true
//
//      }).map((el, index, array) => {
//             if (index === 0 || el.trim().length === 0 || index === array.length -1) {
//                 return el
//             }
//             if (index === array.length -2 && array[index + 1].trim().length === 0) return el
//              return el += ','
//          }).join(' ')
// }
//
// // Examples
// console.log(replaceSpacesWithCommas(' My name is Arman '))
// // --> ' My,name,is,Arman ')
// console.log(replaceSpacesWithCommas('I am   a cat'))
// // --> 'I,am,a,cat')



// Example
// const data = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
//     { id: 4, name: 'Bob' },
//     { id: 5, name: 'Alice' },
//     { id: 6, name: 'David' },
//     { id: 7, name: 'Charlie' },
// ];
//
// const foo = (array, key) => {
//     let  result =  []
//     let check = []
//     for (const obj of array) {
//         const value = obj[key]
//         if(!check.includes(value)) {
//             check.push(value)
//             result.push(obj)
//         }
//     }
//     return result
// }
// console.log(foo(data, 'name'))
// should return:
// [
// { id: 1, name: 'Alice' },
// { id: 2, name: 'Bob' },
// { id: 3, name: 'Charlie' },
// { id: 6, name: 'David' },
// ]



// console.log(x);
// x = 20;
// console.log(y);
// var y = 10;
// console.log(x);
// var x;
// console.log(y);
// undefined*2 20, 10


// function foo(cb) {
//     return setTimeout(cb.bind(null, 'http'), 0);
// }
// foo((val = 'amqp') => {
//     console.log(val);
// })

// http


// function print1(){
//     console.log(bar);
// }
// function print2(){
//     const bar = 'Alice';
//     print1();
// }
// var bar;
// print1();
// print2();
// 4. undefined', undefined,


// let item = 'pen';
// (function foo(){
//     console.log(item);
//     item = 'book';
//     return item;
// })(item);
// console.log(item);

// pen boook

// let item = 'pen';
// (function foo(item){
//     console.log(item);
//     item = 'book';
//     return item;
// })(item);
// console.log(item);


// const obj = {
//     name: 'Bob',
// }
// const group = [obj];
// console.log(group === [obj]);
// console.log(group[0] === obj);
// console.log(group === [{ name: 'Bob' }]);

// false true false

// const person = {
//     name: 'Lydia Hallie',
//     hobbies: ['coding'],
// };
// function addHobby(hobby, hobbies = person.hobbies) {
//     hobbies.push(hobby);
//     return hobbies;
// }
// addHobby('running', []);
// addHobby('baking', ['swimming']);
// addHobby('dancing', person.hobbies);
// console.log(person.hobbies);

// coding dancing


// const Bar = function(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.greet = () => {
//         console.log(`${this.name} ${this.surname}`)
//     }
// };
// let bar = new Bar('Michael', 'Jackson');
// console.log(bar.name);
// console.log(bar.greet());

// return chi anum function  michael, michael jackson, undefined





// const Foo = function(){
//     this.name = 'Nick';
// }
//
// const obj = new Foo();
// console.log(Object.getPrototypeOf(obj) === Foo.prototype);
// console.log(Object.getPrototypeOf(Foo) === Function.prototype);
// console.log(Object.getPrototypeOf(Function.prototype) === Object);
// true
// true
// false


// class Employee {
//     static id = 5;
//     constructor(name) {
//         this.name = name;
//     }
//     getId(){
//         return this.id;
//     }
//     getName = () => {
//         return this.name;
//     }
// }
// const employee = new Employee('Bob');
// console.log(employee.getId());
// console.log(employee.getName());

//undefined Bob

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('a'));
//     reject('b');
// })
//
// promise.then(result => {console.log(result);
//         return 'c';
//     })
//     .catch(error => {
//         console.log(error);
//         return 'd';
//     })
//     .then(result => {
//         console.log(result);
//     });

//b,d


// const promise1 = new Promise(resolve => setTimeout(resolve, 10, 1));
// const promise2 = new Promise((_, reject) => setTimeout(reject, 20, 2));
// const promise3 = new Promise(resolve => setTimeout(resolve, 30, 3));
// const promise4 = new Promise((_, reject) => setTimeout(reject, 40, 4));
// const promises = [promise1, promise2, promise3, promise4];
// Promise.race(promises)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// 1


// const data = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
//     { id: 4, name: 'Bob' },
//     { id: 5, name: 'Alice' },
//     { id: 6, name: 'David' },
//     { id: 7, name: 'Charlie' },
// ];


// const uniqueObj = (array, key) =>{
//     const result = [];
//     const check = [];
//     for (const obj of array) {
//         const value = obj[key]
//         if (!check.includes(value)) {
//             check.push(value)
//             result.push(obj)
//         }
//     }
//
//     return result
// }
//
// console.log(uniqueObj(data, 'name'))

