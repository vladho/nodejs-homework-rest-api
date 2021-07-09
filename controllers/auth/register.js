const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");

const { joiValidate } = require("../../models/schemas");
const { user: service } = require("../../services");
const sendMail = require("../../bin/sendMailGmail");

require("dotenv").config();

const register = async (req, res, next) => {
  const { value, error } = joiValidate.validate(req.body);
  const { email, password, subscription } = value;

  if (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: error.message,
    });
  }

  try {
    const verificationToken = v4();
    const result = await service.getOne({ email });

    if (result) {
      return res.status(409).json({
        status: "Conflict",
        code: 409,
        message: "Email in use",
      });
    }
    const toEmail = email;

    sendMail(
      toEmail,
      "regiter account",
      `please, confirm your account http://localhost:3000/api/users/verify/${verificationToken} `
    );

    const data = await service.add({
      email,
      password,
      subscription,
      verifyToken: verificationToken,
    });

    res.status(201).json({
      status: "Created",
      code: 201,
      user: {
        email: data.email,
        subscription: data.subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
