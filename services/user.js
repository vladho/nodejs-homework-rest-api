const { User } = require("../models");
const gravatar = require("gravatar");

const getById = (id) => {
  return User.findById(id);
};

const getOne = (filter) => {
  return User.findOne(filter);
};

const add = ({ email, password, subscription, verifyToken }) => {
  const newUser = new User({
    email,
    subscription,
    avatarURL: gravatar.url(email, { s: 250 }),
    verifyToken,
  });
  newUser.setPassword(password);
  return newUser.save();
};

const update = (id, data) => {
  return User.findByIdAndUpdate(id, data);
};

const findOne = (id, data) => {
  return User.findOneAndUpdate(id, data);
};

module.exports = {
  getById,
  getOne,
  add,
  update,
  findOne,
};
