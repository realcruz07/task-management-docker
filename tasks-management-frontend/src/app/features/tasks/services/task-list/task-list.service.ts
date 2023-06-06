import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ITaskListService } from './task-list.interface';
import { PaginatedTasks } from '../../models/paginated-tasks.interface';

import { environment } from '../../../../../environments/environment';
import { PaginationData } from '../../../../shared/models/pagination.interface';

@Injectable()
export class TaskListService implements ITaskListService {
  private url = environment.apiBaseUrl;

  public constructor(private readonly httpClient: HttpClient) {}

  public findAllTasks({
    page,
    limit,
    filter,
  }: PaginationData): Observable<PaginatedTasks> {
    let params = new HttpParams().append('page', page).append('limit', limit);

    if (filter) {
      params = params.append('filter', JSON.stringify(filter));
    }

    return this.httpClient.get(`${this.url}/tasks`, {
      params,
    }) as Observable<PaginatedTasks>;
  }

  public removeTasks(ids: number[]): Observable<number[]> {
    return this.httpClient.delete(`${this.url}/tasks`, {
      body: ids,
    }) as Observable<number[]>;
  }
}
