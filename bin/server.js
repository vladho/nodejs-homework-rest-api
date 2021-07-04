const app = require("../app");
const mongoose = require("mongoose");
require("dotenv").config();

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    const port = PORT || 3000;
    app.listen(port);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
