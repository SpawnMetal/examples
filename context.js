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

// //#region ExamplesNew
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
// //#endregion ExamplesNew

//#region ContextNewExample
function f() {
  console.log('f', this)
}

const f2 = () => console.log('f2', this)

const person = {
  name: 'Elena',
  age: 20,
  f,
  f2,
  f3: function () {
    return () => console.log('f3', this)
  },
  f4: () => console.log('f4', this),
  delayLog: function () {
    setTimeout(() => {
      console.log('setTimeout', this.name + ' ' + this.age)
    }, 500)
  },
}

const foo = person.f
foo() // this = root
f() // this = root
f.call(person) // this = person
person.f() // this = person
person.f3()() // this = person
f2() // this = {}
f2.call(person) // this = {}
person.f2() // this = {}
person.f4() // this = {}
person.delayLog() // Elena 20
//#endregion ContextNewExample
