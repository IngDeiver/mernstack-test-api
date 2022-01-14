import { IUser } from "../types";
import JwtTokenDto from '../dto/JwtTokenDto'

export default interface ILogin {
    Login(user: IUser): JwtTokenDto
}