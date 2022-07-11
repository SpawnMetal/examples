const log = console.log

const timeout = x => setTimeout(() => log(x))

const promise = x => Promise.resolve(x).then(x => log(x))

const otherPromise = x =>
  new Promise(res => {
    log(x) // 2 = 4
    res(x + 2) // 5 = 6
  }).then(log)

log(1) // 1
timeout(2) // 6 = 2
promise(3) // 4 = 3
otherPromise(4) // 2 = 4 и 5 = 6
log(5) // 3 = 5

// const a = 1
// setTimeout(() => log(a + 2)) // 3
// Promise.resolve().then(() => log(a + 1)) // 2
