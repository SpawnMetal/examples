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

// i === 5
// for (var i = 0; i < 5; i++)
//   setTimeout(function () {
//     console.log('var i =', i)
//   }, 0)

// Способ 1 let
// for (let i = 0; i < 5; i++)
//   setTimeout(function () {
//     console.log('let i =', i)
//   }, 0)

// Способ 2 IIFE
// for (var i = 0; i < 5; i++)
//   (function (i) {
//     setTimeout(function () {
//       console.log('var iife i =', i)
//     }, 0)
//   })(i)

// // Способ 3 bind
// for (var i = 0; i < 5; i++)
//   setTimeout(
//     function (i) {
//       console.log('var i =', i)
//     }.bind(undefined, i),
//     0
//   )

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
// Потеря контекста

// const obj = {
//   a: 40,
//   say: function () {
//     setTimeout(
//       function () {
//         console.log(this.a)
//       }.bind(this)
//     )
//   },
// }

// obj.say()

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
// Микротаски и макротаски

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

// something()

// // Script start
// // Script end
// // promise 1
// // promise 2
// // setTimeout

// ===================================================== //
// Написать палидром
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
//     filter = this.filter(par => par === value)
//     if (filter.length === 1) result.push(value)
//   }

//   return result
// }

// // Solution 2
// const findUnique = function () {
//   const result = []
//   const numbersCount = {}
//   for (const value of this) numbersCount[value] === undefined ? (numbersCount[value] = 1) : numbersCount[value]++
//   for (const value of this) numbersCount[value] === 1 && result.push(value)

//   return result
// }

// // Solution 3
// Array.prototype.findUnique = function () {
//   const result = []
//   const obj = {}

//   for (const value of this) obj[value] === undefined ? (obj[value] = 1) : obj[value]++
//   for (const key of Object.keys(obj)) obj[key] === 1 && result.push(+key)

//   return result
// }

// Array.prototype.findUnique = findUnique
// const result = [10, 5, 6, 10, 6, 7, 2].findUnique() // 5 7 2
// console.log(result)

// ===================================================== //
// Микротаски и макротаски

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// const someMethod = async files => {
//   const results = []

//   for (const el of files) {
//     await sleep(0) // ждем какой-то async метод (на практике был бы запрос к серверу)
//     results.push(el * 2)
//   }

//   return results
// }

// const start = async () => {
//   const results = await someMethod([1, 2, 3]) // 2 4 6
//   console.log(results)
// }

// start()

// ===================================================== //
// useCallback

// const LiveSearch = () => {
// const [val, setVal] = useState('');
// const [response, setResponse] = useState('');

// function search (query){
//     fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
//         .then(response => response.json())
//         .then(json => setResponse(json))
// }

// const onChange = (e) => {
//     setVal(e.target.value)
//     search(val)
// }

// const onReccomendationClick = useCallback(() => {
//     console.log(title)
// },
// [title],
// )

// return(
//     <div>
//         <input value={val} onChange={onChange} type="text"/>
//         <Reccomendations onClick={onReccomendationClick} response={response} />
//     </div>
// )
// }

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

// const add = (a, b) => a + b
// const cachedAdd = cache(add)
// let result

// result = cachedAdd(1, 2) // no cache
// console.log('result', result)
// result = cachedAdd(1, 2) // cache
// console.log('result', result)
// result = cachedAdd(1, 2) // cache
// console.log('result', result)

// result = cachedAdd(3, 4) // no cache
// console.log('result', result)
// result = cachedAdd(3, 4) // cache
// console.log('result', result)

// result = cachedAdd(1, 2) // cache
// console.log('result', result)

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
// nums.unshift(...nums.splice(-k, k))
// console.log(nums) // [5, 6, 7, 1, 2, 3, 4]

// ===================================================== //
// Для заданного целочисленного массива nums возвращайте значение, true если какое-либо значение встречается в массиве не менее двух раз, и возвращайте значение, false если все элементы различны.

