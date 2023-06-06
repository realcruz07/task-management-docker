import { UserDto } from './user.dto';

export class UserPayloadDto {
  public user: UserDto;
  public accessToken: string;
}
