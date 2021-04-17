// MVC

class Model
{
    constructor(value = 0)
    {
        this.value = value
    }

    increment()
    {
        this.value++
    }
}

class View
{
    constructor(modelObj)
    {
        this.modelObj = modelObj

        let btn = document.querySelector('#btn')
        
        if(!btn)
        {
            btn = document.createElement('button')
            btn.setAttribute('id', 'btn')
            document.querySelector('body').appendChild(btn)
            this.btnUpdate()
        }
    }

    btnUpdate()
    {
        document.querySelector('#btn').innerHTML = this.modelObj.value
    }
}

class Controller
{
    constructor(modelObj, viewObj)
    {
        this.modelObj = modelObj
        this.viewObj = viewObj

        let btn = document.querySelector('#btn')
        btn.onclick = () => this.btnClick()
    }

    btnClick()
    {
        this.modelObj.increment()
        this.viewObj.btnUpdate()
    }
}

window.onload = function()
{
    const model = new Model()
    const view = new View(model)
    const controller = new Controller(model, view)
}