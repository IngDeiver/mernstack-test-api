import { IUser } from "../types";

export default interface IFindUserByName {
    findUser(username: string): Promise<IUser | null>
}