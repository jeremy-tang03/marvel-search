const express = require("express");
const app = express();
const api = require("./routes/api.cjs");
const compression = require("compression");

// set compression middleware
app.use(compression());
app.use(express.static("../client/build"));

// set browser caching middleware
app.use((req, res, next) => {
  res.set("Cache-control", "public, max-age=31536000");
  next();
})

app.use("/api", api);
app.use((req, res) => {
  res.status(404).json({error: "not supported"});
})

module.exports = app;
