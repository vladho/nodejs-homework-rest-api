const { contact: service } = require("../../services");

const addContact = async (req, res, next) => {
  const { body, user } = req;

  try {
    const newContact = {
      name: body.name,
      number: body.number,
      owner: user._id,
    };

    const result = await service.addContact(newContact);

    res.status(201).json({
      status: "success",
      code: 201,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
