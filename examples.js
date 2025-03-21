// import testClass from './observer.js'

// ===================================================== //
// Замыкание

// // Пример 1, простейший
// function createCalc(n)
// {
//     return function()
//     {
//         console.log(n * 1000)
//     }
// }

// let calc = createCalc(42)
// calc()

// // Пример 2
// const obj1 = {name: 'qwe', year: '100', path: '123'}
// const obj2 = {name: 'asd', year: '200', path: '456'}

// function log()
// {
//     console.log(`Имя: ${this.name}, Год: ${this.year}, Путь: ${this.path}`)
// }

// function go(context, fn)
// {
//     return function()
//     {
//         fn.apply(context)
//     }
// }

// go(obj1, log)()
// go(obj2, log)()

// // Пример 3
// function closest(a) {
//   return function closest(b) {
//     console.log(a + b)
//   }
// }
// const cls = closest(10)
// cls(1) // 11
// cls(10) // 20

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
// setTimeout

// // i === 5
// for (var i = 0; i < 5; i++)
//   setTimeout(function () {
//     console.log('var i =', i)
//   }, i * 1000)

// // Способ 1 let
// for (let i = 0; i < 5; i++)
//   setTimeout(function () {
//     console.log('let i =', i)
//   })

// // Способ 2 IIFE
// for (var i = 0; i < 5; i++) (i => setTimeout(() => console.log('var i =', i)))(i)

// for (var i = 0; i < 5; i++)
//   (function (i) {
//     setTimeout(function () {
//       console.log('var iife i =', i)
//     })
//   })(i)

// // Способ 3 bind
// for (var i = 0; i < 5; i++)
//   setTimeout(
//     function (i) {
//       console.log('var i =', i)
//     }.bind(undefined, i)
//   )

// // Способ 4 bind this
// for (var i = 0; i < 5; i++)
//   setTimeout(
//     function () {
//       console.log('var i =', this)
//     }.bind(i)
//   )

// // Способ 5 IIFE bind log
// for (var i = 0; i < 5; i++) (j => setTimeout(console.log.bind(undefined, `var iife j = ${j}`)))(i)

// ===================================================== //
// Прототипы

// function FnNew(color) {
//   this.color = color
//   ;(() => console.log('Arrow', this.color))()
//   ;(function () {
//     console.log('function', this.color)
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
// unshift & push

// const arr = [1, 2, 3]

// const arr2 = arr // arr

// const temp = arr.unshift(12) // 12 1 2 3
// arr2.push(14) // 12 1 2 3 14

// console.log(temp) // 4 // unshift returns the new length of the array.
// console.log(arr) // 12 1 2 3 14

// ===================================================== //
// filter nullable

// const arr3 = ['abc', null, '', undefined, false, '', 123, true]

// // Solution 1
// const filteredArray = arr3 => {
//   return arr3.filter(val => val)
// }

// // Solution 2
// const filteredArray = arr3 => {
//   return arr3.filter(Boolean)
// }

// console.log(filteredArray(arr3)) // [ 'abc', 123, true ]

// ===================================================== //
// Уникальные значения

// const nonUnique = [1, 2, 45, 3, 2, 1, 3, 2, 1, 45, 5]

// const uniqueItems = arr => {
//   // Solution 1
//   return [...new Set(arr)]

//   // Solution 2
//   const result = []

//   for (const i of arr) result.indexOf(i) === -1 && result.push(i)

//   return result
// }

// console.log(uniqueItems(nonUnique)) // [ 1, 2, 45, 3, 5 ]

// ===================================================== //
// Ссылка

// const arr1 = [{company: 'CompanyName'}]
// const arr4 = [...arr1]
// arr4[0].company = 'dino systems'

// console.log('arr1', arr1) // [{ company: "dino systems" }]

// ===================================================== //
// Написать палиндром
// dog -> god === true
// dof -> fod === true

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('')
// }

// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('racecar1'))

// ===================================================== //
// Написать реализацию функции flat

// const array = [1, [2, 3, 4, [5, 6, [7]]], [8, 9]]

