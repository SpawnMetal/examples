const Animal = function(options)
{
    this.name = options.name
    this.color = options.color

    // this.voice = function() //Если объявить здесь, то мы не можем в дальнейшем поменять функцию
    // {
    //     console.log('Base voice from', this.name)
    // }
}

Animal.prototype.voice = function() //Раньше было так. Добавит прототипу метод
{
    console.log('Base voice from ', this.name)
}

// console.log(Animal.prototype)

const dog = new Animal({name: 'Rex', color: '#fff'})

// dog.voice()

const Cat = function(options) //Можно ...args
{
    Animal.apply(this, arguments) //Можно args
    this.hasTail = options.hasTail
}

Cat.prototype = Object.create(Animal.prototype) //create принимает прототим. Наследуем прототип родителя
Cat.prototype.constructor = Cat

Animal.prototype.voice = function() //Раньше было так. Добавит прототипу метод
{
    console.log('This sound goes from', this.name)
}

Cat.prototype.voice = function() //Раньше было так. Добавит прототипу метод
{
    Animal.prototype.voice.apply(this, arguments)
    console.log(this.name, 'says mey')
}

const cat = new Cat({name: 'Murzik', color: '#000', hasTail: true})

console.log(cat)