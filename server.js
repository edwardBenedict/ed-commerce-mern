const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
// Database Connection
require("./api/db").dbConnection();
require("dotenv").config();

const app = express();
app.use(cookieParser());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

const PORT = process.env.SERVER_PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Put all API endpoints under '/api'
app.use("/api/", require("./api/router"));

// Listen to requests on port 5000
app.listen(PORT, () => {
  console.log(
    `Server:      Server is running on port http://localhost:${PORT}`
  );
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
});
