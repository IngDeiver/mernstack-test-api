import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";
import { NextFunction, Request, Response } from "express";
import CreateUserDto from "../dto/CreateUserDto";
import { UserRepository } from "../repository";
import { UserService } from "../services";
import { IUser } from "../types";
import { format, HttpError } from "../utils";
import LoginUserDto from "../dto/LoginUserDto";
import JwtTokenDto from "../dto/JwtTokenDto";

export default abstract class UserController {
  private static readonly userService = new UserService(new UserRepository());

  static async signUp(req: Request, res: Response, next: NextFunction) {
    const data: CreateUserDto = req.body;

    validateOrReject(plainToClass(CreateUserDto, data))
      .then(async () => {
        try {
          data.password = this.userService.createHash(data.password);
          const userSaved: IUser = await this.userService.SignUp(data);
          res.json(userSaved);
        } catch (error) {
          next(error);
        }
      })
      .catch((errors) => {
        next(new HttpError(400, format(errors)));
      });
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    const user: LoginUserDto = req.body;

    validateOrReject(plainToClass(LoginUserDto, user))
      .then(async () => {
        try {
          const userExist: IUser | null = await this.userService.findUser(
            user.username
          );

          if (userExist) {
            const equeals_pwd: boolean = await this.userService.comparePassword(
              user.password,
              userExist.password
            );
            if (equeals_pwd) {
              const token: JwtTokenDto = await this.userService.createJwt(
                user.username
              );
              res.json(token);
            } else {
              next(new HttpError(401, "Invalid credenctials"));
            }
          } else {
            next(new HttpError(404, "User not found"));
          }
        } catch (error) {
          next(error);
        }
      })
      .catch((errors) => {
        next(new HttpError(400, format(errors)));
      });
  }

  static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      req.logout();
      res.json({ message: "Logout sucessfull" });
    } catch (error) {
      next(error);
    }
  }
}
