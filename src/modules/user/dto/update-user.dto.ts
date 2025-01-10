import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'john_doe', description: 'The username of the user' })
  @IsString()
  @IsOptional()
  @MinLength(4)
  @MaxLength(20)
  username?: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
  })
  @IsString()
  @IsOptional()
  @MinLength(8)
  @MaxLength(20)
  password?: string;

  @ApiProperty({
    example: 'H4q2t@example.com',
    description: 'The email of the user',
  })
  @IsString()
  @IsOptional()
  @IsEmail()
  email?: string;
}
