const express = require("express");
const logger = require("morgan");
const mainRouter = require("./routes/mainRoutes")
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use('/', mainRouter );

module.exports = app;