// // Solution 1
// const flattened = arr => [].concat(...arr)

// // Solution 2
// const flattened = arr => arr.reduce((acc, val) => acc.concat(val), [])

// function flatten(ary, depth = -1) {
//   for (const val of ary)
//     if (Array.isArray(val)) {
//       depth--
//       const arr = flattened(ary) // [1, 2, [3], 4, 5]
//       if (depth) return flatten(arr, depth) // [1, 2, 3, 4, 5]
//       else return arr
//     }

//   return ary
// }

// console.log(flatten(array)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(flatten(array, Infinity)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(flatten(array, 3)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(flatten(array, 2)) // [1, 2, 3, 4, 5, 6, [ 7 ], 8, 9]
// console.log(flatten(array, 1)) // [1, 2, 3, 4, [ 5, 6, [ 7 ] ], 8, 9]

// ===================================================== //
// +sum toString

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

// console.log(+sum(1)(2)) // 3
// console.log(sum(1)(2).toString()) // 3
// console.log(+sum(5)(-1)(2)) // 6
// console.log(+sum(6)(-1)(-2)(-3)) // 0

// ===================================================== //
// sum(a, b) || sum(a)(b)

// function sum(...args) {
//   if (args.length === 2) return args[0] + args[1]

//   return function (b) {
//     return args[0] + b
//   }
// }

// console.log(sum(2, 3)) // 5
// console.log(sum(1)(2)) // 3

// ===================================================== //
// reverse

// const array = [1, 2, 4, 6, 3]
// console.log([...array].map([].pop, array))

// ===================================================== //
// bind

// const sum = (x, y) => x + y

// Function.prototype.bind2 = function (context, ...args) {
//   return (...args2) => {
//     return this.apply(context, [...args, ...args2])
//   }
// }

// const plusTen = sum.bind2(undefined, 10)

// console.log(plusTen(1))
// console.log(plusTen(10))

// ===================================================== //
// Добавить метод для работы с массивами который будет возвращать только те значения, которые в массиве являются уникальными (то есть встречаются всего один раз)

// // Solution 1
// const findUnique = function () {
//   const result = []
//   for (const value of this) {
//     const filter = this.filter(par => par === value)
//     if (filter.length === 1) result.push(value)
//   }

//   return result
// }

// Array.prototype.findUnique = findUnique

// // Solution 2
// const findUnique = function () {
//   const result = []
//   const numbersCount = {}
//   for (const value of this) numbersCount[value] === undefined ? (numbersCount[value] = 1) : numbersCount[value]++
//   for (const value of this) numbersCount[value] === 1 && result.push(value)

//   return result
// }

// Array.prototype.findUnique = findUnique

// // Solution 3
// Array.prototype.findUnique = function () {
//   const result = []
//   const obj = {}

//   for (const value of this) obj[value] === undefined ? (obj[value] = 1) : obj[value]++
//   for (const key of Object.keys(obj)) obj[key] === 1 && result.push(+key)

//   return result
// }

// // Данные
// const result = [10, 5, 6, 10, 6, 7, 2].findUnique() // 5 7 2
// console.log(result)

// ===================================================== //
// Являются ли все символы в строке уникальными

// function isUnique(string) {
//   return new Set(string).size === string.length
// }

// console.log(isUnique('123456'))
// console.log(isUnique('abcad'))

// ===================================================== //
// Анаграммы

// // Solution 1

// function allAnagrams(arr) {
//   const newArr = arr.map(str => str.split('').sort().join(''))
//   return newArr.every(str => str === newArr[0])
// }

// // Solution 2

// function allAnagrams(array) {
//   for (let i = 1; i < array.length; i++) if (array[0] !== array[i].split('').sort().join('')) return false
//   return true
// }

// console.log(allAnagrams(['abcd', 'bdac', 'cabd']))
// console.log(allAnagrams(['abcd', 'bdXc', 'cabd']))

// ===================================================== //
// Повернуть матрицу на 90 градусов по часовой стрелке

// const matrix = [
//   [1, 2, 3], // [7, 4, 1],
//   [4, 5, 6], // [8, 5, 2],
//   [7, 8, 9], // [9, 6, 3]
// ]

