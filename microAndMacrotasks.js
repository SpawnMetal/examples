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

// const a = 1
// setTimeout(() => log(a + 2)) // 3
// Promise.resolve().then(() => log(a + 1)) // 2
