import { IUser } from "../types";

export default interface ISignUp {
    SignUp(user: IUser): Promise<IUser>
}