var express = require('express'),
    socket = require('socket.io');

var app = module.exports = express.createServer(),
    io = socket.listen(app),
    port = 3000;

if (process.argv.length > 2) port = parseInt(process.argv[2], 10);

io.sockets.on('connection', function(socket) {
    socket.on('command', function(command) {
        socket.broadcast.emit(command.name, command.data);
    });
});

app.configure(function() {
    app.set('views', __dirname);
    app.set('view engine', 'jade');
    app.set('view options', {
        layout: false
    });
    app.use(express.static(__dirname));
});

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);