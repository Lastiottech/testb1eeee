// nodejs http server kuruyoruz
const server = require('http').createServer();
const io = require('socket.io')(server);

// sockete bağlanıldığında burası çalışır
io.on('connection', function(socket){
    
    console.log('sockete birileri bağlandı.');

    // new-post eventını dinliyoruz, backendden buraya data göndereceğiz
    socket.on('oku', function(data){
        io.emit('yaz', data);
    });

    // socket bağlantısı sonlandığında burası çalışır
    socket.on('disconnect', function(){
        console.log('birileri geldi ve gitti.');
    });
    
});

// 5000 portundan dinliyoruz
server.listen(5000);
