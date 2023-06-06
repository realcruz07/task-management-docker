import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ILoginUserService } from './login-user.interface';
import { LoginUser } from '../../models/login-user.interface';
import { UserPayload } from '../../models/user-payload.interface';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class LoginUserService implements ILoginUserService {
  private url = environment.apiBaseUrl;

  public constructor(private readonly httpClient: HttpClient) {}

  public login(loginUser: LoginUser): Observable<UserPayload> {
    return this.httpClient.post(`${this.url}/auth/login`, {
      ...loginUser,
    }) as Observable<UserPayload>;
  }
}
