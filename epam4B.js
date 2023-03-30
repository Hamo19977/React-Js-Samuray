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


const item1 = {
    name: 'Lily',
    greet: function() {
        alert(this.name);
    }
};
const item2 = Object.create(item1);
console.log(!!item2.greet);
console.log('greet' in item2);
console.log(item2.hasOwnProperty('greet'));

// 1. false, false, false,
//     2. true, true, false,
//     3. false, true, false,
//     4. true, false, false,



























