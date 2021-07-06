const { User } = require("../models");

const getById = (id) => {
  return User.findById(id);
};

const getOne = (filter) => {
  return User.findOne(filter);
};

const add = ({ email, password }) => {
  console.log(User);
  const newUser = new User({ email });
  newUser.setPassword(password);
  return newUser.save();
};

module.exports = {
  getById,
  getOne,
  add,
};
