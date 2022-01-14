import * as bcrypt from "bcrypt";
import JwtTokenDto from "../dto/JwtTokenDto";
import { IUser } from "../types";
import jsonwebtoken from "jsonwebtoken";
import { ISignUp } from "../interfaces";
import { BaseUserRepository } from "../repository";

const ACCESS_TOKEN_EXPIRE = "365 days";

export default class UserService implements ISignUp {
  private userRepository: BaseUserRepository;

  constructor(userRepository: BaseUserRepository) {
    this.userRepository = userRepository;
  }

  SignUp(user: IUser): Promise<IUser> {
    return this.userRepository.SignUp(user);
  }

  async findUser(username: string): Promise<IUser | null> {
    return this.userRepository.findUser(username);
  }

  async createJwt(username: string): Promise<JwtTokenDto> {
    const JWT_SECRET = process.env.JWT_SECRET;
    if (JWT_SECRET) {
      const payload = { sub: username };
      const access_token: string = await jsonwebtoken.sign(
        payload,
        JWT_SECRET,
        { expiresIn: ACCESS_TOKEN_EXPIRE }
      );
      const jwt: JwtTokenDto = { access_token, username };
      return jwt;
    } else {
      throw new Error("JWT_SECRET is required");
    }
  }

  async login(username: string): Promise<JwtTokenDto> {
    return this.createJwt(username);
  }

  comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  createHash(password: string): string {
    return bcrypt.hashSync(password, 10);
  }
}
