const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
  socket.emit('news', { hello: 'world' });
  socket.on('another event', data => {
    console.log('data');
  });
});

server.listen(3000, () => {
  console.log('port 3000');
});
