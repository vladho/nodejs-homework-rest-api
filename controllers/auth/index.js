const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./currentUser");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const verifyByEmail = require("./verifyByEmail");

module.exports = {
  register,
  login,
  logout,
  currentUser,
  updateAvatar,
  verify,
  verifyByEmail,
};
