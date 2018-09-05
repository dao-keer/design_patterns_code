function extend (subClass, superClass) {
    function F () {}
    subClass.superClass = F.prototype = superClass.prototype
    subClass.prototype = new F()
    subClass.prototype.constructor = subClass
    if (superClass.prototype.constructor === Object.prototype.constructor) {
        superClass.prototype.constructor = superClass
    }
}

function Human (name) {
    this.name = name
}

Human.prototype.getName = function () {
    return this.name
}

function Man (name, age) {
    Man.superClass.constructor.call(this, name)
    this.age = age
}

extend(Man, Human)

Man.prototype.getAge = function () {
    return this.age
}

var man = new Man('bob', 25)
console.log(Man)
console.log(Man.superClass)
console.log(man.getName())