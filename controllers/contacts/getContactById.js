const { contact: service } = require("../../services");

const getContactById = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;

  try {
    const filter = { _id: id, owner: user._id };
    const result = await service.getContactById(filter);

    if (!result) {
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
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
