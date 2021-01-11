const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

dotenv.config({ path: "./config/config.env" });
const app = express();
app.use(bodyParser.json());
const transactionRouter = require("./routes/transactions");
const { connectDB } = require("./database/mongoose");

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}
connectDB();

app.use("/api/v1/transactions", transactionRouter);

const port = process.env.PORT || "5000";
app.listen(
  port,
  console.log(
    `Server running on port: ${port} in env: ${process.env.NODE_ENV}`.yellow
      .bold
  )
);
