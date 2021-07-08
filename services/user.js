const { User } = require("../models");
const gravatar = require("gravatar");

const getById = (id) => {
  return User.findById(id);
};

const getOne = (filter) => {
  return User.findOne(filter);
};

const add = ({ email, password, subscription }) => {
  const newUser = new User({
    email,
    subscription,
    avatarURL: gravatar.url(email, { s: 250 }),
  });
  newUser.setPassword(password);
  return newUser.save();
};

const updateToken = (id, data) => {
  return User.findByIdAndUpdate(id, data);
};

const updateAvatar = (id, data) => {
  return User.findByIdAndUpdate(id, data);
};

module.exports = {
  getById,
  getOne,
  add,
  updateToken,
  updateAvatar,
};
