import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from "class-validator";

export default class CreateProductDto  {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsOptional()
  imageUrl!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;
}
