//Imports
const  express = require('express');  

//Setup 
const  app = express();  
const  server = require('http').createServer(app);  
const io = require('socket.io')(server); 
const  port = 3001
	
//Initialise server on port 3001
server.listen(port, function(){
  console.log(`listening on port 3001`);
}); 

//redirect / to index.html
// app.get('/', function(req, res,next) {  
//     res.sendFile(__dirname + '/public/index.html');
// });

//Client connection 
//For now just console log 
io.on('connection', function(client) {  
    console.log('Client connected...');
});