// ===================================================== //
// // Замыкание
// function closest(a) {
//   return function closest(b) {
//     console.log(a + b)
//   }
// }
// const cls = closest(10)
// cls(1) // 11
// cls(10) // 20

// for (var i = 0; i < 5; i++)
//   setTimeout(function () {
//     console.log('var i =', i)
//   }, 0)

// for (let i = 0; i < 5; i++)
//   setTimeout(function () {
//     console.log('let i =', i)
//   }, 0)

// for (var i = 0; i < 5; i++)
//   (function (j) {
//     setTimeout(function () {
//       console.log('var iife i =', j)
//     }, 0)
//   })(i)

// let result = []
// for (var i = 0; i < 5; i++)
//   result.push(function () {
//     console.log('result', i)
//   })
// result[2]()
// result[4]()

// result = []
// for (let i = 0; i < 5; i++)
//   result.push(function () {
//     console.log('result let', i)
//   })
// result[2]()
// result[4]()

// result = []
// for (var i = 0; i < 5; i++)
//   (function () {
//     var j = i
//     result.push(function () {
//       console.log('result iife j', j)
//     })
//   })()
// result[2]()
// result[4]()

// ===================================================== //
// // Прототипы
// function FnNew(color) {
//   this.color = color
//   ;(() => console.log('Arrow', this.color))()
//   ;(function () {
//     console.log('Arrow', this.color)
//   })()
// }
// FnNew('red')
// new FnNew('red')

// function Cat(color, name) {
//   this.color = color
//   this.name = name
// }
// // const cat = new Cat('black', 'КОТ')
// // console.log(cat) // Cat { color: 'black', name: 'КОТ' }
// function CatPrototype(constructor, ...args) {
//   const obj = {}
//   Object.setPrototypeOf(obj, constructor.prototype)
//   return constructor.apply(obj, args) || obj
// }
// const cat = CatPrototype(Cat, 'black', 'КОТ')
// console.log(cat)

// function Cat(name, color) {
//   this.name = name
//   this.color = color
// }
// Cat.prototype.voice = function () {
//   console.log(`Cat ${this.name} says myay`)
// }
// const cat = new Cat('Kot', 'black')
// console.log(Cat.prototype) // Cat { voice: [Function] }
// console.log(cat) // Cat { name: 'Kot', color: 'black' }
// cat.voice() // Cat Kot says myay
// console.log(cat.__proto__) // Cat { voice: [Function] }
// console.log(cat.__proto__ === Cat.prototype) // true
// console.log(cat.constructor) // [Function: Cat]
// console.log(cat.hasOwnProperty('name')) // true
// console.log(cat.hasOwnProperty('voice')) // false
// console.log('voice' in cat) // true

// let proto = {year: 2021}
// const myYear = Object.create(proto) // Задаёт прототип объекта proto
// console.log(myYear.__proto__ === proto)
// console.log(myYear.year)
// proto.year = 2022
// console.log(myYear.year)
// proto = {year: 666}
// console.log(myYear.year)

// ===================================================== //
// const arr = [1, 2, 3]

// const arr2 = arr // arr

// const temp = arr.unshift(12) // 12 1 2 3
// arr2.push(14) // 1 2 3 14

// console.log('----- Ex. 1 -----')
// console.log(temp) // 4 // unshift returns the new length of the array.
// console.log(arr) // 12 1 2 3 14

// ===================================================== //

// const arr3 = ['abc', null, '', undefined, false, '', 123, true]

// const filteredArray = arr3 => {
//   return arr3.filter(val => val)
// }

// Solution 2
// const filteredArray = arr3 => {
//   return arr3.filter(Boolean)
// }

// console.log('----- Ex. 2 -----')
// console.log(filteredArray(arr3)) // [ 'abc', 123, true ]

// ===================================================== //

// const obj = {
//   a: 40,
//   say: function () {
//     setTimeout(
//       function () {
//         console.log('----- Ex. 3 -----', this.a)
//       }.bind(this)
//     )
//   },
// }

// obj.say()

// ===================================================== //

// const nonUnique = [1, 2, 45, 3, 2, 1, 3, 2, 1, 45, 5]

// const uniqueItems = arr => {
//   // Solution 1
//   return [...new Set(arr)]

//   // Solution 2
//   const result = []

//   for (let i of arr) result.indexOf(i) === -1 && result.push(i)

//   return result
// }

// console.log('----- Ex. 4 -----')
// console.log(uniqueItems(nonUnique)) // [ 1, 2, 45, 3, 5 ]

// // ===================================================== //

// const arr1 = [{company: 'dins'}]
// const arr4 = [...arr1]
// arr4[0].company = 'dino systems'

// console.log('----- Ex. 5 -----')
// console.log('arr1', arr1) // [{ company: "dino systems" }]

// ===================================================== //

// function something() {
//   console.log('Script start') // 1

//   setTimeout(() => {
//     console.log('setTimeout') // M1
//   }, 0)

//   Promise.resolve()
//     .then(() => {
//       console.log('promise 1') // m1
//     })
//     .then(data => {
//       console.log(`promise 2`) // m2
//     })

//   console.log('Script end') // 2
// }

// console.log("----- Ex. 6 -----")
// something()

// // Script start
// // Script end
// // promise 1
// // promise 2
// // setTimeout

// ===================================================== //

// // Написать палидром
// // dog -> god === true
// // dof -> fod === true

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('')
// }

// console.log('----- Ex. 7 -----')

// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('racecar1'))

// ===================================================== //

// // Написать реализаци функции flat
// const array = [1, [2, 3, 4, [5, 6, [7]]], [8, 9]]

// // Solution 1
// const flattened = arr => [].concat(...arr)

// // Solution 2
// // const flattened = arr => arr.reduce((acc, val) => acc.concat(val), [])

// function flatten(ary) {
//   for (let val of ary)
//     if (Array.isArray(val)) {
//       const arr = flattened(ary) // [1, 2, [3], 4, 5]
//       return flatten(arr) // [1, 2, 3, 4, 5]
//     }

//   return ary
// }

// console.log('----- Ex. 8 -----')
// console.log(flatten(array)) // [1, 2, 3, 4, 5]

// ===================================================== //

// function sum(a) {
//   let currentSum = a

//   function f(b) {
//     currentSum += b
//     return f
//   }

//   f.toString = function () {
//     return currentSum
//   }

//   return f
// }

// console.log('----- Ex. 9 -----')
// console.log(+sum(1)(2)) // 3
// console.log(+sum(5)(-1)(2)) // 6
// console.log(+sum(6)(-1)(-2)(-3)) // 0

// ===================================================== //

// // reverse
// const array = [1, 2, 4, 6, 3]
// console.log([...array].map([].pop, array))

// ===================================================== //
