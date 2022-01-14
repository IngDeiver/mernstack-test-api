import { IUser } from "../types";
import { User } from "../model";
import { BaseUserRepository } from ".";

export default class UserRepository implements BaseUserRepository {
  async findUser(username: string): Promise<IUser | null> {
     return User.findOne({ username })
  }
  SignUp(user: IUser): Promise<IUser> {
    return new User(user).save();
  }
}