// const nums = [1, 2, 3, 1]

// // Sort nums
// nums.sort((a, b) => a - b)

// // Solution 1
// console.log(String(nums) !== String([...new Set(nums)]))

// // Solution 2
// console.log(nums.some((value, index) => nums.indexOf(value) !== index))

// ===================================================== //
// .map

// Array.prototype.myMap = function (callback) {
//   let res = []

//   for (let i of this) res.push(callback(i))

//   return res
// }

// let arr = [2, 5, 3]
// let res = arr.myMap(par => `Значение = ${par}`)

// console.log(res)

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
// console.log(4 + 10 + 'px') // number
// console.log('px' + 4 + 10) // string
// console.log(null + 2) // 2
// console.log(undefined + 2) // NaN
// console.log(Boolean('0')) // true
// console.log('0' == false) // true т. к. интерпретатор переводит '0' в число
// console.log(false == []) // true
// console.log(false == {}) // false
// if ([]) console.log('true') // true
// else console.log('false')
// if ([0] == true) console.log('true')
// else console.log('false') // false
// if ([1] == true) console.log('true') // true
// else console.log('false')
// console.log('' == 0) // true
// console.log('' == []) // true
// console.log('' == {}) // false
// console.log(0 == []) // true
// console.log(0 == {}) // false
// console.log(0 == null) // false
// console.log(null == []) // false

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
// Вы живете в городе Картезия, где все дороги выложены идеальной сеткой. Вы пришли на встречу на десять минут раньше назначенного срока, поэтому решили воспользоваться возможностью прогуляться. Город предоставляет своим горожанам приложение Walk Generating на их телефонах — каждый раз, когда вы нажимаете кнопку, оно отправляет вам массив строк из одной буквы, представляющих направления ходьбы (например, ['n', 's', 'w', «е»]). Вы всегда проходите только один квартал для каждой буквы (направления), и вы знаете, что вам потребуется одна минута, чтобы пройти один городской квартал, поэтому создайте функцию, которая будет возвращать true, если прогулка, которую предлагает вам приложение, займет у вас ровно десять минут (вы не хочу ни рано, ни поздно!) и, конечно же, вернет вас в исходную точку. В противном случае верните false .

// Примечание . Вы всегда будете получать допустимый массив, содержащий случайный набор букв направления (только «n», «s», «e» или «w»). Он никогда не даст вам пустой массив (это не прогулка, это стояние на месте!).

// const chai = require('chai')
// const assert = chai.assert
// chai.config.truncateThreshold = 0

// function isValidWalk(walk) {
//   if (walk.length !== 10) return false

//   let x = 0
//   let y = 0

//   for (let value of walk) {
//     if (value === 'w') x++
//     else if (value === 'e') x--
//     else if (value === 'n') y++
//     else if (value === 's') y--
//   }

//   return x === 0 && y === 0
// }

// describe('Tests', () => {
//   it('test', () => {
//     console.log('test')
//     //some test cases for you...
//     assert.isTrue(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true')
//     assert.isFalse(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false')
//     assert.isFalse(isValidWalk(['w']), 'should return false')
//     assert.isFalse(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false')
//   })
// })

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
// Проверка на расстановку кораблей в морском бое

// const field = [
//   [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//   [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ]

// function validateBattlefield(field) {
//   const matrix = 10
//   const sheeps = {4: 1, 3: 2, 2: 3, 1: 4}
//   const postedSheeps = {}
//   for (const sheep in sheeps) postedSheeps[sheep] = 0
//   const checkeds = [...Array(matrix)].map(() => Array(matrix).fill(false))

//   for (let y = 0; y < field.length; y++)
//     for (let x = 0; x < field[y].length; x++)
//       if (field[y][x] && !checkeds[y][x]) {
//         let sheepX = 0
//         let sheepY = 0

