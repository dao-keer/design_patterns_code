var daoKeer = {}
daoKeer.dataParser = (function () {
    var whiteSpaceExp = /\s+/g
    function tripWhiteSpaceFunc (str) {
        return str.replace(whiteSpaceExp, '')
    }
    function stringSplit(str, delimiter) {
        return str.split(delimiter)
    }
    return {
        stringToArray: function (str, delimiter, tripWhiteSpace) {
            if (tripWhiteSpace) {
                str = tripWhiteSpaceFunc(str)
            }
            return stringSplit(str, delimiter)
        }
    }
})()

var res = daoKeer.dataParser.stringToArray('a,       b,c,       d', ',', true)
console.log(res)
