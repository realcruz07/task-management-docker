import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

import { ITaskDetailsService } from '../../services/task-details/task-details.interface';
import { ITaskFormService } from '../../services/task-form/task-form.interface';

import { taskPriorityArray } from '../../enums/task-priority.enum';
import { taskStatusArray } from '../../enums/task-status.enum';
import { IFindAllUsersService } from '../../../auth/services/find-all/find-all-users.interface';
import { User } from '../../../auth/models/user.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input()
  public taskId: number | undefined;
  @Input()
  public visible = false;
  @Output()
  public visibleChange = new EventEmitter<boolean>();

  public isLoading = false;
  public taskForm!: FormGroup;
  public taskPriorityArray = taskPriorityArray;
  public taskStatusArray = taskStatusArray;
  public users: User[] = [];

  public constructor(
    private readonly findAllUsersService: IFindAllUsersService,
    private readonly formBuilder: FormBuilder,
    private readonly message: NzMessageService,
    private readonly taskDetailsService: ITaskDetailsService,
    private readonly taskFormService: ITaskFormService,
  ) {}

  public ngOnInit(): void {
    this.createForm();
    this.loadDataInForm();
    this.loadUserData();
  }

  public cancel(): void {
    this.isLoading = false;
    this.visibleChange.emit(false);
  }

  public submit(): void {
    this.taskId ? this.updateTask() : this.createTask();
  }

  private createForm(): void {
    this.taskForm = this.formBuilder.group({
      description: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      priority: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      status: null,
      title: [null, [Validators.required]],
      user: null,
    });
  }

  private createTask(): void {
    this.isLoading = true;
    const task = this.taskForm.value;
    delete task.status;

    this.taskFormService.createTask(this.taskForm.value).subscribe(() => {
      this.isLoading = false;
      this.visibleChange.emit(true);
      this.message.create('success', `the task was successfully created`);
    });
  }

  private loadUserData(): void {
    this.findAllUsersService.findAllTasks().subscribe((users) => {
      this.users = users;
    });
  }

  private loadDataInForm(): void {
    if (this.taskId) {
      this.isLoading = true;
      this.taskDetailsService
        .findOneTask(this.taskId as number)
        .subscribe((task) => {
          this.taskForm.patchValue({
            ...task,
            user: task.user.id,
          });
          this.isLoading = false;
        });
    }
  }

  private updateTask(): void {
    this.isLoading = true;
    const task = this.taskForm.value;
    task.id = this.taskId;

    this.taskFormService.updateTask(task).subscribe(() => {
      this.isLoading = false;
      this.visibleChange.emit(true);
      this.message.create('success', `the task was successfully updated`);
    });
  }
}
