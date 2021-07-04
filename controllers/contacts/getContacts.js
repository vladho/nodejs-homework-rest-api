const { contact: service } = require("../../services");

const getContacts = async (req, res, next) => {
  const { query } = req;

  try {
    const result = await service.getContacts(query);
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
