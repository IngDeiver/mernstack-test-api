import { ISignUp } from "../interfaces";
import { IUser } from "../types";
import {User} from '../model'


export default class UserRepository implements ISignUp {
    SignUp(user: IUser): Promise<IUser> {
        return new User(user).save()
    }
}