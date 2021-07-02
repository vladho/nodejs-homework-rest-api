const express = require("express");
const router = express.Router();

const { contactAddSchema, contactUpdateSchema } = require("../../schema/scema");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../model");

router.get("/", async (req, res, next) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: await listContacts(),
    },
  });
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;

  if (!(await getContactById(contactId))) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result: await getContactById(contactId),
    },
  });
});

router.post("/", async (req, res, next) => {
  const newContact = req.body;
  const { error } = contactAddSchema.validate(newContact);
  if (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: error.message,
    });
  }
  await addContact(newContact);

  res.json({
    status: "success",
    code: 201,
    data: {
      result: newContact,
    },
  });
});

router.delete("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;

  result = await removeContact(contactId);

  if (result === -1) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }

  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
  });
});

router.patch("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const newContact = req.body;

  const { error } = contactUpdateSchema.validate(newContact);

  if (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: error.message,
    });
  }

  const result = await updateContact(contactId, newContact);
  console.log(result);

  if (result === -1) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result: result,
    },
  });
});

module.exports = router;
