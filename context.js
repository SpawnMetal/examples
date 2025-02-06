// https://learn.javascript.ru/bind

//#region Context
// class Context
// {
//     constructor()
//     {
//         this.id = 1
//         this.name = 'Context'
//         this.text = 'example'
//     }

//     getContext(options)
//     {
//         return {
//             id: this.id,
//             name: this.name,
//             text: this.text,
//             options: options
//         }
//     }
// }

// class Apply
// {
//     constructor()
//     {
//         this.id = 2
//         this.name = 'Apply'
//         this.text = 'apply'
//     }

//     getContext(...options)
//     {
//         return {
//             id: this.id,
//             name: this.name,
//             text: this.text,
//             options: options
//         }
//     }
// }

// class Call
// {
//     constructor()
//     {
//         this.id = 3
//         this.name = 'Call'
//         this.text = 'call'
//     }

//     getContext(...options)
//     {
//         return {
//             id: this.id,
//             name: this.name,
//             text: this.text,
//             options: options
//         }
//     }
// }

// class Bind
// {
//     constructor()
//     {
//         this.id = 4
//         this.name = 'Bind'
//         this.text = 'bind'
//     }

//     getContext(...options)
//     {
//         return {
//             id: this.id,
//             name: this.name,
//             text: this.text,
//             options: options
//         }
//     }
// }

// let context = new Context()
// console.log('Context', context.getContext())

// const apply = new Apply()
// console.log('Apply', apply.getContext())
// console.log('apply(context)', apply.getContext.apply(context, ['op1', 'op2', 'op3'])) //Подаётся массив аргументов

// const call = new Call()
// console.log('Call', call.getContext())
// console.log('call(context)', call.getContext.call(context, 'op1', 'op2', 'op3')) //Подаются аргументы через запятую

// const bind = new Bind()
// console.log('Bind', bind.getContext())
// console.log('bind(context)', bind.getContext.bind(context, 'op1', 'op2', 'op3'))
// const bindFunction = bind.getContext.bind(context, 'op1', 'op2', 'op3'); //Создаётся функция, которая в дальнейшем может быть вызвана
// console.log('bind(context)', bindFunction())
//#endregion Context

//#region Examples
// function f() {
//     alert( this ); // ?
//   }

//   let user = {
//     g: f.bind(null)
//   };

//   user.g();
////Ответ: Object Window хотя на хабре написано, что null
// function f() {
//     alert(this.name);
//   }

//   f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

//   f();
// Экзотический объект bound function, возвращаемый при первом вызове f.bind(...), запоминает контекст (и аргументы, если они были переданы) только во время создания.
// Следующий вызов bind будет устанавливать контекст уже для этого объекта. Это ни на что не повлияет.
// Можно сделать новую привязку, но нельзя изменить существующую.
////
// function sayHi() {
//     alert( this.name );
//   }
//   sayHi.test = 5;
// alert( sayHi.test );

//   let bound = sayHi.bind({
//     name: "Вася"
//   });

//   alert( bound.test ); // что выведет? почему?

//   Ответ: undefined.
// Результатом работы bind является другой объект. У него уже нет свойства test.
////
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }

//   let user = {
//     name: 'Вася',

//     loginOk() {
//       alert(`${this.name} logged in`);
//     },

//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },

//   };

//   askPassword(user.loginOk, user.loginFail);
////Ответ:
////askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
////
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }

//   let user = {
//     name: 'John',

//     login(result) {
//       alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
//   };

//   askPassword(?, ?); // ?
////Ответ:
////askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
//#endregion Examples

// ===================================================== //
// const obj = {
//   par: 1,
//   fun: function () {
//     return this
//   },
//   obj1: {
//     par: 2,
//     fun: function () {
//       return this
//     },
//   },
// }

// const objFun = obj.fun

// console.log(obj.fun())
// console.log(objFun())
// console.log(obj.obj1.fun())

// ===================================================== //
// let baz = 0

// let foo = {
//   bar1: function () {
//     return this?.baz
//   },
//   bar2: () => this?.baz,
//   baz: 1,
// }

// let fooCopy = {
//   bar1: foo.bar1,
//   bar2: foo.bar2,
//   baz: 2,
// }

// let bazzzz = foo.bar1

// console.log(fooCopy.bar1()) // 2
// console.log(fooCopy.bar2()) // undefined
// console.log(bazzzz()) // undefined

// ===================================================== //
// function f() {
//   console.log('f', this)
// }

// const f2 = () => console.log('f2', this)

// const person = {
//   name: 'Elena',
//   age: 20,
//   f,
//   f2,
//   f3: function () {
//     return () => console.log('f3', this)
//   },
//   f4: () => console.log('f4', this),
//   delayLog: function () {
//     setTimeout(() => {
//       console.log('setTimeout', this.name + ' ' + this.age)
//     }, 500)
//   },
// }

// const foo = person.f
// const f3 = person.f3()
// foo() // this = undefined в strict иначе root
// f() // this = undefined в strict иначе root
// f.call(person) // this = person
// person.f() // this = person
// person.f3()() // this = person // Замыкание контекста
// f3() // this = person // Замыкание контекста
// f2() // this = undefined в strict иначе {}
// f2.call(person) // this = undefined в strict иначе {}
// person.f2() // this = undefined в strict иначе {}
// person.f4() // this = undefined в strict иначе {}
// person.delayLog() // Elena 20