// // Solution 1

// function rotate(source) {
//   const result = JSON.parse(JSON.stringify(source))

//   for (const iStr in source) {
//     for (const iEl in source[iStr]) {
//       result[iEl][source[iStr].length - iStr - 1] = source[iStr][iEl]
//     }
//   }

//   return result
// }

// // Solution 2

// function rotate(matrix) {
//   const result = []

//   for (let i = 0; i < matrix.length; i++) {
//     const str = matrix[i]
//     for (let j = 0; j < str.length; j++) {
//       result[j] = result[j] ?? []
//       result[j].unshift(str[j])
//     }
//   }

//   return result
// }

// function print(array) {
//   array.forEach(element => console.log(element))
// }

// print(rotate(matrix))

// ===================================================== //
// Кэш функции с результатом

// Solution 1
// function cache(callback) {
//   const cached = new Map()

//   return function (...args) {
//     const key = String(args)
//     console.log()
//     console.log(args)

//     if (cached.has(key)) {
//       console.log('cache')
//       return cached.get(key)
//     } else {
//       console.log('no cache')
//       const result = callback(...args)
//       cached.set(key, result)
//       return result
//     }
//   }
// }

// // Solution 2
// function cache(callback) {
//   const cached = {}

//   return function (...args) {
//     const key = String(args)
//     console.log()
//     console.log(args)

//     if (cached[key]) {
//       console.log('cache')
//       return cached[key]
//     } else {
//       console.log('no cache')
//       const result = callback(...args)
//       cached[key] = result
//       return result
//     }
//   }
// }

// const add = (a, b) => a + b
// const cachedAdd = cache(add)

// console.log(cachedAdd(1, 2)) // no cache
// console.log(cachedAdd(1, 2)) // cache
// console.log(cachedAdd(1, 2)) // cache
// console.log(cachedAdd(3, 4)) // no cache
// console.log(cachedAdd(3, 4)) // cache
// console.log(cachedAdd(1, 2)) // cache

// ===================================================== //
// Учитывая массив, поверните массив вправо k пошагово, где k неотрицательно.

// const nums = [1, 2, 3, 4, 5, 6, 7]
// const k = 3

// // Solution 1
// for (let i = 0; i < k; i++) {
//   const last = nums.pop()
//   nums.unshift(last)
// }
// console.log(nums) // [5, 6, 7, 1, 2, 3, 4]

// // Solution 2
// nums.unshift(...nums.splice(-k, k)) // Здесь происходит сначала модификация nums с помощью splice, а затем возвращённый [5, 6, 7] он делает spread и затем unshift
// console.log(nums) // [5, 6, 7, 1, 2, 3, 4]

// ===================================================== //
// Для заданного целочисленного массива nums возвращайте значение, true если какое-либо значение встречается в массиве не менее двух раз, и возвращайте значение, false если все элементы различны.

// const nums = [1, 2, 3, 1]

// // Solution 1
// nums.sort((a, b) => a - b)
// console.log(String(nums) !== String([...new Set(nums)]))

// // Solution 2
// nums.sort((a, b) => a - b)
// console.log(nums.some((value, index) => nums.indexOf(value) !== index))

// // Solution 3
// console.log(new Set(nums).size !== nums.length)

// ===================================================== //
// .map

// Array.prototype.myMap = function (callback) {
//   let result = []
//   for (const value of this) result.push(callback(value))
//   return result
// }

// let arr = [2, 5, 3]
// console.log(arr.myMap(par => `Значение = ${par}`))

// ===================================================== //
// Рекурсивно обойти дерево и вернуть сумму веток

// const tree = {
//   value: 5,
//   left: {
//     value: 1,
//     left: {
//       value: 5,
//     },
//   },
//   right: {
//     value: 10,
//     left: {
//       value: 20,
//     },
//     right: {
//       value: 30,
//     },
//   },
// }

// function sumTree(tree) {
//   let sum = tree.value
//   if (tree.left) sum += sumTree(tree.left)
//   if (tree.right) sum += sumTree(tree.right)
//   return sum
// }

