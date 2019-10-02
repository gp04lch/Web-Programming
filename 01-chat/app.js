const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//middlwares
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

server = app.listen(3000);

const io = require("socket.io")(server);

io.on('connection', (socket) => {
	console.log('New user connected')
  var address = socket.request.connection.remoteAddress;
  console.log(address);

	//default username
	socket.username = "Anonymous";

    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username;
    })

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })

    //listen on typing
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })
})
