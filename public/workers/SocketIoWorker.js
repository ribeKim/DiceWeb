importScripts('https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.3/socket.io.js');

const socket = io('https://pi.coco1337.xyz:41000', { transports: ['websocket']});

socket.on('connect', () => {
  console.log('connected');
});

socket.emit('test', {data: 'websocket test'});

addEventListener('message', (e) => {
  console.log(e);
  socket.emit('req', {data: e.data.msg});
});

socket.on('res', (data) => {
  console.log(data);
  postMessage(JSON.stringify({id: data.id, msg: JSON.stringify(data)}));
});