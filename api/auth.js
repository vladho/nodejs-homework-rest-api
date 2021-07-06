const express = require("express");

const { auth: ctrl } = require("../controllers");

const router = express.Router();

router.post("/register", express.json(), ctrl.register);

router.post("./login", express.json(), ctrl.login);

module.exports = router;
