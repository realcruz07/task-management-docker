import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IFindAllUsersService } from './find-all-users.interface';
import { UserDto } from '../../dto/user.dto';
import { UserEntity } from '../../entities/user.entity';

@Injectable()
export class FindAllUsersService implements IFindAllUsersService {
  public constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async findAll(): Promise<UserDto[]> {
    return await this.userRepository.find();
  }
}
