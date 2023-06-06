import { Observable } from 'rxjs';

import { User } from '../../models/user.interface';

export abstract class IFindAllUsersService {
  public abstract findAllTasks(): Observable<User[]>;
}
