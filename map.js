Array.prototype.myMap = function (callback) {
  let res = []

  for (let i of this) res.push(callback(i))

  return res
}

let arr = [2, 5, 3]
let res = arr.myMap(par => `Значение = ${par}`)

console.log(res)
