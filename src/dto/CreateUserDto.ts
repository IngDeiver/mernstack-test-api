import { IsNotEmpty, IsString } from "class-validator";
import { IUser } from "../types";

export default class CreateUserDto implements IUser {

    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;
  }