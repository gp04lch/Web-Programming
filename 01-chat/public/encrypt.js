$(function(){
  var socket = io.connect('http://localhost:3000');
	//buttons and inputs
	//var private_key = $("#private_key");
	//var public_key = $("#public_key");
  var private_key = "c7b865a2637a40a49f576c06d74188392d50fe4e0b78da99aca0880a4a08d467";
  var public_key = "b0a9536b44d89f2e9ed186768c683b17f208d4c8013e7f75d130b79eee811ee2";
  var message = $("#message");
  //message = "test";

  var encrypt_message = $("#encrypt_message");

  encrypt_message.click(function(){
    console.log(private_key);
    console.log(public_key);
    console.log(message.val());
    socket.emit('encrypt', {private_key : private_key, public_key : public_key, message : message.val()});
	})
});
