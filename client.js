const {server, io} = require('./server.js');

const socket = require('socket.io-client')('http://localhost:3000/do-not-exists');

socket.on('connect', () => {
  console.log(`connect ${socket.id}`);
});

socket.once('connect_error', (e) => {
    console.log('connect error', e.message);
    socket.close();
    server.close();
    io.close();
});

socket.on('disconnect', () => {
  console.log(`disconnect ${socket.id}`);
});

socket.on('hello', (a, b, c) => {
  console.log(a, b, c);
});
