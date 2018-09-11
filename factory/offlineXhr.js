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

class OfflineXhr extends XHR {
    constructor () {
        super()
        this.storedRequest = []
        this.isOffline = true
    }
    request (method, url, callbacks, params) {
        if (this.isOffline) {
            this.storedRequest.push({
                method: method,
                url: url,
                callbacks: callbacks,
                params: params
            })
        }
        else {
            this.xhr(method, url, callbacks, params)
        }
    }
    xhr (method, url, callbacks, params) {
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
    flushStoredRequest () {
        this.storedRequest.forEach((item) => {
            this.xhr(item.method, item.url, item.callbacks, item.params)
        })
    }
}

var xhr = new OfflineXhr()
var callbacks = {
    success: function (data) {
        console.log('success')
        console.log(data)
    },
    failure: function (err) {
        console.log(err)
    }
}
xhr.request('get', 'https://www.apiopen.top/weatherApi?city=武汉', callbacks)
xhr.request('get', 'https://www.apiopen.top/weatherApi?city=荆门', callbacks)
xhr.request('get', 'https://www.apiopen.top/weatherApi?city=沙洋', callbacks)
xhr.request('get', 'https://www.apiopen.top/weatherApi?city=舟山', callbacks)
xhr.isOffline = false
xhr.flushStoredRequest()
xhr.request('get', 'https://www.apiopen.top/weatherApi?city=厦门', callbacks)
xhr.request('get', 'https://www.apiopen.top/weatherApi?city=云南', callbacks)
xhr.request('get', 'https://www.apiopen.top/weatherApi?city=神农架', callbacks)
xhr.request('get', 'https://www.apiopen.top/weatherApi?city=西藏', callbacks)