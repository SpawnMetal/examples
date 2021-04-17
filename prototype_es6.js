// Результат тот же, что и в prototype_es5, но использованы классы es6

class Animal
{
    constructor(options)
    {
        this.name = options.name
        this.color = options.color
    }

    voice()
    {
        console.log('Base voice from', this.name)
    }
}

const dog = new Animal({name: 'Rex', color: '#fff'})
dog.voice() //1

class Cat extends Animal
{
    constructor(options)
    {
        super(options) //Вызов конструктора родителя

        this.name = options.name
        this.color = options.color
        this.hasTail = true
    }

    voice()
    {
        super.voice() //2-1
        console.log(this.name, 'says mey') //2-2
    }
}

const cat = new Cat({name: 'Murzik', color: '#000'})
cat.voice() //2

// Examples

Object.prototype.print = function() //Добавили всем объектам функцию
{
    console.log('I am object', this)
}

cat.print()

Array.prototype.mapAndLog = function()
{
    console.log('Array to map', this)
    return this.map.apply(this, arguments)
}

console.log([1, 2, 3, 4].mapAndLog(x => x ** 2))

String.prototype.toTag = function(tagName)
{
    return `<${tagName}>${this}</${tagName}>`
}

console.log('eminem'.toTag('strong'))

Number.prototype.toBigInt = function()
{
    return BigInt(this)
}

const number = 42
console.log(number.toBigInt())