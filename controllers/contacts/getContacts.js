const { contact: service } = require("../../services");

const getContacts = async (req, res, next) => {
  try {
    const result = await service.getContacts({ owner: req.user._id });
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
