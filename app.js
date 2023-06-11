//  import express
const express = require("express");

//  initialize express app
const app = express();

//  port number
const port = 3000;

//  use express js middleware to parse json boddies
app.use(express.json());

// simple GET route for testing
app.get("/", (req, res) => {
  res.send("Hello World");
});


// Host a game
app.post("/host", (req, res) => {
  //  TODO: generate a new game code, and store in database

  let gameCode = "ABC123"; // Replace with actual game code

  res.status(201).json({ gameCode: gameCode });
});

// Join a game
app.post("/join", (req, res) => {
    let gameCode = req.body.gameCode;

    // TODO: look up game code in database, and join the user to the game
    res.status(200).json({message: 'Successfully joined game'});
});

// Get the game state
app.get("/game/:gameCode", (req, res) => {
    let gameCode = req.params.gameCode;

    // TODO: look up game code in database, and return the game state

    let gameState = {}; // Replace with actual game state

    res.status(200).json(gameState);
});

//  Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
