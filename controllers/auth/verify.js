const { user: service } = require("../../services");

const verify = async (req, res, next) => {
  const { verificationToken } = req.params;
  try {
    const user = await service.findOne(
      { verifyToken: verificationToken },
      { verifyToken: null, verify: true }
    );

    if (!user) {
      return res.status(404).json({
        status: "Not Found",
        code: 404,
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "Verification successful",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = verify;
