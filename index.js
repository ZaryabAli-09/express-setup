const express = require("express");
const app = express();

// 65 thousand port in a computer
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello zaryab!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
