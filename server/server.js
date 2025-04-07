// Backend server setup, yo
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

// Mock API endpoint
app.get("/api/data", (req, res) => {
  const data = require("../data/sample-data.json"); // Load sample data
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Yo, server's running at http://localhost:${port}`);
});