//         while (field[y + sheepY][x + sheepX]) {
//           checkeds[y + sheepY][x + sheepX] = true
//           // We look only at the left and right bottom
//           if (field[y + sheepY + 1][x + sheepX - 1]) return false
//           if (field[y + sheepY + 1][x + sheepX + 1]) return false
//           checkeds[y + sheepY + 1][x + sheepX - 1] = true
//           checkeds[y + sheepY + 1][x + sheepX + 1] = true

//           if (field[y][x + sheepX + 1]) sheepX++
//           else if (field[y + sheepY + 1][x]) sheepY++
//           else break
//         }

//         const sheep = (sheepX ? sheepX : sheepY) + 1
//         postedSheeps[sheep]++

//         // This ship does not exist or the number of ships is over the limit
//         if (!sheeps[sheep] || postedSheeps[sheep] > sheeps[sheep]) return false
//       }

//   for (const sheep of Object.keys(sheeps)) if (postedSheeps[sheep] !== sheeps[sheep]) return false

//   return true
// }

// console.log(validateBattlefield(field))

// ===================================================== //
/*
Реализовать строковый шаблонизатор вида:
expand('Hello, {user.name}!', {user: {name: 'Paul'}});
который сделает подстановку переменных и вернет "Hello, Paul!".

get(
  {
    user: {name: 'Paul'},
    time: '14:30',
  },
  'user.name'
) // 'Paul'

get(
  {
    user: {name: 'Paul'},
    time: '14:30',
  },
  'date.name'
) // undefined
*/

// // Solution 1
// function get(obj, path) {
//   const p = path.split('.')
//   let result = obj

//   for (const key of p) {
//     if (!result?.[key]) return

//     result = result[key]
//   }

//   return result
// }

// function expand(template, params) {
//   let indexEnd = 0

//   while (true) {
//     let indexStart = template.indexOf('{', indexEnd) // 7

//     if (indexStart === -1) break

//     indexEnd = template.indexOf('}') // 17
//     const path = template.slice(indexStart + 1, indexEnd) // user.name
//     const str = get(params, path) // 'Paul'
//     if (str !== undefined) template = template.replace(`{${path}}`, str)
//   }

//   return template
// }

// ===================================================== //
/**
 * Список методов API:
 *  – GET /api/comments?page={page_number}
 *    Ответ: {"pageCount": 123, comments: [{"id": "...", "text": "..."}]}
 *  – GET /api/likes?comment={comment_id}
 *    Ответ: {"like": 123, "dislike": 456}
 *
 * Нужно вернуть массив в формате:
 *   [{"id": "...", "text": "...", "likes":{"like": 123, "dislike": 456}}]
 */

// async function getComments(pageNumber) {
//   const pageCount = 5

//   const pages = {
//     1: {
//       pageCount,
//       comments: [
//         {
//           id: '1',
//           text: 'page 1, comment 1',
//         },
//         {
//           id: '2',
//           text: 'page 1, comment 2',
//         },
//       ],
//     },
//     2: {
//       pageCount,
//       comments: [
//         {
//           id: '3',
//           text: 'page 2, comment 3',
//         },
//       ],
//     },
//     3: {
//       pageCount,
//       comments: [
//         {
//           id: '4',
//           text: 'page 3, comment 4',
//         },
//       ],
//     },
//     4: {
//       pageCount,
//       comments: [
//         {
//           id: '5',
//           text: 'page 4, comment 5',
//         },
//         {
//           id: '6',
//           text: 'page 4, comment 6',
//         },
//         {
//           id: '7',
//           text: 'page 4, comment 7',
//         },
//       ],
//     },
//     5: {
//       pageCount,
//       comments: [
//         {
//           id: '8',
//           text: 'page 5, comment 8',
//         },
//       ],
//     },
//   }

//   return new Promise((resolve, reject) => {
//     resolve(pages[pageNumber])
//   })
// }

