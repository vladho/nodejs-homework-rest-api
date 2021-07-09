const { user: service } = require("../../services");
const sendMail = require("../../bin/sendMailGmail");

const verifyByEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await service.findOne({ email });

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

    sendMail(
      email,
      "regiter account",
      `please, confirm your account http://localhost:3000/api/users/verify/${user.verifyToken} `
    );
    res.status(200).json({
      message: "Verification email sent",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = verifyByEmail;
