const express = require("express");
const app = express();
const items = require("./ServerDB.json");

app.use(express.json());

app.get("/items", function (req, res) {
  console.log(items);
  res.json(items);
});

app.listen(5000);
