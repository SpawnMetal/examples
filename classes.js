var box;

window.onload = () =>
{
    const box1 = document.createElement('div')
    box1.setAttribute('id', 'box1')
    document.body.appendChild(box1)

    const circle1 = document.createElement('div')
    circle1.setAttribute('id', 'circle1')
    document.body.appendChild(circle1)

    box = new Box
    ({
        selector: '#box1',
        size: 100,
        color: 'red'
    })

    const circle = new Circle
    ({
        selector: '#circle1',
        size: 90,
        color: 'green'
    })
}

class Component
{
    constructor(selector)
    {
        this.$el = document.querySelector(selector)
    }

    hide()
    {
        this.$el.style.display = 'none'
    }

    show()
    {
        this.$el.style.display = 'block'
    }
}

class Box extends Component
{
    constructor(options)
    {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px' 
        this.$el.style.background = options.color
    }
}

class Circle extends Box
{
    constructor(options)
    {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}