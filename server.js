const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

const app = express();

dotenv.config({ path: "./config/config.env" });

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || "5000";
app.listen(
  port,
  console.log(
    `Server running on port: ${port} in env: ${process.env.NODE_ENV}`.green.bold
  )
);
