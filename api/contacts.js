const express = require("express");
const router = express.Router();

const useAuth = require("./useAuth");
const { contacts: ctrl } = require("../controllers");

router.get("/", useAuth, ctrl.getContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", ctrl.updateContact);

router.patch("/:id/favorite", ctrl.updateStatus);

module.exports = router;
