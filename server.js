var io = require('socket.io')(process.env.PORT || 3000);

console.log('Server is up');

io.on("connection",function(socket){
    console.log('Connection!!');
});