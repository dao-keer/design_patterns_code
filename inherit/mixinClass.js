function copyMethodByName (receivingClass, givingClass, menthodName) {
    if (receivingClass.prototype[menthodName]) {
        console.log(`receivingClass.prototype has the same method named as ${menthodName}`)
    }
    else {
        receivingClass.prototype[menthodName] = givingClass.prototype[menthodName]
    }
}
// 这种方法混入的方法，会在遍历对象属性时被打印
function augment (receivingClass, givingClass, ...menthods) {
    if (menthods.length) {
        menthods.forEach((item) => {
            copyMethodByName(receivingClass, givingClass, item)
        })
    }
    else {
        for(item in givingClass.prototype) {
            copyMethodByName(receivingClass, givingClass, item)
        }
    }
}

function Mixin () {}
Mixin.prototype = {
    serialize: function () {
        var output = []
        for (key in this) {
            output.push(key + ':' + this[key])
        }
        return output.join(', ')
    }
}

class Human {
    constructor (name) {
        this.name = name
    }
    getName () {
        return this.name
    }
}

class Author extends Human {
    constructor (name, books) {
        super(name)
        this.books = books
    }
    getBooks () {
        return this.books
    }
}

augment(Author, Mixin)

var au = new Author('dao-keer', ['wait for me', 'i am here'])
console.log(au.serialize())