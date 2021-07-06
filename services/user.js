const User = require("../models");

const getById = (id) => {
  return User.findById(id);
};

module.exports = {
  getById,
};
