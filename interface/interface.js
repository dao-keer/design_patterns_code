class Interface {
    constructor (name, methods) {
        if (arguments.length !== 2) {
            throw new Error('Interface constructor need two params, but called with ' + arguments.length + ' params')
        }
        this.name = name
        if (!Array.isArray(methods)) {
            throw new Error('Interface constructor second param should be Array')
        }
        this.methods = methods.map((item, index) => {
            if (typeof item !== 'string') {
                throw new Error('Interface constructor expects method to be string at index ' + index)
            }
            return item
        })
    }

    static ensureImplements (originObj, ...interfaceList) {
        if (arguments.length < 2) {
            throw new Error('Interface.ensureImplements should be called with two params at least')
        }
        if (!originObj) {
            throw new Error("Interface.ensureImplements's first param should not be undefined")
        }
        interfaceList.forEach((item, index) => {
            if (item.constructor !== Interface) {
                throw new Error('Function Interface.ensureImplements: called by the param should be instanceof Interface')
            }
            item.methods.forEach((method, index) => {
                if (!originObj[method] || typeof originObj[method] !== 'function') {
                    throw new Error('Function Interface.ensureImplements: ' + method + ' method did not implemente in the test object')
                }
            })
        })
        console.log('all interfaces has been implemented')
    }
}
// 
var DynamicMap = new Interface('test1', ['add', 'multiply', 'divide'])

class TestClass {
    static add (x, y) {
        return x + y
    }
    static divide (x, y) {
        return x / y
    }
    static multiply (x, y) {
        return x * y
    }
}

function test (originObj) { // implements test
    Interface.ensureImplements(originObj, DynamicMap)
}

test(TestClass)

module.exports = Interface