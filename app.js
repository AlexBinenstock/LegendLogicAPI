//  import express
const express = require('express');

//  initialize express app
const app = express();

//  port number
const port = 3000;

//  use express js middleware to parse json boddies
app.use(express.json());

// simple GET route for testing
app.get('/', (req, res) => {
    res.send('Hello World');
});

//  Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 