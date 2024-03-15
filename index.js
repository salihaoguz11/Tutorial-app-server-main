"use strict";
require("express-async-errors");
require("dotenv").config();
const express = require("express");
const { mongooseConnection } = require("./startup/mongooseConnection");
const { todoRouter } = require("./routes/todo.route");
const cors = require("cors");
const PORT = process.env?.PORT || 8000;

const app = express();
app.use(
  cors({
    origin: "https://emre-tutorial-app-client.vercel.app",
  }),
);
app.use(express.json());

app.use(todoRouter);
app.use(require("./middlewares/errorHandler"));
mongooseConnection();
app.listen(PORT, () => console.log("Listening http://127.0.0.1:" + PORT));