// console.log(sumTree(tree))

// ===================================================== //
// Логические выражения

// console.log(Boolean({})) // true
// console.log(Boolean([])) // true
// console.log(Boolean(function () {})) // true
// console.log(Number('')) // 0
// console.log(4 + 10 + 'px') // 14px
// console.log('px' + 4 + 10) // px410
// console.log(null + 2) // 2
// console.log(undefined + 2) // NaN
// console.log(Boolean('0')) // true
// console.log('0' == false) // true т. к. интерпретатор переводит '0' в число
// console.log(false == []) // true. [] == false тоже
// console.log(false == {}) // false
// if ([]) console.log('true') // true
// else console.log('false')
// if ([0] == true) console.log('true')
// else console.log('false') // false
// if ([1] == true) console.log('true') // true
// else console.log('false')
// console.log('' == 0) // true
// console.log('' == {}) // false
// console.log('' == []) // true
// console.log(0 == {}) // false
// console.log(0 == []) // true
// console.log([] == null) // false
// console.log(false == null) // false
// console.log(0 == null) // false
// console.log(1 / 0) // Infinity
// console.log(0 / 1) // 0
// console.log(0 / 0) // NaN

// let obj = {a: 1}
// Object.freeze(obj)
// obj.b = 2
// console.log(obj)

// // --rebase test master 1
// // --rebase test master 2
// // --rebase test master 3
// // --rebase test master 4
// // --rebase test develop 1
// // --rebase test develop 2
// // --rebase test develop 3
// // --rebase test develop 4

// console.log(typeof null) // object
// console.log(typeof function () {}) // function
// console.log(typeof class C {}) // function
// console.log(typeof (2 / 0)) // number. Infinity === 'number'
// console.log(typeof (2 / 'a')) // number. NaN === 'number'

// ===================================================== //
// Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.
// Всегда будет только одно целое число, которое встречается нечетное количество раз.

// Примеры
// [7]должен вернуть 7, потому что это происходит 1 раз (что нечетно).
// [0]должен вернуть 0, потому что это происходит 1 раз (что нечетно).
// [1,1,2]должен вернуть 2, потому что это происходит 1 раз (что нечетно).
// [0,1,0,1,0]должен вернуть 0, потому что он встречается 3 раза (что нечетно).
// [1,2,2,3,3,3,4,3,3,3,2,2,1]должен вернуть 4, потому что он появляется 1 раз (что нечетно).

// const assert = require('chai').assert

// // Solution 1
// function findOdd(A) {
//   const result = {}
//   for (let value of A) result[value] === undefined ? (result[value] = 1) : result[value]++
//   for (let key of Object.keys(result)) if (result[key] % 2 !== 0) return +key
// }

// // Solution 2
// // Побитовое исключающее ИЛИ (^)
// // Повторяющиеся схлопнутся
// const findOdd = A => A.reduce((a, b) => a ^ b)

// describe('Example tests', function () {
//   function doTest(a, n) {
//     assert.strictEqual(findOdd(a), n, `Incorrect answer for input=[${a}]`)
//   }

//   it('Example tests', () => {
//     doTest([7], 7)
//     doTest([0], 0)
//     doTest([1, 1, 2], 2)
//     doTest([0, 1, 0, 1, 0], 0)
//     doTest([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4)
//   })

//   it('Fixed tests', () => {
//     doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5)
//     doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1)
//     doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5)
//     doTest([10], 10)
//     doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10)
//     doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1)
//   })
// })

// ===================================================== //
// Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.
// Примеры ввода/вывода:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// const Test = require('@codewars/test-compat')

// // Solution 1
// function XO(str) {
//   const result = {x: 0, o: 0}
//   for (let value of str) {
//     value = value.toLowerCase()
//     if (result[value] !== undefined) result[value]++
//   }
//   return result.x === result.o
// }

// // Solution 2
// function XO(str) {
//   return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
// }

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(XO('xo'),true);
//     Test.assertEquals(XO("xxOo"),true);
//     Test.assertEquals(XO("xxxm"),false);
//     Test.assertEquals(XO("Oo"),false);
//     Test.assertEquals(XO("ooom"),false);
//   });
// });

