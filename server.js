const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(cookieParser());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@trainingcluster.tpyei.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB:     Connected to MongoDB Successfully!");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

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
