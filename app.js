const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(250);
module.exports = app;
