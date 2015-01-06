var express = require('express');
var socket = require('socket.io');

// Создаем сервер
var app = express();
var io = socket.listen(app.listen(3000));
// Инициализируем движок
app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));
// Обработка обращения к корню сервера
app.get('/', function (req, res) {
	res.render('page.jade');
});

// Обработчик для сокета
io.sockets
	.on('connection', function(cli){
		cli.emit('message', {message: 'Добро пожаловать в чат!'})
		cli.on('send', function(data){
			io.sockets.emit('message', {message:data.message})
		})
	});