// ===================================================== //
// Вывести все способы разделения списка не менее чем из двух элементов на две непустые части массива.
// a = ["az", "toto", "picaro", "zone", "kiwi"] --> [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

// // Solution 1
// function partlist(arr) {
//   const result = []
//   for (let i = 1; i < arr.length; i++) result.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')])
//   return result
// }

// // // Solution 2
// // const partlist = a => a.map((v, i) => [a.slice(0, i).join(' '), a.slice(i).join(' ')]).slice(1)

// console.log(
//   JSON.stringify(partlist(['I', 'wish', 'I', "hadn't", 'come'])) ===
//     JSON.stringify([
//       ['I', "wish I hadn't come"],
//       ['I wish', "I hadn't come"],
//       ['I wish I', "hadn't come"],
//       ["I wish I hadn't", 'come'],
//     ])
// )
// console.log(
//   JSON.stringify(partlist(['cdIw', 'tzIy', 'xDu', 'rThG'])) ===
//     JSON.stringify([
//       ['cdIw', 'tzIy xDu rThG'],
//       ['cdIw tzIy', 'xDu rThG'],
//       ['cdIw tzIy xDu', 'rThG'],
//     ])
// )
// console.log(
//   JSON.stringify(partlist(['vJQ', 'anj', 'mQDq', 'sOZ'])) ===
//     JSON.stringify([
//       ['vJQ', 'anj mQDq sOZ'],
//       ['vJQ anj', 'mQDq sOZ'],
//       ['vJQ anj mQDq', 'sOZ'],
//     ])
// )

// ===================================================== //
// Вернуть continent: 'Europe', language: 'JavaScript'

// const countDevelopers = list => list.filter(({continent, language}) => continent === 'Europe' && language === 'JavaScript').length

// const list1 = [
//   {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript'},
//   {firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript'},
//   {firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML'},
//   {firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS'},
// ]

// const list2 = [
//   {firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML'},
//   {firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML'},
// ]

// console.log(countDevelopers(list1))
// console.log(countDevelopers(list2))

// ===================================================== //
// Вывести объект {language: количество}

// const list1 = [
//   {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C'},
//   {firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript'},
//   {firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby'},
//   {firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C'},
// ]

// // Solution 1
// function countLanguages(list) {
//   const result = {}
//   for (const {language} of list) result[language] ? result[language]++ : (result[language] = 1)
//   return result
// }

// // // Solution 2
// // function countLanguages(list) {
// //   const result = {}
// //   list.forEach(({language}) => (result[language] = (result[language] || 0) + 1))
// //   return result
// // }

// const result = countLanguages(list1)
// console.log(result, JSON.stringify(result) === JSON.stringify({C: 2, JavaScript: 1, Ruby: 1}))

// ===================================================== //
// Задача не ясна

// const delay = msec => new Promise(resolve => setTimeout(resolve, msec))

// async function countUp (n = 0) {
//   for (let i = 0; i < 5; i++) {
//     console.log(n + i)
//     await delay(100)
//   }
// }

// const throttledCountUp = asyncThrottle(countUp)

// throttledCountUp(0) // run
// throttledCountUp(10) // skip this
// await throttledCountUp(20) // skip this, but wait for "throttledCountUp(0)" to finish

// throttledCountUp(30) // run this

// async function asyncThrottle(countUp) {
//     let p;
//     return function (...args) {
//         if (p) {
//             return p
//         }

//         p = countUp(...args)
//     }
// }

// ===================================================== //
// Даны два отсортированных списка с интервалами присутствия пользователей в онлайне в течение дня. Начало интервала строго меньше конца. Нужно вычислить интервалы, когда оба пользователя были в онлайне.

// const result1 = intersection(
//   [
//     [8, 12],
//     [17, 22],
//   ],
//   [
//     [5, 11],
//     [14, 18],
//     [20, 23],
//   ]
// ) // [[8, 11], [17, 18], [20, 22]]

