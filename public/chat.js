window.onload = function(){
	var socket = io.connect('http://192.168.0.102:3000');
	var messages = [];
	var form = document.getElementById('form'),
		field = document.getElementById('field'),
		content = document.getElementById('content');
	socket.on('message', function(data){
		if (data.message) {
			messages.push(data.message);
			var html = '';
			for (var i = messages.length - 1; i >= 0; i--) {
				html += messages[i]+'<br/>';
			};
			content.innerHTML = html;
		}else{
			console.log('Something wrong');
		};

	});

	form.onsubmit =function(){
		var text = field.value;
		socket.emit('send', {message: text});
		return false;
	}

}