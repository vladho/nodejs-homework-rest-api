const { contact: service } = require("../../services");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    console.log(contactId);
    const result = await service.removeContact(contactId);
    console.log();

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
