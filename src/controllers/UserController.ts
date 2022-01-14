import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";
import { NextFunction, Request, Response } from "express";
import CreateUserDto from "../dto/CreateUserDto";
import { UserRepository } from "../repository";
import { UserService } from "../services";
import { IUser } from "../types";
import { format, HttpError } from "../utils";

export default abstract class UserController {
  private static readonly userService = new UserService(new UserRepository());

  static async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const data: CreateUserDto = req.body;

      validateOrReject(plainToClass(CreateUserDto, data))
      .then(async () => {
        data.password = this.userService.createHash(data.password);
        const userSaved: IUser = await this.userService.SignUp(data);
        res.json(userSaved);
      })
      .catch((errors) => {
        next(new HttpError(400, format(errors)));
      });
    } catch (error) {
      next(error);
    }
  }
}
