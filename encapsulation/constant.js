var Book = (function(){
    var instanceConstant = {
        NUMBER: 0
    }
    function checkISNO(ISNO) {
        if (ISNO) {
            return true
        }
        else {
            return false
        }
    }
    var Book = function(inISNO, inName, inAuthor){
        var ISNO, name, author

        this.setISNO = function (inISNO) {
            if (checkISNO(inISNO)) {
                ISNO = inISNO            
            }
        }
        this.getISNO = function () {
            return ISNO
        }
        this.setName = function (inName) {
            name = inName
        }
        this.getName = function () {
            return name
        }
        this.setAuthor = function (inAuthor) {
            author = inAuthor
        }
        this.getAuthor = function () {
            return author
        }

        instanceConstant.NUMBER++

        this.setISNO(inISNO)
        this.setName(inName)
        this.setAuthor(inAuthor)
    }
    Book.prototype.displayBook = function () {
        console.log(`the book ISNO is ${this.getISNO()}, the book name is ${this.getName()}, the author is ${this.getAuthor()}`)
    }
    Book.getInstanceNumber = function (name) {
        return instanceConstant[name]
    }
    return Book
})()

var book1 = new Book(1, "java", 'cyz')
book1.displayBook()
console.log(Book.getInstanceNumber('NUMBER'))

var book2 = new Book(2, "javascript", 'cyz')
book2.displayBook()
console.log(Book.getInstanceNumber('NUMBER'))