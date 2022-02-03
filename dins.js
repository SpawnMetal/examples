//

// const arr = [1, 2, 3];

// const arr2 = arr; // arr

// const temp = arr.unshift(12); // 12 1 2 3
// arr2.push(14); // 1 2 3 14

// console.log("----- Ex. 1 -----");
// console.log(temp); // 4
// console.log(arr); // 12 1 2 3 14

// ===================================================== //

// const arr3 = ["abc", null, "", undefined, false, "", 123, true];

// const filteredArray = (arr3) => {
//   //TODO: implement
//   return arr3.filter(val => val)
// };

// console.log("----- Ex. 2 -----");
// console.log(filteredArray(arr3)); // result [ 'abc', 123, true ];

// ===================================================== //

// const obj = {
//   a: 40,
//   say: function () {
//     setTimeout(function () {
//       console.log("----- Ex. 3 -----", this.a);
//     }.call(this))
//   }
// };

// obj.say();

// ===================================================== //

// const nonUnique = [1, 2, 45, 3, 2, 1, 3, 2, 1, 45, 5];

// const uniqueItems = (arr) => {
//   //TODO: implement
//   const result = []

//   for(let i of arr) result.indexOf(i) === -1 && result.push(i)

//   return result
// };

// console.log("----- Ex. 4 -----");
// console.log(uniqueItems(nonUnique)); // [ 1, 2, 45, 3, 5 ]

// // ===================================================== //

// const arr1 = [{ company: "dins" }];
// const arr4 = [...arr1];
// arr4[0].company = "dino systems";

// console.log("----- Ex. 5 -----");
// console.log("arr1", arr1); // [{ company: "dino systems" }]

// ===================================================== //

// function something() {
//   console.log("Script start");

//   setTimeout(() => {
//     console.log("setTimeout");
//   }, 0);

//   Promise.resolve()
//     .then(() => {
//       console.log("promise 1");
//     })
//     .then((data) => {
//       console.log(`promise 2`);
//     });

//   console.log("Script end");
// }

// console.log("----- Ex. 6 -----");
// something()
// Script start
// Script end
// promise 1
// promise 2
// setTimeout

// ===================================================== //

// Написать палидром
// dog -> god === true
// dof -> god

// function isPalindrome(str) {
//   const result = str.split('')
//   return result.reverse().join('') === str
// }

// console.log("----- Ex. 7 -----");

// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('racecar1'));

// ===================================================== //

// Написать реализаци функции flat
const array = [1, [2, 3, 4, [5, 6, [7]]], [8, 9]]

function flatten(ary) {
  // if(array?.[0])
}

console.log('----- Ex. 8 -----')
// console.log(flatten(array));

// ===================================================== //

const sum = a => {
  // return function(b) {return a + b}.bind(this)
}

console.log('----- Ex. 9 -----')
console.log(sum(1)(2)) // 3
console.log(sum(5)(-1)(2)) // 6
// console.log(sum(6)(-1)(-2)(-3)); // 0

// ===================================================== //
