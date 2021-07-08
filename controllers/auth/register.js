const jwt = require("jsonwebtoken");

require("dotenv").config();
const { joiValidate } = require("../../models/schemas");

const { user: service } = require("../../services");

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
    const result = await service.getOne({ email });

    if (result) {
      return res.status(409).json({
        status: "Conflict",
        code: 409,
        message: "Email in use",
      });
    }

    const data = await service.add({
      email,
      password,
      subscription,
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
