import {
  IsString,
  IsNotEmpty,
  IsNumber,
} from "class-validator";

export default class CreateProductDto  {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  imageUrl!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;
}
