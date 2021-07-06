const passport = require("passport");
const passportJWT = require("passport-jwt");
require("dotenv").config();

const { user: service } = require("../services");

const { ExtractJWT, Strategy } = passportJWT;
const { TOKEN_KEY } = process.env;

const settings = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: TOKEN_KEY,
};

passport.use(
  new Strategy(settings, async (payload, done) => {
    try {
      const user = await service.getByID(payload.id);
      if (!user) {
        throw new Error("User not found");
      }
      done(null, user);
    } catch (error) {
      done(error);
    }
  })
);
