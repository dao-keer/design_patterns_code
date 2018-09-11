class XHR {
    constructor () {}
    createXhrObject () {
        var xhr
        var methods = [
            function () { return new XMLHttpRequest() },
            function () { return new ActiveXObject() },
            function () { return new ActiveXObject('Microsoft.XMLHTTP') }
        ]
        for(var i = 0, len = methods.length; i < len; i++) {
            try {
                xhr = methods[i]()
            }
            catch(e) {
                continue
            }
            this.createXhrObject = methods[i]
            return xhr
        }
        throw new Error('does not support xhr')
    }
    request (method, url, callbacks, params) {
        var xhr = this.createXhrObject()
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return
            }
            if (xhr.status === 200) {
                callbacks.success.call(xhr.responseText, xhr.reponseXml)
            }
            else {
                callbacks.failure.call(xhr.status)
            }
        }
        xhr.open(method, url, true)
        xhr.send(method === 'get' ? null : params)
    }
}

var callbacks = {
    success: function (data) {
        console.log('success')
        console.log(data)
    },
    failure: function (err) {
        console.log(err)
    }
}
new XHR().request('get', 'https://www.apiopen.top/weatherApi?city=武汉', callbacks)