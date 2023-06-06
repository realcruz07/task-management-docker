import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CreateUser } from '../../models/create-user.interface';
import { IRegisterUserService } from './register-user.interface';
import { User } from '../../models/user.interface';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class RegisterUserService implements IRegisterUserService {
  private url = environment.apiBaseUrl;

  public constructor(private readonly httpClient: HttpClient) {}

  public register(createUser: CreateUser): Observable<User> {
    return this.httpClient.post(`${this.url}/auth/register`, {
      ...createUser,
    }) as Observable<User>;
  }
}
