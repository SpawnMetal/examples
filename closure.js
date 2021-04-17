// Замыкание
// Пример 1, простейший
function createCalc(n)
{
    return function()
    {
        console.log(n * 1000)
    }
}

let calc = createCalc(42)
calc()

// Пример 2
const obj1 = {name: 'qwe', year: '100', path: '123'}
const obj2 = {name: 'asd', year: '200', path: '456'}

function log()
{
    console.log(`Имя: ${this.name}, Год: ${this.year}, Путь: ${this.path}`)
}

function go(context, fn)
{
    return function()
    {
        fn.apply(context)
    }
}

go(obj1, log)()
go(obj2, log)()