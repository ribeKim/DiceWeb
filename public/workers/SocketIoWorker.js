importScripts('https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.3/socket.io.js');

const socket = io('http://localhost:8080', { transports: ['websocket']});

socket.on('connect', () => {
  console.log('connected');
});

// socket.emit('test', {data: 'websocket test'});

addEventListener('message', (e) => {
  console.log(`incoming message from main thread ${e}`);
  socket.emit('message', {data: e.data.msg});
});

socket.on('message', (data) => {
  console.log(`incoming message from server ${data}`);
  postMessage(data);
});