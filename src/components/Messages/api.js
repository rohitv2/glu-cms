import openSocket from 'socket.io-client';
const  socket = openSocket('http://glu-stage.antino.io:3000');
function subscribeToTimer(cb) {
//   socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('connection', 1000);
}
export { subscribeToTimer };