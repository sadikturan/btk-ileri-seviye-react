const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs/promises");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/courses", async (req, res) => {
  const result = await fs.readFile("data/courses.json", "utf8");
  res.json(JSON.parse(result));
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(5000);
