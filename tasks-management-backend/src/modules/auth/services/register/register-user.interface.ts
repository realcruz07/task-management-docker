import { CreateUserDto } from '../../dto/create-user.dto';
import { UserDto } from '../../dto/user.dto';

export abstract class IRegisterUserService {
  public abstract register(user: CreateUserDto): Promise<UserDto>;
}
