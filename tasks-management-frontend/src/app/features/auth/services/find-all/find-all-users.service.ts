import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IFindAllUsersService } from './find-all-users.interface';
import { User } from '../../models/user.interface';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class FindAllUsersService implements IFindAllUsersService {
  private url = environment.apiBaseUrl;

  public constructor(private readonly httpClient: HttpClient) {}

  public findAllTasks(): Observable<User[]> {
    return this.httpClient.get(`${this.url}/users`) as Observable<User[]>;
  }
}
