// Create web server

// Import the express module
const express = require("express");
// Create express application
const app = express();
// Import the body-parser module
const bodyParser = require("body-parser");
// Import the path module
const path = require("path");

// Import the comments module
const comments = require("./comments");

// Parse the body of the request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the static files
app.use(express.static(path.join(__dirname, "public")));

// Get the comments
app.get("/comments", (req, res) => {
  res.json(comments.getComments());
});

// Post a comment
app.post("/comments", (req, res) => {
  const { author, text } = req.body;
  comments.addComment(author, text);
  res.json(comments.getComments());
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});