const express = require("express");

const { auth: ctrl } = require("../controllers");

const router = express.Router();

router.post("/signup", express.json(), ctrl.register);

router.post("./signin", express.json(), ctrl.login);

module.exports = router;
