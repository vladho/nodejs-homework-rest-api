const passport = require("passport");
const passportJWT = require("passport-jwt");
require("dotenv").config();

const { user: service } = require("../services");

const { ExtractJwt, Strategy } = passportJWT;
const { TOKEN_KEY } = process.env;

const settings = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: TOKEN_KEY,
  passReqToCallback: true,
};

passport.use(
  new Strategy(settings, async (req, payload, done) => {
    // try {
    //   const [, token] = req["Authorization"].split(" ");
    //   const user = await service.getOne({ _id: payload.id, token });
    //   console.log(user);
    //   if (!user) {
    //     throw new Error("User not found");
    //   }
    //   done(null, user);
    // } catch (error) {
    //   done(error);
    // }
    try {
      const user = await service.getById(payload.id);
      // console.log(user);
      if (!user) {
        return done(new Error("User not found"));
      }

      if (!user.token) {
        return done(null, false);
      }

      return done(null, user);
    } catch (err) {
      done(err);
    }
  })
);
