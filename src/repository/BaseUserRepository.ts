import { IFindUserByName, ISignUp } from "../interfaces";

export default interface BaseUserRepository extends ISignUp, IFindUserByName {

}