// async function getLikes(commentId) {
//   const likes = {
//     1: {like: 10, dislike: 1},
//     2: {like: 20, dislike: 2},
//     3: {like: 30, dislike: 3},
//     4: {like: 40, dislike: 4},
//     5: {like: 50, dislike: 5},
//     6: {like: 60, dislike: 6},
//     7: {like: 70, dislike: 7},
//     8: {like: 80, dislike: 8},
//   }

//   return new Promise((resolve, reject) => {
//     resolve(likes[commentId])
//   })
// }

// const result = []

// async function getData() {
//   const commentsPromise = []
//   const comment1 = await getComments(1)
//   const pageCount = comment1.pageCount

//   const fillResult = comment => getLikes(comment.id).then(like => result.push({...comment, likes: like}))

//   for (let page = 2; page <= pageCount; page++) commentsPromise.push(getComments(page))
//   for (const comment of comment1.comments) fillResult(comment)

//   Promise.allSettled(commentsPromise).then(commentsPromiseSettled => {
//     //   {
//     //     status: 'fulfilled',
//     //     value: {
//     //       '1': {
//     //         pageCount,
//     //         comments: [
//     //           {
//     //             id: '1',
//     //             text: 'page 1, comment 1',
//     //           },
//     //           {
//     //             id: '2',
//     //             text: 'page 1, comment 2',
//     //           },
//     //         ],
//     //       },
//     //     },
//     //   },
//     //   {
//     //     status: 'fulfilled',
//     //     value: {
//     //       '2': {
//     //         pageCount,
//     //         comments: [
//     //           {
//     //             id: '3',
//     //             text: 'page 2, comment 3',
//     //           },
//     //         ],
//     //       },
//     //     },
//     //   },
//     // ]

//     for (const commentPromiseSettled of commentsPromiseSettled) for (const comment of commentPromiseSettled.value.comments) fillResult(comment)
//   })
// }

// getData()
// setTimeout(() => console.log(result))

// ===================================================== //
// Connect Four — это игра, в которой 2 игрока каждый ход бросают цветной диск в один из столбцов сетки. Когда игрок роняет диск, он занимает следующее доступное место в столбце. Победителем становится игрок, который первым образует линию (вертикальную, диагональную или горизонтальную) из 4 дисков своего цвета.

// Однако в этом ката есть следующие повороты:

// Там нет гравитации, поэтому диск будет просто помещен в положение XY.
// Пространство игры практически бесконечно, поэтому диск можно разместить в любом положении XY.
// Игроков может быть больше 2
// Учитывая игровую ситуацию, когда некоторые диски уже были размещены, вам необходимо определить победителя, если он есть.

// Вход
// Вход состоит из массива ходов, сделанных во время игры.

// [
//   {p: 'R', x: 0, y: 0},
//   {p: 'Y', x: 100, y: 100},
//   {p: 'R', x: 1, y: 0},
//   {p: 'Y', x: 99, y: 100},
//   {p: 'R', x: 2, y: 0},
//   {p: 'Y', x: 98, y: 100},
//   {p: 'R', x: 3, y: 0},
//   {p: 'Y', x: 96, y: 100}
// ];
// Вы можете видеть в этом примере, что игрок R выиграл, сделав линию

// {x: 0, y: 0}{x: 1, y: 0}{x: 2, y: 0}{x: 3, y: 0}
// Имейте в виду, что ходы НЕ упорядочены по времени, это пример, который хорошо подходит для описания обычного матча, но ходы, которые вы получите, будут в случайном порядке.

// Выход
// Вы должны вернуть игрока, который выиграл, в виде строки, в приведенном выше примере вы бы вернули'R'

// Если нет победителя, вы должны вернуть null

// Ограничения
// По стандартным правилам, вы должны проверять по строкам, столбцам и диагоналям.
// Если есть победитель, будет только один
// Вы не получите пустой массив или недопустимые входные данные
// Не будет дубликатов точек

