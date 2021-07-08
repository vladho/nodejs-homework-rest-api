const express = require("express");

const useAuth = require("./useAuth");
const useUpload = require("./useUpload");
const compressImage = require("./useJimp");

const { auth: ctrl } = require("../controllers");

const router = express.Router();

router.post("/signup", express.json(), ctrl.register);

router.post("/login", express.json(), ctrl.login);

router.post("/logout", useAuth, express.json(), ctrl.logout);

router.get("/current", useAuth, ctrl.currentUser);

router.patch(
  "/avatars",
  useAuth,
  useUpload.single("avatar"),
  compressImage,
  ctrl.updateAvatar
);

module.exports = router;
