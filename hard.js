// const  replaceSpacesWithCommas = (str) => {
//     return str.split(' ').filter((el, index, array) => {
//
//         if(el.trim().length === 0){
//             return !!(index === 0 || index === array.length - 1);
//         } else return true
//
//     }).map((el, index, array) => {
//         if (el.trim().length === 0 || index === array.length -1) {
//             return el
//         }
//         if (index === array.length -2 && array[index + 1].trim().length === 0) return el
//         return el += ','
//     }).join(' ')
// }
//
// // Examples
// console.log(replaceSpacesWithCommas(' My name is Arman '))
// // --> ' My,name,is,Arman ')
// console.log(replaceSpacesWithCommas('I am   a cat'))
// // --> 'I,am,a,cat')


///2
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

 ///3
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