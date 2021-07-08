const { user: service } = require("../../services");

const verifyByEmail = async (req, res, next) => {
  // console.log(req.body);
  const { email } = req.body;

  try {
    const user = await service.findOne({ verificationToken });

    if (!email) {
      return res.status(400).json({
        status: "Bad Request",
        code: 400,
        message: "missing required field email",
      });
    }
    if (user.verify) {
      return res.status(400).json({
        status: "Bad Request",
        code: 400,
        message: "Verification has already been passed",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = verifyByEmail;
