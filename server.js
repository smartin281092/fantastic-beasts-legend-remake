const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  },
});
const port = process.env.PORT || 8080;


const fs = require('fs');
const Db = require('./game/db');
const Challenge = require('./game/challenge');


// Serve static files from client
app.use('/client', express.static(path.join(__dirname, 'client')));

// Define an endpoint to serve your HTML file
app.get('/game', (req, res) => {
  // Render your frontend project here
  let challenge = new Challenge('1', '2').start();

  res.sendFile(path.join(__dirname, 'client', 'index.html')); // Replace with the path to your HTML file
});

// Set up Socket.io
io.on('connection', (socket) => {
  console.log('A user connected : ', socket.id);

  socket.emit('client/connected', 'I hear you');
  
  socket.on('game/new', (message) => {
    console.log(`Received message: ${message}`);
    io.emit('chat message', message);
  });

  socket.on('test', () => {
    console.log('test réussi! event envoyé depuis le client.')
  })
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
  
  io.emit('global/test', 'global test');

});


// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
