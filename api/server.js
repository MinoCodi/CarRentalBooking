const express = require("express");
const data = require("./data/data.json");

const app = express();
// import data from "./data.json";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/data.json", (req, res) => res.send(data));

app.post("/", (req, res, next) => {
  // Handle the post for this route
});

app.listen(3000, () =>
  console.log("Server is running. Listening on port 3000")
);
