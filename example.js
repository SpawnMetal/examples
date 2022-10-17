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

// Способ 1 const
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

// Способ 3 callback
// for (var i = 0; i < 5; i++)
//   (function (i) {
//     const callback = () => {
//       console.log('var iife i =', i)
//     }

//     setTimeout(callback, 0)
//   })(i)

// Способ 4 bind
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

// console.log(filteredArray(arr3)) // [ 'abc', 123, true ]

// ===================================================== //

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

// const arr1 = [{company: 'CompanyName'}]
// const arr4 = [...arr1]
// arr4[0].company = 'dino systems'

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

// // // Solution 1
// const flattened = arr => [].concat(...arr)

// // // Solution 2
// // const flattened = arr => arr.reduce((acc, val) => acc.concat(val), [])

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
// console.log(flatten(array, 3)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(flatten(array, 2)) // [1, 2, 3, 4, 5, 6, [ 7 ], 8, 9]
// console.log(flatten(array, 1)) // [1, 2, 3, 4, [ 5, 6, [ 7 ] ], 8, 9]

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

// console.log(+sum(1)(2)) // 3
// console.log(+sum(5)(-1)(2)) // 6
// console.log(+sum(6)(-1)(-2)(-3)) // 0

// ===================================================== //

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

// // Добавить метод для работы с массивами который будет возвращать
// // только те значения которые в массиве являются уникальными (то есть встречаются всего один раз)

// const findUnique = function () {
//   const result = []
//   for (const value of this) {
//     filter = this.filter(par => par === value)
//     if (filter.length === 1) result.push(value)
//   }

//   return result
// }

// Array.prototype.findUnique = findUnique
// const result = [10, 5, 6, 10, 6, 7, 2].findUnique() // 5 7 2
// console.log(result)

// ===================================================== //

// interface X {
//     [key: string]: number
// }

// const x: X = {
//  a: 1,
//  b: 2,
//  c: 3,
//  d: 4
// }
//
//
// function  getProperty<T extends typeof x, K extends keyof typeof x>(obj: T, key: K): T[K] {
//     return obj[key]
// }
//
// getProperty(x, 'a') // 1
// getProperty(x, 'm') // error

// ===================================================== //

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

// function allAnagrams(arr) {
//   const newArr = arr.map(str => str.split('').sort().join(''))
//   return newArr.every(str => str === newArr[0])
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

// function rotate(source) {
//   const result = JSON.parse(JSON.stringify(source))

//   for (const iStr in source) {
//     for (const iEl in source[iStr]) {
//       result[iEl][source[iStr].length - iStr - 1] = source[iStr][iEl]
//     }
//   }

//   return result
// }

// function print(array) {
//   array.forEach(element => console.log(element))
// }

// print(rotate(matrix))

// ===================================================== //

// Вывести матрицу, обозначить цветом единицы

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

// Для заданного целочисленного массива nums возвращайте значение, true если какое-либо значение встречается в массиве не менее двух раз, и возвращайте значение, false если все элементы различны.

const nums = [1, 2, 3, 1]

console.log(String(nums) !== String([...new Set(nums)]))
