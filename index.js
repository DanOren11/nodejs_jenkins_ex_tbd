const { json } = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK"});
});

app.get("/time", (req, res) => {
  res.json({timestamp: Date.now() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
