const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//middlwares
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/encrypt', function(req, res){
    res.sendFile(__dirname + '/views/encrypt.html');
});

app.get('/decrypt', function(req, res){
    res.sendFile(__dirname + '/views/decrypt.html');
});

server = app.listen(3000);

const io = require("socket.io")(server);


const nem = require("nem-sdk").default;
var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);
console.log(endpoint);

io.on('connection', (socket) => {
	console.log('New user connected')


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

    socket.on('encrypt', (data) => {
        var private_key = data.private_key;
        var public_key = data.public_key;
        var message = data.message;

        //time to encrypt.
        console.log(private_key);
        console.log(public_key);
        console.log(message);
        var encrypted_message = nem.crypto.helpers.encode(private_key, public_key, message);
        console.log(encrypted_message);
    })

    socket.on('decrypt', (data) => {
        var private_key = data.private_key;
        var public_key = data.public_key;
        var message = data.message;

        //time to encrypt.

        var decrypted_message = nem.crypto.helpers.decode(private_key, public_key, message);
        console.log(hex_to_ascii(decrypted_message));
    })


})

function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }
