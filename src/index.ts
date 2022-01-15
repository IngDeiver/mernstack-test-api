import "./config/environment";
import "./database/connection";
import express, { Application, Request } from "express";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
import { ProductRouter, UserRouter } from "./api";
import { errorHandler } from "./middlewares";
import redisClient from "./database/redis";
import { v4 as uuidv4 } from "uuid";

const path = require("path");
const session = require("express-session");
const redisStore = require("connect-redis")(session);

const app: Application = express();
const port = process.env.PORT || 4000;

// --- midddlwares and configs ---
app.use(cors({ origin: process.env.ORIGIN }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// passpor configs
app.use(
  session({
    genid: function (req: Request) {
      return uuidv4(); // use UUIDs for session IDs
    },
    store: new redisStore({
      // use redis as store
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      client: redisClient,
    }),
    name: "mernstack",
    secret: process.env.SESION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
import "./auth/strategy/jwtStrategy";

// set routes
app.use("/api/products", passport.authenticate("jwt"), ProductRouter);
app.use("/api/auth", UserRouter);

// Error handler
app.use(errorHandler);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Restful API listening at port: ${port}`);
  });
}

export default app;
