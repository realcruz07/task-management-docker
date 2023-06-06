import { compare } from 'bcrypt';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { ILoginUserService } from './login-user.interface';
import { LoginUserDto } from '../../dto/login-user.dto';
import { UserDto } from '../../dto/user.dto';
import { UserEntity } from '../../entities/user.entity';
import { UserPayloadDto } from '../../dto/user-payload.dto';

@Injectable()
export class LoginUserService implements ILoginUserService {
  public constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  public async login(user: LoginUserDto): Promise<UserPayloadDto> {
    const { email, password } = user;
    const existingUser = await this.userRepository.findOneBy({ email });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    const passwordMatch = await compare(password, existingUser.password);

    if (!passwordMatch) {
      throw new ForbiddenException('Invalid password');
    }

    const token = this.jwtService.sign({
      id: existingUser.id,
      email: existingUser.email,
    });

    return {
      user: plainToInstance(UserDto, existingUser),
      accessToken: token,
    };
  }
}
