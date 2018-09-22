const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = 8080;
const app = express();

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
    console.log('User connected');

    setInterval(() => {
        socket.emit('change time', new Date().getSeconds()); 
    }, 1000);   
    
    
    socket.on('disconnect', () => {
      console.log('user disconnected')
    });
})
  
server.listen(port, () => console.log(`Listening on port ${port}`))