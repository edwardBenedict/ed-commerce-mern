const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@trainingcluster.tpyei.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
function dbConnection() {
  mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB:     Connected to MongoDB Successfully!");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}

module.exports = { dbConnection };
