import { Observable } from 'rxjs';

import { LoginUser } from '../../models/login-user.interface';
import { UserPayload } from '../../models/user-payload.interface';

export abstract class ILoginUserService {
  public abstract login(loginUser: LoginUser): Observable<UserPayload>;
}
