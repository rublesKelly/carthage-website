// //Imports
// // const  express = require('express');  
// import express from 'express'

// //Setup 
// const  app = express();  
// const  server = require('http').createServer(app);  
// const  io = require('socket.io')(server); 
// const  port = 3001
	
// //Initialise server on port 3001
// server.listen(port, function(){
//   console.log(`listening on port ${port}`);
// }); 

// //redirect / to index.html
// // app.get('/', function(req, res,next) {  
// //     res.sendFile(__dirname + '/public/index.html');
// // });

// //Client connection 
// //For now just console log 
// io.on('connection', (client) => {  
//     console.log('Client connected...');
// });


// Server-side Websocket
const WebSocket = require('ws')
const server = new WebSocket.Server({ port: '8080' })

server.on('connection', socket => { 

  socket.on('message', message => {

    socket.send(`Roger that! ${message}`);

  });

});