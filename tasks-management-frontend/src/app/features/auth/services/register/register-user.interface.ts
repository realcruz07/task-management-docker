import { Observable } from 'rxjs';

import { CreateUser } from '../../models/create-user.interface';
import { User } from '../../models/user.interface';

export abstract class IRegisterUserService {
  public abstract register(createUser: CreateUser): Observable<User>;
}
