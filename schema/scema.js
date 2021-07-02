const Joi = require("joi");

const contactAddSchema = Joi.object({
  name: Joi.string().min(2).max(200).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  phone: Joi.string().min(7).max(13).required(),
});

const contactUpdateSchema = Joi.object({
  name: Joi.string().min(2).max(200),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phone: Joi.string().min(7).max(13),
});

module.exports = { contactAddSchema, contactUpdateSchema };