// const result2 = intersection(
//   [
//     [9, 15],
//     [18, 21],
//   ],
//   [
//     [10, 14],
//     [21, 22],
//   ]
// ) // [[10, 14]]

// function intersection(list1, list2) {
//   const result = []
//   let i = 0
//   let j = 0

//   while (i < list1.length && j < list2.length) {
//     const interval1 = list1[i]
//     const interval2 = list2[j]

//     if (interval1[0] <= interval2[1] && interval2[0] < interval1[1]) {
//       const start = Math.max(interval1[0], interval2[0])
//       const end = Math.min(interval1[1], interval2[1])

//       result.push([start, end])
//     }

//     if (interval1[1] < interval2[1]) i++
//     else if (interval2[1] < interval1[1]) j++
//     else {
//       i++
//       j++
//     }
//   }

//   return result
// }

// console.log('result1', result1)
// console.log('result2', result2)

// ===================================================== //
// Proxy

// testClass.count = 5
// testClass.updateCount(5)
// testClass.updateMessages()
// testClass.messages[0] = 2
// console.log(testClass.messages)
// testClass.updateMessages()
// console.log(testClass.messages)
// testClass.messages.length

// ===================================================== //
// Порядок инициализации https://www.typescriptlang.org/docs/handbook/2/classes.html#initialization-order

// class Base {
//   name = 'base'
//   constructor() {
//     console.log('My name is ' + this.name)
//   }
// }

// class Derived extends Base {
//   name = 'derived'
// }

// const d = new Derived() // Prints "base", not "derived"
// console.log(d.name)

// ===================================================== //
// Реализуйте класс emitter для подписывания на события, отписывания и вызов их

// class EventEmitter {
//   list = {}

//   on(key, callback) {
//     if (this.list[key]) this.list[key].add(callback)
//     else this.list[key] = new Set([callback])

//     return this
//   }

//   emit(key) {
//     for (const callback of this.list[key])
//       try {
//         callback()
//       } catch (error) {
//         console.log(error)
//       }

//     return this
//   }

//   off(key, callback) {
//     this.list[key].delete(callback)

//     return this
//   }
// }

// const emitter = new EventEmitter()

// const cb1 = () => console.log('cb1')
// const cb2 = () => console.log('cb2')

// emitter
//   .on('event', cb1) // подписка коллбэка cb1 на событие 'event'
//   .on('event', cb2)
//   .emit('event') // срабатывание события 'event'
//   // 'cb1'
//   // 'cb2'
//   .off('event', cb2) // отписка коллбэка cb2 от события 'event'
//   .emit('event')
// // 'cb1'

// ===================================================== //
// swap

// let obj1 = {
//   name: '111',
//   age: 10,
// }

// let obj2 = {
//   name: '222',
//   age: 20,
// }

// function swap(obj1, obj2) {
//   ;[obj1, obj2] = [obj2, obj1]
//   obj1.age = 30
// }

// swap(obj1, obj2)

// console.log('obj1', obj1) // {name: '111' , age 10}
// console.log('obj2', obj2) // {name: '222' , age 30}

// ===================================================== //
// Очистка ссылки на объект

// let obj = {a: 1}
// let array = [obj]
// obj = null
// console.log(obj) // null
// console.log(array) // [{a: 1}]

// ===================================================== //
// Временная мёртвая зона (Temporal Dead Zone, TDZ)

// let x = 5
// ;(function () {
//   console.log(x) // ReferenceError: Cannot access 'x' before initialization
//   let x = 0 // Если закомментировать эту строку, то x = 5, будет получен из родительского scope
// })()

// ===================================================== //
// Сжатие строки

// function archivate(str = '') {
//   if (typeof str !== 'string') return ''
//   if (str.length < 2) return str

//   let result = ''
//   let count = 1

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) count++
//     else {
//       result += str[i]
//       if (count > 1) result += count
//       count = 1
//     }
//   }

//   return result
// }

// // Пример использования
// const inputString = 'AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'
// const compressed = archivate(inputString)
// console.log(compressed) // Вывод: 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'
