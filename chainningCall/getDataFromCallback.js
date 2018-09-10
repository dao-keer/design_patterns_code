window.API = window.API || function () {
    var name = 'window'
    this.setName = function (newName) {
        name = newName
        return this
    }
    this.getName = function () {
        return name
    }
}

var test1 = new API()
console.log(test1.setName('dao-keer').getName())

window.API2 = window.API || function () {
    var name = 'window'
    this.setName = function (newName) {
        name = newName
        return this
    }
    this.getName = function (func) {
        func.call(this, name)
        return this
    }
}

var test2 = new API2()
var nameRes
test2.getName(function(name){ console.log(name) }).setName('dao-keer').getName(function(name){ nameRes = name })
console.log(nameRes)