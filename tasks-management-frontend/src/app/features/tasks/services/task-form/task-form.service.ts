import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ITaskFormService } from './task-form.interface';
import { Task } from '../../models/task.interface';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class TaskFormService implements ITaskFormService {
  private url = environment.apiBaseUrl;

  public constructor(private readonly httpClient: HttpClient) {}

  public createTask(task: Partial<Task>): Observable<Task> {
    return this.httpClient.post(`${this.url}/tasks`, {
      ...task,
    }) as Observable<Task>;
  }

  public updateTask(task: Task): Observable<Task> {
    return this.httpClient.patch(`${this.url}/tasks/${task.id}`, {
      ...task,
    }) as Observable<Task>;
  }
}
