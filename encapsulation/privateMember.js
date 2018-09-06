class Book {
    constructor (ISNO, name, author) {
        this.setISNO(ISNO)
        this.setName(name)
        this.setAuthor(author)
    }

    setISNO (ISNO) {
        if (this.checkISNO(ISNO)) {
            this._ISNO = ISNO            
        }
    }
    getISNO () {
        return this._ISNO
    }
    setName (name) {
        this._name = name
    }
    getName () {
        return this._name
    }
    setAuthor (author) {
        this._author = author
    }
    getAuthor () {
        return this._author
    }
    checkISNO (ISNO) {
        if (ISNO) {
            return true
        }
        else {
            return false
        }
    }
    displayBook () {
        console.log(`the book ISNO is ${this.getISNO()}, the book name is ${this.getName()}, the author is ${this.getAuthor()}`)
    }
}

var books = new Book(1, 'javascript', 'zmr')
books.displayBook()
console.log(books._name)

function BookPrivate () {
    var ISNO, name, author

    this.setISNO(ISNO)
    this.setName(name)
    this.setAuthor(author)
    
    this.setISNO = function (ISNO) {
        if (this.checkISNO(ISNO)) {
            ISNO = ISNO            
        }
    }
    this.getISNO = function () {
        return ISNO
    }
    this.setName = function (name) {
        name = name
    }
    this.getName = function () {
        return name
    }
    this.setAuthor = function (author) {
        author = author
    }
    this.getAuthor = function () {
        return author
    }
    this.checkISNO = function (ISNO) {
        if (ISNO) {
            return true
        }
        else {
            return false
        }
    }
    this.displayBook = function () {
        console.log(`the book ISNO is ${this.getISNO()}, the book name is ${this.getName()}, the author is ${this.getAuthor()}`)
    }
}
var booksPrivate = new Book(1, 'javascript', 'zmr')
booksPrivate.displayBook()
console.log(booksPrivate.name)