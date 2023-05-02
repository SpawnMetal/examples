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
