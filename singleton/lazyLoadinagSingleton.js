var daoKeer = {}
daoKeer.dataParser = (function () {
    var whiteSpaceExp = /\s+/g
    var uniqueInstance = null
    function constructor () {
        uniqueInstance =  {
            stringToArray: function (str, delimiter, tripWhiteSpace) {
                if (tripWhiteSpace) {
                    str = tripWhiteSpaceFunc(str)
                }
                return stringSplit(str, delimiter)
            }
        }
        return uniqueInstance
    }
    function tripWhiteSpaceFunc (str) {
        return str.replace(whiteSpaceExp, '')
    }
    function stringSplit(str, delimiter) {
        return str.split(delimiter)
    }
    return {
        getInstance: function () {
            return uniqueInstance ? uniqueInstance : constructor()
        }
    }
})()

var res = daoKeer.dataParser.getInstance()
var res2 = daoKeer.dataParser.getInstance()
console.log(res.stringToArray('a,b,c, d ,   e', ',', true))
