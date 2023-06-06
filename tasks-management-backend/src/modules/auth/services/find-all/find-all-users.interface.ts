import { UserDto } from '../../dto/user.dto';

export abstract class IFindAllUsersService {
  public abstract findAll(): Promise<UserDto[]>;
}
