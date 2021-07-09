const { user: service } = require("../../services");

const logout = async (req, res, next) => {
  const { user } = req;

  try {
    await service.update(user._id, { token: null });

    res.json({
      status: "No Content",
      code: 204,
      message: "Success logout",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
