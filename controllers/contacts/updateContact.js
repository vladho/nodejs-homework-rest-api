const { contact: service } = require("../../services");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req;
  try {
    const result = await service.updateContact(contactId, body);

    res.status(200).json({
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

module.exports = updateContact;