// // R
// const moves1 = [
//   {p: 'R', x: 0, y: 0},
//   {p: 'Y', x: 100, y: 100},
//   {p: 'R', x: 1, y: 0},
//   {p: 'Y', x: 99, y: 100},
//   {p: 'R', x: 2, y: 0},
//   {p: 'Y', x: 98, y: 100},
//   {p: 'R', x: 3, y: 0},
//   {p: 'Y', x: 96, y: 100},
// ]

// // Y
// const moves2 = [
//   {p: 'R', x: 15, y: 15},
//   {p: 'Y', x: 10, y: 10},
//   {p: 'Y', x: 10, y: 11},
//   {p: 'Y', x: 10, y: 12},
//   {p: 'Y', x: 10, y: 13},
//   {p: 'R', x: 15, y: 16},
//   {p: 'R', x: 16, y: 15},
//   {p: 'R', x: 16, y: 16},
// ]

// // G
// const moves3 = [
//   {p: 'G', x: 0, y: 0},
//   {p: 'Y', x: 0, y: 1},
//   {p: 'G', x: 1, y: 1},
//   {p: 'Y', x: 1, y: 2},
//   {p: 'G', x: 2, y: 2},
//   {p: 'Y', x: 2, y: 3},
//   {p: 'G', x: -1, y: -1},
//   {p: 'Y', x: 3, y: 3},
// ]

// // null
// const moves4 = [
//   {p: 'A', x: 50, y: -50},
//   {p: 'B', x: 49, y: -50},
//   {p: 'C', x: 48, y: -50},
//   {p: 'D', x: 50, y: -49},
//   {p: 'A', x: 51, y: -50},
//   {p: 'B', x: 49, y: -49},
//   {p: 'C', x: 48, y: -51},
//   {p: 'D', x: 51, y: -49},
// ]

// // E
// const moves5 = [
//   {p: 'P', x: 0, y: 1},
//   {p: 'P', x: 0, y: -1},
//   {p: 'P', x: 0, y: -2},
//   {p: 'P', x: 0, y: -3},
//   {p: 'E', x: 0, y: 0},
//   {p: 'E', x: 1, y: -1},
//   {p: 'E', x: 2, y: -2},
//   {p: 'E', x: 3, y: -3},
// ]

// // E
// const moves6 = [
//   {p: 'P', x: 0, y: 10},
//   {p: 'P', x: 0, y: 4},
//   {p: 'P', x: 0, y: 10},
//   {p: 'P', x: 0, y: 10},
//   {p: 'E', x: 0, y: 0},
//   {p: 'E', x: 1, y: -1},
//   {p: 'E', x: 2, y: -2},
//   {p: 'E', x: 3, y: -3},
// ]

// // P
// const moves7 = [
//   {p: 'P', x: 0, y: 0},
//   {p: 'P', x: 2, y: 2},
//   {p: 'P', x: 3, y: 3},
//   {p: 'P', x: 1, y: 1},
//   {p: 'E', x: 0, y: 0},
//   {p: 'E', x: 1, y: 1},
//   {p: 'E', x: 2, y: 2},
//   {p: 'E', x: 3, y: 3},
// ]

// // E
// const moves8 = [
//   {p: 'R', x: 0, y: 3},
//   {p: 'R', x: 1, y: 1},
//   {p: 'R', x: 2, y: 0},
//   {p: 'R', x: 3, y: 2},
//   {p: 'E', x: 0, y: 0},
//   {p: 'E', x: 1, y: 1},
//   {p: 'E', x: 2, y: 2},
//   {p: 'E', x: 3, y: 3},
// ]

