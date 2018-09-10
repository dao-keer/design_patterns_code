const Interface = require('../interface/interface.js')
const extend = require('../inherit/extends.js')
const Bicycle = new Interface('Bicycle', ['assemble', 'wash', 'repair', 'ride'])

class Speedster {
    constructor () {
        this.name = 'the speedster'
    }
    assemble () {
        console.log(`assemble ${this.name} bicycle`)
    }
    wash () {
        console.log(`wash ${this.name} bicycle`)
    }
    repair () {
        console.log(`repair ${this.name} bicycle`)
    }
    ride () {
        console.log(`ride ${this.name} bicycle`)
    }
}

class Lowrider {
    constructor () {
        this.name = 'the lowrider'
    }
    assemble () {
        console.log(`assemble ${this.name} bicycle`)
    }
    wash () {
        console.log(`wash ${this.name} bicycle`)
    }
    repair () {
        console.log(`repair ${this.name} bicycle`)
    }
    ride () {
        console.log(`ride ${this.name} bicycle`)
    }
}

class ComfortCruiser {
    constructor () {
        this.name = 'the comfortCruiser'
    }
    assemble () {
        console.log(`assemble ${this.name} bicycle`)
    }
    wash () {
        console.log(`wash ${this.name} bicycle`)
    }
    repair () {
        console.log(`repair ${this.name} bicycle`)
    }
    ride () {
        console.log(`ride ${this.name} bicycle`)
    }
}

/* bicycleShop class */
class BicyCleShop {
    constructor () {}
    sellBicycle (model) {
        var bicycle = this.createBicycle(model)
        bicycle.assemble()
        bicycle.wash()
        return bicycle
    }
    createBicycle (model) {
        throw new Error('this is a abstract class')
    }
}

function AFactory () {}
extend(AFactory, BicyCleShop)
AFactory.prototype.createBicycle = function (model) {
    var bicycle
    switch(model){
        case 'The Speedster':
            bicycle = new Speedster()
            break
        case 'The Lowrider':
            bicycle = new Lowrider()
            break
        case 'The comfort Cruiser':
        default:
            bicycle = new ComfortCruiser()
            break
    }
    Interface.ensureImplements(bicycle, Bicycle)
    return bicycle
}

function BFactory () {}
extend(BFactory, BicyCleShop)
BFactory.prototype.createBicycle = function (model) {
    var bicycle
    switch(model){
        case 'The Speedster':
            bicycle = new Speedster()
            break
        case 'The Lowrider':
            bicycle = new Lowrider()
            break
        case 'The comfort Cruiser':
        default:
            bicycle = new ComfortCruiser()
            break
    }
    Interface.ensureImplements(bicycle, Bicycle)
    return bicycle
}

var wuhanBicycleShop = new AFactory()
console.dir(AFactory)
var newBike = wuhanBicycleShop.sellBicycle('The Speedster')
console.log(newBike)