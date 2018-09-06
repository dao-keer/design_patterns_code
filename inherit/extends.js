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
    // 组合继承模式，先调用父类的构造函数，初始化父类里的实例属性
    Man.superClass.constructor.call(this, name)
    this.age = age
}

// 继承父类的prototype对象里的方法
extend(Man, Human)

Man.prototype.getAge = function () {
    return this.age
}

var man = new Man('bob', 25)
console.log(Man)
console.log(Man.superClass)
console.log(man)
console.log(man.getName())