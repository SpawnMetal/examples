{
  var a = 2
  let b = 3
  const c = [1, 2]

  //   c = [3] // Error. С объектом так же
  c[0] = 3
  console.log(c) // [ 3, 2 ]
}
console.log(a) // 2
// console.log(b) // Error

function closest(a) {
  return function closest(b) {
    console.log(a + b)
  }
}
const cls = closest(10)
cls(1) // 11
cls(10) // 20

for (var i = 0; i < 5; i++)
  setTimeout(function () {
    console.log('var i =', i)
  }, 0)
for (let i = 0; i < 5; i++)
  setTimeout(function () {
    console.log('let i =', i)
  }, 0)
for (var i = 0; i < 5; i++)
  (function (j) {
    setTimeout(function () {
      console.log('var iife i =', j)
    }, 0)
  })(i)

let result = []
for (var i = 0; i < 5; i++)
  result.push(function () {
    console.log('result', i)
  })
result[2]()
result[4]()

result = []
for (let i = 0; i < 5; i++)
  result.push(function () {
    console.log('result let', i)
  })
result[2]()
result[4]()

result = []
for (var i = 0; i < 5; i++)
  (function () {
    var j = i
    result.push(function () {
      console.log('result iife j', j)
    })
  })()
result[2]()
result[4]()

function FnNew(color) {
  this.color = color
  ;(() => console.log('Arrow', this.color))()
  ;(function () {
    console.log('Arrow', this.color)
  })()
}
FnNew('red')
new FnNew('red')

function Cat(color, name) {
  this.color = color
  this.name = name
}
// const cat = new Cat('black', 'КОТ')
// console.log(cat) // Cat { color: 'black', name: 'КОТ' }
function CatPrototype(constructor, ...args) {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  return constructor.apply(obj, args) || obj
}
const cat = CatPrototype(Cat, 'black', 'КОТ')
console.log(cat)

function Cat(name, color) {
  this.name = name
  this.color = color
}
Cat.prototype.voice = function () {
  console.log(`Cat ${this.name} says myay`)
}
const cat = new Cat('Kot', 'black')
console.log(Cat.prototype) // Cat { voice: [Function] }
console.log(cat) // Cat { name: 'Kot', color: 'black' }
cat.voice() // Cat Kot says myay
console.log(cat.__proto__) // Cat { voice: [Function] }
console.log(cat.__proto__ === Cat.prototype) // true
console.log(cat.constructor) // [Function: Cat]
console.log(cat.hasOwnProperty('name')) // true
console.log(cat.hasOwnProperty('voice')) // false
console.log('voice' in cat) // true

let proto = {year: 2021}
const myYear = Object.create(proto) // Задаёт прототип объекта proto
console.log(myYear.__proto__ === proto)
console.log(myYear.year)
proto.year = 2022
console.log(myYear.year)
proto = {year: 666}
console.log(myYear.year)
