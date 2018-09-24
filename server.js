const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = 8080;
const app = express();

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
    console.log('User connected');   
    
    
    socket.on('new message from client', (msg) => {
      io.emit('new message from server', msg);
    });    
})
  
server.listen(port, () => console.log(`Listening on port ${port}`))