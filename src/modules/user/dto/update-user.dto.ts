import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(4)
  @MaxLength(20)
  username?: string;

  @IsString()
  @IsOptional()
  @MinLength(8)
  @MaxLength(20)
  password?: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email?: string;
}
