// ===================================================== //
// // Замыкание
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
// // setTimeout

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
// // Прототипы

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
// // unshift & push

// const arr = [1, 2, 3]

// const arr2 = arr // arr

// const temp = arr.unshift(12) // 12 1 2 3
// arr2.push(14) // 12 1 2 3 14

// console.log(temp) // 4 // unshift returns the new length of the array.
// console.log(arr) // 12 1 2 3 14

// ===================================================== //
// // filter nullable

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
// // Потеря контекста

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
// // Уникальные значения

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

// // ===================================================== //
// // Ссылка

// const arr1 = [{company: 'CompanyName'}]
// const arr4 = [...arr1]
// arr4[0].company = 'dino systems'

// console.log('arr1', arr1) // [{ company: "dino systems" }]

// ===================================================== //
// // Микротаски и макротаски

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
// // Написать палидром
// // dog -> god === true
// // dof -> fod === true

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('')
// }

// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('racecar1'))

// ===================================================== //
// // Написать реализацию функции flat
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
// // +sum toString

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
// // sum(a, b) || sum(a)(b)

// function sum(...args) {
//   if (args.length === 2) return args[0] + args[1]

//   return function (b) {
//     return args[0] + b
//   }
// }

// console.log(sum(2, 3)) // 5
// console.log(sum(1)(2)) // 3

// ===================================================== //
// // reverse

// const array = [1, 2, 4, 6, 3]
// console.log([...array].map([].pop, array))

// ===================================================== //
// // bind

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
// // Добавить метод для работы с массивами который будет возвращать только те значения, которые в массиве являются уникальными (то есть встречаются всего один раз)

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
// // Typescript Generic

// interface X {
//     [key: string]: number
// }

// const x: X = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// function getProperty<T extends typeof x, K extends keyof typeof x>(obj: T, key: K): T[K] {
//     return obj[key]
// }

// getProperty(x, 'a') // 1
// getProperty(x, 'm') // error

// ===================================================== //
// // Микротаски и макротаски

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
// // useCallback

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
// // Являются ли все символы в строке уникальными

// function isUnique(string) {
//   return new Set(string).size === string.length
// }

// console.log(isUnique('123456'))
// console.log(isUnique('abcad'))

// ===================================================== //
// // Анаграммы

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
// // Вывести матрицу, обозначить цветом единицы

// import {StrictMode} from 'react'
// import ReactDOM from 'react-dom'

// const rootElement = document.getElementById('root')

// const matrix = [
//   [1, 0, 1, 0, 1],
//   [0, 0, 0, 1, 1],
//   [1, 0, 0, 1, 0],
//   [1, 0, 1, 1, 1],
//   [0, 0, 1, 1, 0],
// ]

// const showMatrix = arr => {
//   if (Array.isArray(arr)) return <div style={{display: 'flex', flexDirection: 'column'}}>{arr.map(value => showMatrix(value))}</div>
//   else return <div style={{display: 'flex', flexDirection: 'row', color: arr ? '#ff0000' : '#000'}}>{arr}</div>
// }

// ReactDOM.render(
//   <StrictMode>
//     <div style={{display: 'flex'}}>{matrix.map(value => showMatrix(value))}</div>
//   </StrictMode>,
//   rootElement
// )

// ===================================================== //
// // Кэш функции с результатом

// function cache(func) {
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
//       const result = func(...args)
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
// // Учитывая массив, поверните массив вправо k пошагово, где k неотрицательно.

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
// // Для заданного целочисленного массива nums возвращайте значение, true если какое-либо значение встречается в массиве не менее двух раз, и возвращайте значение, false если все элементы различны.

// const nums = [1, 2, 3, 1]

// // Sort nums
// nums.sort((a, b) => a - b)

// // Solution 1
// console.log(String(nums) !== String([...new Set(nums)]))

// // Solution 2
// console.log(nums.some((value, index) => nums.indexOf(value) !== index))

// ===================================================== //
// // .map

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

console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean(function () {})) // true
console.log(Number('')) // 0
console.log(4 + 10 + 'px') // number
console.log('px' + 4 + 10) // string
console.log(null + 2) // 2
console.log(undefined + 2) // NaN
console.log(Boolean('0')) // true
console.log('0' == false) // true т. к. интерпретатор переводит '0' в число
console.log(false == []) // true
console.log(false == {}) // false
if ([]) console.log('true') // true
else console.log('false')
if ([0] == true) console.log('true')
else console.log('false') // false
if ([1] == true) console.log('true') // true
else console.log('false')
console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false
console.log(0 == []) // true
console.log(0 == {}) // false
console.log(0 == null) // false

let obj = {a: 1}
Object.freeze(obj)
obj.b = 2
console.log(obj)

// --rebase test master 1
// --rebase test master 2
// --rebase test master 3
// --rebase test master 4
// --rebase test develop 1
// --rebase test develop 2
// --rebase test develop 3
// --rebase test develop 4

console.log(typeof null) // object
console.log(typeof function () {}) // function
console.log(typeof class C {}) // function
console.log(typeof (2 / 0)) // number. Infinity === 'number'
console.log(typeof (2 / 'a')) // number. NaN === 'number'
