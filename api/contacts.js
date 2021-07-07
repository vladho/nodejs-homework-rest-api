const express = require("express");
const router = express.Router();

const useAuth = require("./useAuth");
const { contacts: ctrl } = require("../controllers");

router.get("/", useAuth, ctrl.getContacts);

router.get("/:contactId", useAuth, ctrl.getContactById);

router.post("/", useAuth, express.json(), ctrl.addContact);

router.delete("/:contactId", useAuth, ctrl.removeContact);

router.put("/:contactId", useAuth, express.json(), ctrl.updateContact);

router.patch("/:id/favorite", useAuth, express.json(), ctrl.updateStatus);

module.exports = router;
