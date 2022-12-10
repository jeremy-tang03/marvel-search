const express = require("express");
const app = express();
const api = require("./routes/api.cjs");

app.use(express.static("../client/public"));
app.use("/api", api);
app.use((req, res) => {
  res.status(404).json({error: "not supported"});
})

module.exports = app;
