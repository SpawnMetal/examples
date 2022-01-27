const log = console.log

const timeout = x => setTimeout(() => log(x))

const promise = x => Promise.resolve(x).then(x => log(x))

const otherPromise = x =>
  new Promise(res => {
    log(x)
    res(x + 2)
  }).then(log)

log(1)
timeout(2)
promise(3)
otherPromise(4)
log(5)
