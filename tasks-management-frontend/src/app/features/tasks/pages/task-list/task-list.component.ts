import { Component, OnInit } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

import { PaginationData } from '../../../../shared/models/pagination.interface';

import { ITaskListService } from '../../services/task-list/task-list.interface';
import { PaginatedTasks } from '../../models/paginated-tasks.interface';
import { Task } from '../../models/task.interface';

import { taskStatusArray } from '../../enums/task-status.enum';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  public checkedIds = new Set<number>();
  public data!: Task[];
  public isDetailsVisible = false;
  public isFormVisible = false;
  public loading = true;
  public paginatedData: PaginationData = {
    page: 1,
    limit: 10,
    filter: undefined,
  };
  public selectedTaskId: number | undefined;
  public taskStatusArray = taskStatusArray;
  public total = 0;

  public constructor(
    private readonly message: NzMessageService,
    private readonly taskListService: ITaskListService,
  ) {}

  public ngOnInit(): void {
    this.loadDataFromServer(this.paginatedData);
  }

  public onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
  }

  public onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, filter } = params;

    const paginatedData: PaginationData = {
      page: pageIndex,
      limit: pageSize,
    };

    if (filter[0].value) {
      paginatedData.filter = filter[0];
    }

    this.paginatedData = paginatedData;
    this.loadDataFromServer(this.paginatedData);
  }

  public openDetails(): void {
    this.selectedTaskId = this.checkedIds.values().next().value;
    this.isDetailsVisible = !this.isDetailsVisible;
  }

  public openForm(isAddOperation = true): void {
    this.selectedTaskId = isAddOperation
      ? undefined
      : this.checkedIds.values().next().value;
    this.isFormVisible = !this.isFormVisible;
  }

  public reloadDataSource(isSaveOperation = true): void {
    this.isFormVisible = false;
    if (isSaveOperation) {
      this.loadDataFromServer(this.paginatedData);
    }
  }

  public removeTasks(): void {
    this.loading = true;
    this.taskListService
      .removeTasks(Array.from(this.checkedIds.values()))
      .subscribe(() => {
        this.message.create('success', `the tasks was successfully removed`);
        this.loadDataFromServer(this.paginatedData);
      });
  }

  public updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.checkedIds.add(id);
    } else {
      this.checkedIds.delete(id);
    }
  }

  private loadDataFromServer(paginationData: PaginationData): void {
    this.loading = true;
    this.taskListService
      .findAllTasks(paginationData)
      .subscribe((data: PaginatedTasks) => {
        this.data = data.tasks;
        this.total = data.total;
        this.loading = false;
      });
  }

  protected readonly Number = Number;
}
