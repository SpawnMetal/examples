const log = console.log

const timeout = x => setTimeout(() => log(x))

const promise = x => Promise.resolve(x).then(x => log(x))

const otherPromise = x =>
  new Promise(res => {
    log(x) // 2 = 4
    res(x + 2) // m2 = 6
  }).then(log)

log(1) // 1 = 1
timeout(2) // M1 = 2
promise(3) // m1 = 3
otherPromise(4)
log(5) // 3 = 5

// 1
// 4
// 5
// 3
// 6
// 2

////////////////////////////////////////////////
// const a = 1
// setTimeout(() => log(a + 2)) // 3
// Promise.resolve().then(() => log(a + 1)) // 2

////////////////////////////////////////////////
// // Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// // Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// delay(3000).then(() => console.log('Выполнилось через 3 секунды'))

////////////////////////////////////////////////
// new Promise(function (resolve, reject) {
//   throw new Error('Whoops!')
// }).catch(error => console.log('error', error))
