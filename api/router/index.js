const api = (module.exports = require("express").Router());

api.use("/auth", require("./auth"));
api.use("/products", require("./product"));
