var express = require('express');
var app = express();

var server = require('http').createServer(app);

const io = require('socket.io')(server);
var fs = require("fs");
server.listen(process.env.PORT || 3000);
//server.listen(8000);
app.get('/', function (req, res, ext) {
    res.sendfile(__dirname + "/public/index.html");
});
var userid;
var listuserid = [];
app.use(express.static('public'));

io.sockets.on('connection', function (client) {
    console.log('Client connected...');
    client.on('join', function (data) {
        console.log(data);
    });
    client.on('messages',function(data){
        // client.emit('thread',data);
        // client.broadcast.emit('thread',data);
    });
    client.on('clientsend',function(data){
        console.log('vao clientsend');
        //console.log(data);
        //client.emit('currentsong',data);
        //io.sockets.emit('currentsong',data);
        io.sockets.emit(userid.userid,data);
        //io.to(${socketId}).emit('currentsong',data);
        //client.to(socket.id).emit('currentsong',data);
        //io.to(socketId).emit('currentsong',data);
    });

    client.on('allsonginroom',function(data){
        console.log('vao allsonginroom');
        //console.log(data);
        //client.emit('currentsong',data);
        //io.sockets.emit('currentsong',data);
        io.sockets.emit("getallsonginroom"+userid.userid,data);
        //io.to(${socketId}).emit('currentsong',data);
        //client.to(socket.id).emit('currentsong',data);
        //io.to(socketId).emit('currentsong',data);
    });

    client.on('nextsong',function(data){
        console.log('vao clientsend');
        io.sockets.emit('currentsong',data);
    });

    client.on('checkdata',function(data){
        console.log('room1'+data);
    });
    client.on('checkdata2',function(data){
        console.log('room2'+data);
    });

    client.on('joinroom',function(data){
        userid=JSON.parse(data);
        listuserid.push(userid);
        console.log(userid['userid']);
        console.log('vao joinroom');
        client.emit('gettimesong',data);
       // client.emit('thread',data);
        client.broadcast.emit('thread',data);
    });
    client.on('requestfromapp',function(data){
       // client.emit('thread',data);
        client.broadcast.emit('requestfromserver',data);
    });
    client.on('returnlistrequest',function(data){
        // client.emit('thread',data);
         client.broadcast.emit('updaterequest',data);
     });
     client.on('forceDisconnect', function(data){
         console.log('disconnected');
        if(userid['userid'] === data){
            userid['userid'] = null;
        }
    });
});