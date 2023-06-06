import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'example@gmail.com',
    description: 'The email of the user',
  })
  @IsString()
  @IsEmail()
  public email: string;

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsString()
  public name: string;

  @ApiProperty({
    example: 'Probando123*',
    description: 'The password of the user',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(15)
  @IsStrongPassword()
  public password: string;
}