// // N
// // {x: 68, y: 69} // {p: 'N', x: -4268, y: -6069},
// // {x: 67, y: 70} // {p: 'N', x: -4267, y: -6070},
// // {x: 66, y: 71} // {p: 'N', x: -4266, y: -6071},
// // {x: 65, y: 72} // {p: 'N', x: -4265, y: -6072},
// // '[{"x":73,"y":81},{"x":73,"y":80},{"x":72,"y":83},{"x":72,"y":76},{"x":71,"y":86},{"x":69,"y":88},{"x":69,"y":86},{"x":69,"y":71},{"x":68,"y":87},{"x":68,"y":85},{"x":68,"y":84},{"x":68,"y":74},{"x":68,"y":69},{"x":67,"y":85},{"x":67,"y":84},{"x":67,"y":71},{"x":67,"y":70},{"x":66,"y":82},{"x":66,"y":80},{"x":66,"y":78},{"x":66,"y":72},{"x":66,"y":71},{"x":66,"y":70},{"x":65,"y":82},{"x":65,"y":72}]'
// const moves9 = [
//   {p: 'N', x: -4266, y: -6078},
//   {p: 'N', x: -4268, y: -6069},
//   {p: 'H', x: -4269, y: -6070},
//   {p: 'N', x: -4269, y: -6071},
//   {p: 'H', x: -4266, y: -6083},
//   {p: 'H', x: -4270, y: -6086},
//   {p: 'N', x: -4267, y: -6085},
//   {p: 'H', x: -4268, y: -6070},
//   {p: 'N', x: -4268, y: -6085},
//   {p: 'H', x: -4266, y: -6081},
//   {p: 'H', x: -4268, y: -6072},
//   {p: 'H', x: -4273, y: -6082},
//   {p: 'H', x: -4265, y: -6071},
//   {p: 'N', x: -4266, y: -6072},
//   {p: 'N', x: -4267, y: -6070},
//   {p: 'H', x: -4273, y: -6083},
//   {p: 'H', x: -4269, y: -6087},
//   {p: 'N', x: -4272, y: -6083},
//   {p: 'H', x: -4265, y: -6084},
//   {p: 'H', x: -4266, y: -6068},
//   {p: 'H', x: -4270, y: -6075},
//   {p: 'N', x: -4269, y: -6088},
//   {p: 'H', x: -4265, y: -6080},
//   {p: 'N', x: -4267, y: -6084},
//   {p: 'H', x: -4267, y: -6086},
//   {p: 'N', x: -4266, y: -6071},
//   {p: 'H', x: -4268, y: -6089},
//   {p: 'N', x: -4267, y: -6071},
//   {p: 'N', x: -4266, y: -6082},
//   {p: 'N', x: -4266, y: -6080},
//   {p: 'N', x: -4269, y: -6086},
//   {p: 'H', x: -4265, y: -6070},
//   {p: 'N', x: -4271, y: -6086},
//   {p: 'H', x: -4269, y: -6084},
//   {p: 'N', x: -4266, y: -6070},
//   {p: 'N', x: -4265, y: -6072},
//   {p: 'N', x: -4273, y: -6080},
//   {p: 'H', x: -4264, y: -6082},
//   {p: 'N', x: -4273, y: -6081},
//   {p: 'H', x: -4270, y: -6085},
//   {p: 'H', x: -4270, y: -6087},
//   {p: 'N', x: -4268, y: -6084},
//   {p: 'H', x: -4267, y: -6072},
//   {p: 'N', x: -4265, y: -6082},
//   {p: 'N', x: -4268, y: -6074},
//   {p: 'H', x: -4267, y: -6078},
//   {p: 'H', x: -4273, y: -6078},
//   {p: 'H', x: -4264, y: -6070},
//   {p: 'N', x: -4268, y: -6087},
//   {p: 'N', x: -4272, y: -6076},
// ]

