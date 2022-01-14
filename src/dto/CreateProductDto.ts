import {
  IsString,
  IsNotEmpty,
  IsEmpty,
  IsOptional,
  IsUrl,
  IsNumber,
} from "class-validator";

export default class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsUrl()
  @IsEmpty()
  @IsOptional()
  imageUrl!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;
}