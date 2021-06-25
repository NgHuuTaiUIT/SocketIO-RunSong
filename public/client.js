var socket = io.connect('https://radio-server-uit.herokuapp.com');
//var socket = io.connect('http://localhost:8000/');
socket.on('connect', function (data) {
    socket.emit('join', 'Hello server from client');
});

var str = [];
var str2 = [];
var listAudioRoom1 = [];
var listAudioRoom2 = [];
var listInfoUserInRoom = [];
var listRequestRoom1 = [];
var listRequestRoom2 = [];
var user ;
var audioCurrent;
var audioCurrent2;
  fetch('https://imusicapi.000webhostapp.com/Server/songrandom.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Lỗi, mã lỗi ' + response.status);
        return;
      }
      // parse response data
      response.json().then(data => {
        str2=data;
        console.log(str2);
        str2.forEach(function addAudio(element){
          console.log(element);
          listAudioRoom2.push(new Audio(element.link));
          listRequestRoom2.push(0);
           audioCurrent2 = listAudioRoom2[position2];
        });
      })
    }
  )
  .catch(err => {
    console.log('Error :-S', err)
  });
  fetch('https://imusicapi.000webhostapp.com/Server/songlove.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Lỗi, mã lỗi ' + response.status);
        return;
      }
      // parse response data
      response.json().then(data => {
        str=data;
        console.log(str);
        str.forEach(function addAudio(element){
          console.log(element);
          listAudioRoom1.push(new Audio(element.link));
          listRequestRoom1.push(0);
           audioCurrent = listAudioRoom1[position];
        });
      })
    }
  )
  .catch(err => {
    console.log('Error :-S', err)
  });
class InfoUserInRoom{
      constructor(room,userid){
        this.room = room;
        this.userid = userid;
      }
  }

var position = 0;
var positonnextsong = -1;
var positionnextsong2 = -1;
var position2 = 0;
var PlayNextSong = function(){
    // position++;
    // if(position > listAudioRoom1.length-1){
    //     position = 0;
    // }
    if(positonnextsong === -1){
      position = Math.floor(Math.random() * listAudioRoom1.length);
      console.log(position);
    }else{
      position = positonnextsong;
      positonnextsong = -1;
    }
    audioCurrent = listAudioRoom1[position];
    audioCurrent.play();
    $('#titleroom1').text(str[position].name);
    socket.emit('nextsong',{
        name: str[position].name,
        singer: str[position].singer,
        link:str[position].link,
        timecurrent:audioCurrent.currentTime,
        image: str[position].img,
        room: 1
    });
    listRequestRoom1 = [];
    str.forEach(element => listRequestRoom1.push(0));
    socket.emit('returnlistrequest',{data:listRequestRoom1,room:1});
};
var PlayNextSong2 = function(){
    // position2++;
    // if(position2 > listAudioRoom2.length-1){
    //     position2 = 0;
    // }
    // if(audioCurrent2 === listAudioRoom2[position2]){
    //   position2 = Math.floor(Math.random() * listRequestRoom2.length);
    // }
    if(positionnextsong2 === -1){
      position2 = Math.floor(Math.random() * listAudioRoom2.length);
      console.log(position2);
    }else{
      position2 = positionnextsong2;
      positionnextsong2 = -1;
    }
    audioCurrent2 = listAudioRoom2[position2];
    audioCurrent2.play();
    $('#titleroom2').text(str2[position2].name);
    socket.emit('nextsong',{
        name: str2[position2].name,
        singer: str2[position2].singer,
        link:str2[position2].link,
        timecurrent:audioCurrent2.currentTime,
        image: str2[position2].img,
        room: 2
    });
    listRequestRoom2 = [];
    str2.forEach(element => listRequestRoom2.push(0));
    socket.emit('returnlistrequest',{data:listRequestRoom2,room:2});
};
//listen thread event
socket.on('thread', function (data) {
    user = JSON.parse(data);
    listInfoUserInRoom.push(new InfoUserInRoom(user.room,user.userid));
    console.log('vao thread');
    console.log(data);
    if(user.room == 1){
        socket.emit('clientsend',{
            name: str[position].name,
            singer: str[position].singer,
            link:str[position].link,
            timecurrent:audioCurrent.currentTime,
            image: str[position].img,
            userid: user.userid,
            room: user.room
        });
        socket.emit('allsonginroom',{data:str,room:user.room,requests:listRequestRoom1});
    }else if(user.room == 2){
        socket.emit('clientsend',{
            name: str2[position2].name,
            singer: str2[position2].singer,
            link:str2[position2].link,
            timecurrent:audioCurrent2.currentTime,
            image: str2[position2].img,
            userid: user.userid,
            room: user.room
        });
        socket.emit('allsonginroom',{data:str2,room:user.room,requests:listRequestRoom2});
    }
    //$('#thread').append('<li>' + data + '</li>')
});
socket.on('requestfromserver', function (data) {
  var info = JSON.parse(data);
  console.log(info);
  if(info.room == 1){
    var index = str.findIndex((element) => element.id === info.userid);
    console.log(index);
    listRequestRoom1[index]++;
    console.log(listRequestRoom1[index]);
    positonnextsong = listRequestRoom1.findIndex((element) => element === Math.max(...listRequestRoom1));
    socket.emit('returnlistrequest',{data:listRequestRoom1,room:info.room});
  }else if(info.room == 2){
    var index = str2.findIndex((element) => element.id === info.userid);
    console.log(index);
    listRequestRoom2[index]++;
    positionnextsong2 = listRequestRoom2.findIndex((element) => element === Math.max(...listRequestRoom2));
    socket.emit('returnlistrequest',{data:listRequestRoom2,room:info.room});
  }

});
    
// });

$('#btn1').click(function(){
    audioCurrent.play();
    $('#titleroom1').text(str[position].name);
    setInterval(
        () => {
            socket.emit('checkdata',audioCurrent.currentTime)
            if(audioCurrent.currentTime == audioCurrent.duration){
                PlayNextSong();
            }
        },
        1000
      );
});
$('#btn2').click(function(){
    audioCurrent2.play();
    $('#titleroom2').text(str2[position2].name);
    setInterval(
        () => {
            socket.emit('checkdata2',audioCurrent2.currentTime)
            if(audioCurrent2.currentTime == audioCurrent2.duration){
                PlayNextSong2();
            }
        },
        1000
      );
});
$('#btnsend1').click(function(){
    //var message = $('#message').val();
    audioCurrent.currentTime = audioCurrent.duration;
    
});
$('#btnsend2').click(function(){
  //var message = $('#message').val();
  audioCurrent2.currentTime = audioCurrent2.duration;
  
});


