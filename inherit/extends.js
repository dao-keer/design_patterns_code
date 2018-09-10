function extend (subClass, superClass) {
    function F () {}
    subClass.superClass = F.prototype = superClass.prototype
    subClass.prototype = new F()
    subClass.prototype.constructor = subClass
    if (superClass.prototype.constructor === Object.prototype.constructor) {
        // 确保在调用父类构造函数时，能准确的初始化父类里的实例属性，强行扶正constructor的指向
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
    // 组合继承模式，先调用父类的构造函数，初始化父类里的实例属性
    Man.superClass.constructor.call(this, name)
    this.age = age
}

// 继承父类的prototype对象里的方法
extend(Man, Human)

Man.prototype.getAge = function () {
    return this.age
}

// 覆盖父类的函数，并取到父类的相关返回值，做二次封装
Man.prototype.getName = function () {
    var name = Man.superClass.getName.call(this)
    return `my name is ${name}` 
}

var man = new Man('bob', 25)
console.log(Man)
console.log(Man.superClass)
console.log(man)
console.log(man.getName())

module.exports = extend