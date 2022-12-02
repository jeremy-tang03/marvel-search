const express = require("express");
const app = express();
const api = require("./routes/api.cjs");

app.use(express.static('../client/build'));

app.use("/api", api);

module.exports = app;
