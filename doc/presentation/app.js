var express = require('express'),
socket = require('socket.io');

var app = module.exports = express.createServer(),
io = socket.listen(app);

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

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

