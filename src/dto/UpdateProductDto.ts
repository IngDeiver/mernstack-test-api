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
  @IsUrl()
  imageUrl!: string;

  @IsNumber()
  @IsOptional()
  price!: number;
}
