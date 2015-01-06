var express = require('express');
var socket = require('socket.io');

// Создаем сервер
var app = express();
var io = socket.listen(app.listen(3000));
// Инициализируем движок
app.set('views', __dirname+'/templates');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

// Обработка обращения к корню сервера
app.get('/', function(req, res){
	res.render('page.jade');
});

// Обработчик для сокета
io.sockets
	.on('connection', function(cli){
		console.log(alala);
	});