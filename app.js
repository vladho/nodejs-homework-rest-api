const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const routes = require("./api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(express.json());
app.use(cors());
app.usr;

app.use("/api/contacts", routes.contacts);
app.use("/api/users", routes.auth);
app.use("/", routes.upload);

////////
// const path = require("path");
// const static = path.join(__dirname);
// app.use("/", express.static(path.join(process.cwd(), "public")));
// console.log(path.join(process.cwd(), "public"));
//////////

require("./bin/config-passport");

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
