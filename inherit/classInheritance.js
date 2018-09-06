class Person {
    constructor (name) {
        this.name = name
    }
    getName () {
        return this.name
    }
}

class Children extends Person{
    constructor (name, age) {
        super(name)
        this.age = age
    }
    getAge () {
        return this.age > 18 ? 18 : this.age
    }
}

var child1 = new Children('alice', 12)
var child2 = new Children('lily', 22)
console.log(child1.getName())
console.log(child1.getAge())
console.log(child2.getName())
console.log(child2.getAge())
console.log(Children)
console.log(child1.constructor)

function Human (name) {
    this.name = name
}

Human.prototype.getName = function () {
    return this.name
}

function Man (name, age) {
    Human.call(this, name)
    this.age = age
}

Man.prototype = new Human()

Man.prototype.getAge = function () {
    return this.age
}

var man = new Man('bob', 25)
console.log(Man)
console.log(Man.prototype.constructor)
console.log(man.getName())

Man.prototype.constructor = Man
console.log(Man.prototype.constructor)
