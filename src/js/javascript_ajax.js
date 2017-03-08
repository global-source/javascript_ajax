// Simple Ajax Object
var ajax = {
    x:function () {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
        
        // Various Http Versions.
    var versions = [
        "MSXML2.XmlHttp.6.0",
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];

        // Ajax Instance.
    var xhr;
    for (var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {
        }
    }
    return xhr;
   },

    // Init Sending Process.
  send:function (url, callback, method, data, async) {
    if (async === undefined) {
        async = true;
    }
    var x = this.x();
    x.open(method, url, async);
    x.onreadystatechange = function () {
        if (x.readyState == 4) {
            callback(x.responseText)
        }
    };
    if (method == 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    x.send(data)
},

   // For GET Request.
  get:function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    this.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
},

   // For POST Request.
   post:function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    this.send(url, callback, 'POST', query.join('&'), async)
   },
    
    // For CROS-Domain : JSONP Request.
   jsonp: function (url) {
        url = url + '?callback=my_callback_method';
        var script = document.createElement('script');
        script.src = url;

        document.getElementsByTagName('head')[0].appendChild(script);
    }

};
