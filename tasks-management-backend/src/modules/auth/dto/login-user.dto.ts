import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    example: 'example@gmail.com',
    description: 'The email of the user',
  })
  @IsString()
  @IsEmail()
  public email: string;

  @ApiProperty({
    example: 'Probando123*',
    description: 'The password of the user',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(15)
  public password: string;
}
