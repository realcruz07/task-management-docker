import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { IFindAllUsersService } from '../services/find-all/find-all-users.interface';
import { UserDto } from '../dto/user.dto';

@ApiBearerAuth()
@ApiTags('users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  public constructor(
    private readonly findAllUsersService: IFindAllUsersService,
  ) {}

  @Get()
  public findAll(): Promise<UserDto[]> {
    return this.findAllUsersService.findAll();
  }
}
