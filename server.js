var http = require('http'),
nodeStatic = require('node-static'),
fileServer = new nodeStatic.Server('./public');

http.createServer(function(request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}).listen(9799);