// // R
// const moves10 = [
//   {p: 'R', x: 0, y: 1},
//   {p: 'R', x: 1, y: 1},
//   {p: 'R', x: 0, y: 0},
//   {p: 'R', x: 1, y: 0},
//   {p: 'R', x: 2, y: 2},
//   {p: 'R', x: 3, y: 3},
//   {p: 'E', x: 0, y: 0},
//   {p: 'E', x: 1, y: 1},
//   {p: 'E', x: 2, y: 2},
//   {p: 'E', x: 3, y: 3},
// ]

// // M
// const moves11 = [
//   {p: 'J', x: -4749, y: -6985},
//   {p: 'J', x: -4754, y: -6989},
//   {p: 'J', x: -4741, y: -6976},
//   {p: 'J', x: -4750, y: -6976},
//   {p: 'J', x: -4752, y: -6984},
//   {p: 'M', x: -4750, y: -6986},
//   {p: 'M', x: -4746, y: -6975},
//   {p: 'M', x: -4753, y: -6987},
//   {p: 'J', x: -4754, y: -6987},
//   {p: 'J', x: -4746, y: -6976},
//   {p: 'M', x: -4753, y: -6986},
//   {p: 'M', x: -4748, y: -6975},
//   {p: 'M', x: -4742, y: -6977},
//   {p: 'J', x: -4750, y: -6983},
//   {p: 'M', x: -4753, y: -6988},
//   {p: 'M', x: -4745, y: -6976},
//   {p: 'M', x: -4743, y: -6975},
//   {p: 'M', x: -4753, y: -6989},
//   {p: 'M', x: -4750, y: -6974},
//   {p: 'M', x: -4747, y: -6977},
//   {p: 'M', x: -4751, y: -6984},
//   {p: 'M', x: -4750, y: -6985},
//   {p: 'M', x: -4748, y: -6980},
//   {p: 'M', x: -4745, y: -6978},
//   {p: 'J', x: -4748, y: -6981},
//   {p: 'J', x: -4749, y: -6977},
//   {p: 'J', x: -4745, y: -6977},
//   {p: 'J', x: -4744, y: -6977},
//   {p: 'J', x: -4752, y: -6989},
//   {p: 'M', x: -4751, y: -6976},
//   {p: 'J', x: -4746, y: -6978},
//   {p: 'J', x: -4751, y: -6985},
//   {p: 'M', x: -4748, y: -6982},
//   {p: 'M', x: -4752, y: -6988},
//   {p: 'J', x: -4746, y: -6977},
//   {p: 'J', x: -4754, y: -6988},
//   {p: 'J', x: -4744, y: -6975},
// ]

// // Solution 1
// const connectFour = moves => {
//   const playerMovesLimit = 4
//   const players = {}

//   const M = new Set(moves.map(move => [move.x, move.y].join(move.p)))
//   console.log(M)

//   const getWinner = (movesP, currentX, currentY, action = 'x', count = 0) => {
//     let stepX = 0
//     let stepY = 0

//     if (action === 'y') stepY = 1
//     else stepX = 1
//     if (action === 'diagonalIncrementY') stepY = 1
//     else if (action === 'diagonalDecrementY') stepY = -1

//     const result = movesP.find(({x, y}) => x === currentX + stepX && y === currentY + stepY)
//     if (result) {
//       count++
//       if (count === playerMovesLimit - 1) return result
//       return getWinner(movesP, currentX + stepX, currentY + stepY, action, count)
//     }
//   }

//   for (const move of moves) {
//     const {p, x, y} = move
//     players[p] ? players[p].push({x, y}) : (players[p] = [{x, y}])

//     if (players[p].length >= playerMovesLimit) {
//       players[p].sort((a, b) => a.x - b.x || a.y - b.y)

//       for (let i = 0; i < players[p].length - 1; i++) {
//         if (getWinner(players[p], players[p][i].x, players[p][i].y)) return p
//         if (getWinner(players[p], players[p][i].x, players[p][i].y, 'y')) return p
//         if (getWinner(players[p], players[p][i].x, players[p][i].y, 'diagonalIncrementY')) return p
//         if (getWinner(players[p], players[p][i].x, players[p][i].y, 'diagonalDecrementY')) return p
//       }
//     }
//   }

