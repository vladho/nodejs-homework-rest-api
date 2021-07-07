const passport = require("passport");
require("../bin/config-passport");

const useAuth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (error, user) => {
    if (!user || error) {
      return res.status(401).json({
        status: "useAuth",
        code: 401,
        message: "Unauthorize",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = useAuth;
