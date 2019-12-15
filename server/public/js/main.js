const socket = io.connect('http://localhost');
socket.on('news', data => {
  console.log(data);
  socket.emit('other event', { my: 'data' });
});
