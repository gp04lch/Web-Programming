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

io.on('connection', (socket)=>{
  console.log('new user connected');
});
