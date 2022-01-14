import { Router, Request, Response, NextFunction } from "express";
import { UserController } from "../controllers";

const userRouter: Router = Router();

userRouter.post("/signup", (req: Request, res: Response, next: NextFunction) =>
  UserController.signUp(req, res, next)
);

userRouter.post("/login", (req: Request, res: Response, next: NextFunction) =>
  UserController.login(req, res, next)
);

export default userRouter;
