import { JwtPayload } from "jsonwebtoken";
import passport from "passport";
import { UserRepository } from "../../repository";
import { UserService } from "../../services";
import { IUser } from "../../types";
import "../../config/environment";

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const options: any = {};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_AUTH_SECRET;

const verify = (username: string, done: any) => {
  const userService: UserService = new UserService(new UserRepository());
  
  userService
    .findUser(username)
    .then((user: IUser | null) => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => done(err, false));
};

passport.serializeUser(function (user: any, done) {
  done(null, user.username);
});

passport.deserializeUser(function (username: string, done) {
  verify(username, done);
});


passport.use('jwt',
  new JwtStrategy(options, function (jwt_payload: JwtPayload, done: any) {
    console.log("jwt_payload -> ", jwt_payload);
    verify(jwt_payload.sub || "", done);
  })
);

