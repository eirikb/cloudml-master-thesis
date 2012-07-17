sync = (function() {
    var script, url, socket, self;

    self = {};
    url = queryString('sync');

    if (!url) url = window.location.host;
    else if (url.match(/^\:/)) url = 'localhost' + url;

    url = 'http://' + url;

    script = document.createElement('script');
    script.src = url + '/socket.io/socket.io.js';

    script.onload = function() {
        socket = io.connect(url);

        socket.on('goto', function(hash) {
            slidehack.go(hash);
        });

        socket.on('showNotes', function() {
            slideack.showNotes();
        });

        socket.on('buildNext', function(i) {
        console.log('wat')
            slidehack._slides[i].buildNext();
        });
    };

    document.head.appendChild(script);

    self.emit = function(name, data) {
        socket && socket.emit('command', {
            name: name,
            data: data
        });
    };

    function queryString(name) {
        return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(name).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

    return self;
})();

