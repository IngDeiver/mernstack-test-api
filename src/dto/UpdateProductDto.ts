import {
  IsString,
  IsNotEmpty,
  IsEmpty,
  IsUrl,
  IsOptional,
  IsNumber,
} from "class-validator";

export default class UpdateProductDto {
  
  @IsNotEmpty()
  _id!: string;

  @IsString()
  @IsOptional()
  name!: string;

  @IsString()
  @IsOptional()
  imageUrl!: string;

  @IsNumber()
  @IsOptional()
  price!: number;
}
