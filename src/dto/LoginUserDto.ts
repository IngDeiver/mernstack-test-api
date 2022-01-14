import { IsNotEmpty, IsString } from "class-validator";
import { IUser } from "../types";

export default class LoginUserDto implements IUser {

    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;
  }