//   return null
// }

// // Solution 2
// // const connectFour = moves => {
// //   M = new Set(moves.map(move => [move.x, move.y].join(move.p)))
// //   for (move of moves)
// //     for ([x, y] of [
// //       [0, 1],
// //       [1, 0],
// //       [1, 1],
// //       [1, -1],
// //     ])
// //       if ([1, 2, 3].every(i => M.has([move.x + i * x, move.y + i * y].join(move.p)))) return move.p
// //   return null
// // }

// console.log('R', connectFour(moves1))
// console.log('Y', connectFour(moves2))
// console.log('G', connectFour(moves3))
// console.log('null', connectFour(moves4))
// console.log('E', connectFour(moves5))
// console.log('E', connectFour(moves6))
// console.log('P', connectFour(moves7))
// console.log('E', connectFour(moves8))
// console.log('N', connectFour(moves9))
// console.log('R', connectFour(moves10))
// console.log('M', connectFour(moves11))

// ===================================================== //
// Квадрат Сатора. Каждое слово в матрице читается со всех сторон

// const tablet1 = [
//   ['T', 'E', 'N'],
//   ['E', 'Y', 'E'],
//   ['N', 'E', 'T'],
// ]

// const tablet2 = [
//   ['N', 'O', 'T'],
//   ['O', 'V', 'O'],
//   ['N', 'O', 'T'],
// ]

// const tablet3 = [
//   ['B', 'A', 'T', 'S'],
//   ['A', 'B', 'U', 'T'],
//   ['T', 'U', 'B', 'A'],
//   ['S', 'T', 'A', 'B'],
// ]

// const tablet4 = [
//   ['P', 'A', 'R', 'T'],
//   ['A', 'G', 'A', 'R'],
//   ['R', 'A', 'G', 'A'],
//   ['T', 'R', 'A', 'M'],
// ]

// const tablet5 = [
//   ['S', 'A', 'T', 'O', 'R'],
//   ['A', 'R', 'E', 'P', 'O'],
//   ['T', 'E', 'N', 'E', 'T'],
//   ['O', 'P', 'E', 'R', 'A'],
//   ['R', 'O', 'T', 'A', 'S'],
// ]

// const tablet6 = [
//   ['S', 'A', 'L', 'A', 'S'],
//   ['A', 'R', 'E', 'N', 'A'],
//   ['L', 'E', 'V', 'E', 'L'],
//   ['A', 'R', 'E', 'N', 'A'],
//   ['S', 'A', 'L', 'A', 'S'],
// ]

// // Solution 1
// function isSatorSquare(tablet) {
//   const across = []
//   const down = []
//   const up = []
//   const reverse = []

//   for (let i = 0; i < tablet.length; i++) {
//     let word = tablet[i]
//     across.push(word.join(''))
//     reverse.push([...word].reverse().join(''))
//     word = []

//     for (let j = 0; j < tablet.length; j++) word.push(tablet[j][i])

//     down.push(word.join(''))
//     up.push(word.reverse().join(''))
//   }

//   for (const word of across) if (!down.find(item => item === word) || !up.find(item => item === word) || !reverse.find(item => item === word)) return false

//   return true
// }

// // // Solution 2
// // const isSatorSquare = tablet => tablet.every((row, y) => row.every((v, x) => tablet[x][y] == v && tablet[row.length - x - 1][tablet.length - y - 1] == v))

// console.log('true', isSatorSquare(tablet1))
// console.log('false', isSatorSquare(tablet2))
// console.log('true', isSatorSquare(tablet3))
// console.log('false', isSatorSquare(tablet4))
// console.log('true', isSatorSquare(tablet5))
// console.log('false', isSatorSquare(tablet6))
