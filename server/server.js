const express = require("express");
const data = require("./data/data.json");

const app = express();

const specificData = number => data.cars[number - 1];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers");
  next();
});

app.use(express.static("data"));

app.get("/car/:id", (req, res) => {
  const snd = specificData(req.params.id);
  res.send(snd);
});

app.post("/", (req, res, next) => {});

app.listen(3000, () =>
  console.log("Server is running. Listening on port 3000")
);
