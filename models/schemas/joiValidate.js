const Joi = require("joi");

const joiValidate = Joi.object({
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .min(4)
    .max(200)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua", "uk", "net", "org"] },
    })
    .required(),
});

module.exports = joiValidate;
