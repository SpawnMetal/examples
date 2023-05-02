// const log = console.log

// const timeout = x => setTimeout(() => log(x))

// const promise = x => Promise.resolve(x).then(x => log(x))

// const otherPromise = x =>
//   new Promise(res => {
//     log(x) // 2 = 4
//     res(x + 2) // m2 = 6
//   }).then(log)

// log(1) // 1 = 1
// timeout(2) // M1 = 2
// promise(3) // m1 = 3
// otherPromise(4)
// log(5) // 3 = 5

// // 1
// // 4
// // 5
// // 3
// // 6
// // 2

////////////////////////////////////////////////
// const log = console.log
// const a = 1
// setTimeout(() => log(a + 2)) // M1
// Promise.resolve().then(() => log(a + 1)) // m1

// // 2
// // 3

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

////////////////////////////////////////////////
// Promise.resolve('1')
//   // Promise.resolve вернул "1"
//   .then(data => {
//     console.log(data) // => "1"
//   })

//   // .then ничего не вернул
//   .then(data => {
//     console.log(data) // => "undefined"
//     return '2'
//   })

//   // .then вернул "2"
//   .then(data => {
//     console.log(data) // => "2"
//   })

////////////////////////////////////////////////
// Promise.reject()
//   // используем колбэки для .then и для .catch
//   .then(
//     data => console.log('ok'), // => skip
//     data => console.log('error') // => "error"
//   )

////////////////////////////////////////////////
// Promise.reject(1)
//   // skip
//   // обработать reject можно только в .catch
//   .then(data => {
//     console.log(data)
//   })

//   // второй аргумент .then вместо .catch
//   .then(null, data => console.log(data)) // => 1

//   // после обработки ошибки попадаем в .then
//   // => "ok"
//   .then(() => console.log('ok'))

////////////////////////////////////////////////
// Promise.resolve('1')
//   // skip
//   .then(null)

//   // придут данные из Promise.resolve
//   .then(data => console.log(data)) // => "1"

////////////////////////////////////////////////
// Promise.reject('Api Error')
//   // skip из-за Promise.reject
//   .then(data => console.log('ok'))

//   // обработка ошибки
//   .catch(error => {
//     console.log(error) // => "Api Error"
//     return '1'
//   })

//   // catch вернул "1"
//   .then(data => {
//     console.log(data) // => "1"
//   })

////////////////////////////////////////////////
// Promise.reject()
//   // обработка Promise.reject
//   .catch(() => {
//     console.log('error1') // => "error1"
//     return Promise.reject()
//     // аналогично
//     // return reject();
//   })

//   // обработка Promise.reject из предыдущего .catch
//   .catch(() => {
//     console.log('error2') // => "error2"
//   })

////////////////////////////////////////////////
// Promise.resolve()
//   .then(data => {
//     // возникновение ошибки
//     throw new Error('Api Error')
//     // не имеет значения, что вернули
//     return 1
//   })

//   // skip, потому что предыдущий .then бросил ошибку
//   .then(data => console.log('ok'))

//   // обработка ошибки
//   .catch(error => {
//     console.log(error.message) // => "Api Error"
//     return '2'
//   })

//   // .catch вернул "2"
//   .then(data => {
//     console.log(data) // => "2"
//   })

////////////////////////////////////////////////
// Promise.resolve().then(() => {
//   throw new Error('Api Error')
// })

// // код будет работать не в node.js
// setTimeout(() => {
//   console.log('setTimeout') // => "setTimeout"
// }, 1000)

////////////////////////////////////////////////
// Promise.reject('Api Error')
//   // skip: ошибку не обработали
//   .catch(null)

//   // skip из-за необработанной ошибки
//   .then(data => console.log('ok'))

//   // обработка ошибки
//   .catch(error => console.log(error)) // => "Api Error"

//   // .then выполнится
//   .then(data => console.log('ok')) // => "ok"

////////////////////////////////////////////////
// Promise.resolve()
//   .then(() => {
//     return '1'
//   })

//   // .then вернул "1", но .finally не содержит data
//   .finally(data => {
//     console.log(data) // => "undefined"
//     return '2'
//   })

//   // из .finally вернули "2", но результат берется из предыдущего .then или .catch
//   .then(data => console.log(data)) // => "1"

////////////////////////////////////////////////
// // .finally выполняется в любом случае: даже при возникновении ошибки. В node.js будет выведена ещё и ошибка
// Promise.reject().finally(data => {
//   console.log('finally') // => "finally"
// })

////////////////////////////////////////////////
// // Если несколько Promise, то ".then" будет выполняться последовательно для каждого:

// Promise.resolve()
//   .then(() => console.log(1)) // "Первый"
//   .then(() => console.log(2)) // "Третий"

// Promise.resolve()
//   .then(() => console.log(11)) // "Второй"
//   .then(() => console.log(12)) // "Четвертый"

// При ".catch" аналогично:

// Promise.resolve()
//   .then(() => console.log(1)) // "Первый"
//   .then(() => {
//     console.log(2)
//     throw new Error()
//   }) // "Третий"
//   .catch(() => console.log(3)) // "Пятый"
//   .then(() => console.log(4)) // "Седьмой"

// Promise.resolve()
//   .then(() => console.log(11)) // "Второй"
//   .then(() => {
//     console.log(12)
//     throw new Error()
//   }) // "Четвертый"
//   .catch(() => console.log(13)) // "Шестой"
//   .then(() => console.log(14)) // "Восьмой"

////////////////////////////////////////////////

async function a1() {
  return 1
}
async function a2() {
  return 2
}
async function a3() {
  return 3
}

async function res() {
  let result
  result = await Promise.all([a1(), a2(), a3()])
  console.log(result) // [ 1, 2, 3 ]

  result = await Promise.allSettled([a1(), a2(), a3()])
  console.log(result)
  // [
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'fulfilled', value: 2 },
  //   { status: 'fulfilled', value: 3 }
  // ]
}

res()
