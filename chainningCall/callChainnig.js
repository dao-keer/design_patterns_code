function _$ (args) {
    this.elements = []
    for (var i = 0, len = args.length; i < len; i++) {
        this.elements.push(document.getElementById(args[i]))
    }
}

_$.method = function (name, func) {
    this.prototype[name] = func
    return this
}

_$.method('each', function (func) {
    for (var i = 0, len = this.elements.length; i < len; i++) {
        func.call(this, this.elements[i], i)
    }
    return this
})

_$.method('setStyle', function(style, value){
    this.each((item, index) => {
        item.style[style] = value
    })
    return this
})

_$.method('show', function() {
    this.setStyle('display', 'block')
})

_$.method('hide', function() {
    this.setStyle('display', 'none')
})

_$.method('addEvent', function(name, func) {
    this.each(function(item, index){
        if (window.addEventListener) {
            item.addEventListener(name, func, false)
        }
        else if (window.attachEvent) {
            item.attachEvent('on' + name, func)
        }
    })
})

window.installer = function (scope, name) {
    scope[name] = function () {
        return new _$(arguments)
    }
}

