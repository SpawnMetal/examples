import TestClass from './TestClass.js'

const testClass = new TestClass()

const messagesProxy = new Proxy(testClass.messages, {
  get(target, prop, receiver) {
    console.log('messagesProxy get prop', prop)
    if (prop === 'push') {
      return function (...args) {
        console.log('Вызван метод push у переменной messages')
        return target[prop].apply(target, args)
      }
    }

    return Reflect.get(target, prop, receiver)
  },
})

const testClassProxy = new Proxy(testClass, {
  set(target, prop, value) {
    console.log('set prop', prop)
    console.log('set value', value)
    if (prop === 'count') console.log('Были внесены изменения в переменную count')
    return Reflect.set(target, prop, value)
  },

  get(target, prop) {
    console.log('get prop', prop)
    if (prop === 'messages') return messagesProxy

    return Reflect.get(target, prop)
  },
})

export default testClassProxy
