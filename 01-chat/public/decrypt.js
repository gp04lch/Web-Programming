$(function(){
  var socket = io.connect('http://localhost:3000');
	//buttons and inputs
	//var private_key = $("#private_key");
	//var public_key = $("#public_key");
  private_key = "c7b865a2637a40a49f576c06d74188392d50fe4e0b78da99aca0880a4a08d467";
  public_key = "b0a9536b44d89f2e9ed186768c683b17f208d4c8013e7f75d130b79eee811ee2";
  //var message = $("#message");
  message = "f97e5f2032ded0955f2c76a584b5c9cd7e5215ac7f5984d63dbe5aa6e1317f84f7eb6d721a7367b569baa5cb5640d7d7750609d31dab3ef715965a2593745595";

  var decrypt_message = $("#decrypt_message");

  decrypt_message.click(function(){
    socket.emit('decrypt', {private_key : private_key, public_key : public_key, message : message});
	})
});