// const userService = {
//   currentFilter: 'active',
//   users: [
//     {name: 'Alex', status: 'active'},
//     {name: 'Nick', status: 'deleted'},
//   ],
//   getFilteredUsers: function () {
//     return this.users.filter(function (user) {
//       return user.status === this?.currentFilter
//     })
//   },
//   // Solution 1
//   getFilteredUsers2: function () {
//     return this.users.filter(
//       function (user) {
//         return user.status === this.currentFilter
//       }.bind(this)
//     )
//   },
//   // Solution 2
//   getFilteredUsers3: function () {
//     return this.users.filter(user => {
//       return user.status === this.currentFilter
//     })
//   },
// }

// console.log(userService.getFilteredUsers()) // []
// console.log(userService.getFilteredUsers2()) // [ { name: 'Alex', status: 'active' } ]
// console.log(userService.getFilteredUsers3()) // [ { name: 'Alex', status: 'active' } ]

// ===================================================== //
// function foo() {
//   const x = 10

//   return {
//     x: 20,
//     bar: () => {
//       console.log(this?.x)
//     },
//     baz: function () {
//       console.log(this?.x)
//     },
//   }
// }

// // Функция вызывается без передачи контекста, значит это Глобальная Область, в строгом режиме она = undefined
// const obj1 = foo() // ГО.this = undefined
// // Стрелочная функция не имеет контекст, а foo вызвана без него, поэтому в стрелочной функции this = foo.this = ГО.this = undefined
// obj1.bar() // ГО.this = undefined
// // Функция вызвана с контекстом obj, значит this = obj
// obj1.baz() // obj1.this.x = 20

// // foo была вызвана с this = {x: 30}
// const obj2 = foo.call({x: 30}) // foo.this = {x: 30}

// // Стрелочная функция не имеет контекст, а foo вызвана с контекстом, поэтому в стрелочной функции this = foo.this = {x: 30}
// obj2.bar() // foo.this.x = 30
// // Функция была вызвана с контекстом obj2, значит this = obj2
// obj2.baz() // obj2.this.x = 20

// let y = obj2.bar
// let z = obj2.baz
// // Стрелочная функция не имеет контекст, а foo вызвана с контекстом, поэтому в стрелочной функции this = foo.this = {x: 30}
// y() // foo.this.x = 30
// // Функция была вызвана с контекстом из ГО, так как у function есть контекст и он должен быть чётко обозначен
// z() // ГО.this = undefined

// ===================================================== //
// Замыкание контекста

// const obj = {
//   number: 10,
//   display: function () {
//     return () => {
//       console.log(this?.number)
//     }
//   },
// }
// const func = obj.display()
// func() // 10. Т. к. display была вызвана с контекстом, а стрелочная функция его не имеет, то она берёт родительский контекст. Если бы return был function, то контекст был бы утерян

// ===================================================== //
// Замыкание контекста

// const obj = {
//   value: 'orange',
//   getValue() {
//     return () => this.value
//   },
// }

// const func = obj.getValue()
// console.log(func()) // orange

// ===================================================== //
/* Потеря контекста через callback
Это равносильно следующему коду:
function foo(callback) {
  callback() // На этом этапе контекст был утерян
}
*/

// const obj = {
//   name: 'Ivy',
//   logName() {
//     console.log(this?.name)
//   },
// }

// setTimeout(obj.logName, 1000) // undefined

// ===================================================== //
// Наследование контекста

// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//   speak() {
//     console.log(`${this.name} makes a noise.`)
//   }
// }

// class Dog extends Animal {
//   speak() {
//     super.speak()
//     console.log(`${this.name} barks.`)
//   }
// }

// const dog = new Dog('Buddy')
// dog.speak()
// // Buddy makes a noise.
// // Buddy barks.

// ===================================================== //
// const shape = {
//   radius: 10,
//   diameter() {
//     return this?.radius * 2
//   },
//   perimeter: () => 2 * this?.radius,
// }

// console.log(shape.diameter()) // 20
// console.log(shape.perimeter()) // undefined * 2 = NaN

// ===================================================== //
// class Foo {
//   constructor() {
//     this.id = 'foo'
//     this.print()
//   }

//   print() {
//     console.log('foo ' + this.id)
//   }
// }

// class Bar extends Foo {
//   constructor() {
//     super()
//     this.id = 'bar'
//     this.print()
//     super.print()
//   }
//   print() {
//     console.log('bar ' + this.id)
//   }
// }

// new Bar()

// bar foo
// bar bar
// foo bar

// ===================================================== //
// Потеря контекста
// Вследствие использования function в setTimeout, у которой свой контекст

// const obj = {
//   a: 40,
//   say: function () {
//     setTimeout(function () {
//       console.log(this.a)
//     })
//   },
// }

// // Solution 1
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

// // Solution 2
// const obj = {
//   a: 40,
//   say: function () {
//     setTimeout(() => {
//       console.log(this.a)
//     })
//   },
// }

// obj.say()

// ===================================================== //
