import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateUserDto } from '../dto/create-user.dto';
import { ILoginUserService } from '../services/login/login-user.interface';
import { IRegisterUserService } from '../services/register/register-user.interface';
import { LoginUserDto } from '../dto/login-user.dto';
import { UserDto } from '../dto/user.dto';
import { UserPayloadDto } from '../dto/user-payload.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  public constructor(
    private readonly loginUserService: ILoginUserService,
    private readonly registerUserService: IRegisterUserService,
  ) {}

  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  public login(@Body() user: LoginUserDto): Promise<UserPayloadDto> {
    return this.loginUserService.login(user);
  }

  @Post('register')
  @UsePipes(new ValidationPipe({ transform: true }))
  public register(@Body() user: CreateUserDto): Promise<UserDto> {
    return this.registerUserService.register(user);
  }
}
