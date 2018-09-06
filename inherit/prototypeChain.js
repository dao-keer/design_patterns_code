const clone = require('./clone.js')

var Person = {
    name: 'default name',
    books: [],
    getName: function () {
        return this.name
    },
    getBooks: function () {
        return this.books
    }
}

var p1 = clone(Person)
var p2 = clone(Person)
console.log(p1.getBooks())
console.log(p1.getName())
p1.name = 'dao-keer'
p1.books.push('javascript')
console.log(p1.getBooks())
console.log(p1.getName())
p1.books.push('java')
console.log(p2.getBooks())
console.log(p2.getName())
console.log(p1.getBooks())