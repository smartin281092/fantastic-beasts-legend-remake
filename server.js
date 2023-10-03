const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 3000; // Use the port of your choice

const fs = require('fs');
const Db = require('./game/db');
const Challenge = require('./game/challenge');


// Serve static files (your frontend) from a directory
app.use(express.static('public')); // Replace 'public' with the path to your frontend files

// Define an endpoint to serve your HTML file
app.get('/game', (req, res) => {
  // Render your frontend project here
  let challenge = new Challenge('1', '2').start();

  res.sendFile(__dirname + '/public/index.html'); // Replace with the path to your HTML file
});

// Set up Socket.io
io.on('connection', (socket) => {
  console.log('A user connected');

  // Define socket.io events and handlers here
  // For example, you can listen for client messages:
  socket.on('chat message', (message) => {
    console.log(`Received message: ${message}`);
    // Broadcast the message to all connected clients
    io.emit('chat message', message);
  });

  // Handle disconnects
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
