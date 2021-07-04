const { contact: service } = require("../../services");

const updateStatus = async (req, res, next) => {
  const { favorite } = req.body;
  const { id } = req.params;

  try {
    if (!favorite) {
      return res.status(400).json({
        status: "error",
        code: 404,
        message: "missing field favorite",
      });
    }
    const result = await service.updateStatusContact(id, req.body);

    res.status(200).json({
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

module.exports = updateStatus;
