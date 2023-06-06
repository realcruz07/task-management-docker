import { Provider } from '@nestjs/common';

import { FindAllUsersService } from './find-all/find-all-users.service';
import { IFindAllUsersService } from './find-all/find-all-users.interface';
import { ILoginUserService } from './login/login-user.interface';
import { IRegisterUserService } from './register/register-user.interface';
import { LoginUserService } from './login/login-user.service';
import { RegisterUserService } from './register/register-user.service';

export const userServices: Provider[] = [
  {
    provide: IFindAllUsersService,
    useClass: FindAllUsersService,
  },
  {
    provide: ILoginUserService,
    useClass: LoginUserService,
  },
  {
    provide: IRegisterUserService,
    useClass: RegisterUserService,
  },
];
