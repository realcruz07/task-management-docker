import { hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { CreateUserDto } from '../../dto/create-user.dto';
import { IRegisterUserService } from './register-user.interface';
import { UserDto } from '../../dto/user.dto';
import { UserEntity } from '../../entities/user.entity';

@Injectable()
export class RegisterUserService implements IRegisterUserService {
  public constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async register(user: CreateUserDto): Promise<UserDto> {
    try {
      const { password } = user;
      const plainToHash = await hash(password, 10);

      const newUser = { ...user, password: plainToHash };
      const createdUser = await this.userRepository.save(newUser);
      return plainToInstance(UserDto, createdUser);
    } catch (error) {
      throw error;
    }
  }
}
