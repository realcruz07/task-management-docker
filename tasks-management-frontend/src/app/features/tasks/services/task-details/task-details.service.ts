import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ITaskDetailsService } from './task-details.interface';
import { Task } from '../../models/task.interface';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class TaskDetailsService implements ITaskDetailsService {
  private url = environment.apiBaseUrl;

  public constructor(private readonly httpClient: HttpClient) {}

  public findOneTask(id: number): Observable<Task> {
    return this.httpClient.get(`${this.url}/tasks/${id}`) as Observable<Task>;
  }
}
