import express from "express";
import bodyParser from "body-parser";

const app = express(); // Create an Express application instance
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
