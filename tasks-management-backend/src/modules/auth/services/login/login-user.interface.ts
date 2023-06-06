import { LoginUserDto } from '../../dto/login-user.dto';
import { UserPayloadDto } from '../../dto/user-payload.dto';

export abstract class ILoginUserService {
  public abstract login(user: LoginUserDto): Promise<UserPayloadDto>;
}
