const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const routes = require("./api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

require("./bin/config-passport");

app.use(logger(formatsLogger));
app.use(express.json());
app.use(cors());

app.use("/api/contacts", routes.contacts);
app.use("/api/users", routes.auth);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
