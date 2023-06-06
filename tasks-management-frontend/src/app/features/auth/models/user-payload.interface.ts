import { User } from './user.interface';

export interface UserPayload {
  user: User;
  accessToken: string;
}
