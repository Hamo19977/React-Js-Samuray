// function foo() {
//     console.log(x);
//     return x;
//     var x = 20;
// }
// foo();
// var x = 10;
// foo();
// 1. ReferenceError: Cannot access 'x' before initialization
// 2. undefined, 10,
//     3. undefined, 20,
//     4. undefined, undefined,  +


// const user = { name: 'John', age: 27 };
// const admin = { admin: true, ...user };
// console.log(admin.user); age/ name have
// user.age = 10;
// console.log(admin.user);
// 1. undefined, undefined,  +
//     2. { name: 'John', age: 27 } and { name: 'John', age: 27 };
// 3. { name: 'John', age: 27 } and { name: 'John', age: 10 };
// 4. null, null,


// function getId1(){
//     console.log(id);
// }
// function getId2(){
//     var id = '1';
//     getId1();
// }
// let id = '2';
// getId1();
// getId2();
// 1. ReferenceError: Cannot access 'id' before initialization,
//     2. undefined, undefined,
//     3. undefined, '1',
//     4. undefined, '2',
//     5. '2', '2',  +


// let k = 'pen';
// (function foo(k){
//     console.log(k);
//     k = 'book';
//     return k;
// })(k);
// console.log(k);

// 1. 'pen', 'pen',  +
//     2. 'pen', 'book',
//     3. undefined, 'book',
//     4. undefined, 'pen',


// const obj1 = {
//     name: 'pen',
//     getName1: function() {
//         return this.name;
//     },
//     getName2: () => {
//         return this.name;
//     }
// };
// const obj2 = { name: 'book' };
// console.log(obj1.getName1());
// console.log(obj1.getName2());
// console.log(obj1.getName1.call(obj2));
// console.log(obj1.getName2.call(obj2));
// 1. 'pen', 'pen', 'book', 'book',
//     2. 'pen', undefined, 'book', 'book',
//     3. 'pen', undefined, 'book', undefined,  +
//     4. 'pen', 'pen', undefined, undefined,


// const item1 = {
//     name: 'Lily',
//     greet: function() {
//         alert(this.name);
//     }
// };
// const item2 = Object.create(item1);
// console.log(!!item2.greet);
// console.log('greet' in item2);
// console.log(item2.hasOwnProperty('greet'));

// temaa
// 1. false, false, false,
//     2. true, true, false, +
//     3. false, true, false,
//     4. true, false, false,


// let Car = function CarModel(model, engine) {
//     this.model = model;
//     this.engine = engine;
//     this.releaseDate = 2020;
//     return {};
// }
// const mercedes = new Car('Mercedes', 'V8');
// console.log(mercedes);
// 1. {},  +
// 2. { model: 'Mercedes', engine: 'V8' },
// 3. { model: 'Mercedes', engine: 'V8', releaseDate: 2020 },
// 4. TypeError: Car is not a constructor,

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
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
//
// vorovhetev class a ete object liner ok er haswone
// 1. 'Alice', false, 'Bob', false,  +
//     2. 'Alice', true, 'Bob', true,  +
//     3. 'Alice', true, undefined, false,
//     4. 'Alice', false, undefined, false,


// console.log('start');
// (async () => {
//     console.log(1);
//     await new Promise(res => setTimeout(res, 1000));
// })();
// console.log('end');

// 1. 'start', 1, 'end',  +
//     2. 'start', 'end' 1,
//     3. 1, 'start', 'end',
//     4. 1, 'end', 'start'


// const promise = new Promise((resolve, reject) => {
//     resolve(1);
//     reject(2);
// });
// promise
//     .then(result => {
//         console.log(result);
//         throw 3;
//     })
//     .catch(error => {
//         console.log(error);
//         return 4;
//     })
//     .then(result => {
//         console.log(result);
//     });
// 1. 1, 3,
//     2. 1, 3, 4,  +
//     3. 2,
//     4. 2, 4,



// const promise1 = new Promise(r => setTimeout(r, 10, 1));
// const promise2 = new Promise(r => setTimeout(r, 100, 2));
// const promise3 = Promise.resolve(3);
// const promise4 = Promise.resolve(4);
// const promises = [promise1, promise2, promise3, promise4];
// Promise.race(promises)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// 1. 1,
//     2. 2,
//     3. 3,  +
//     4. 4

// const foo = (string) => string.trim().split(" ").reverse().join(' ')

// console.log(11, foo("The quick brown fox jumps over the lazy dog"),111);
// Output: "dog lazy the over jumps fox brown quick The"









