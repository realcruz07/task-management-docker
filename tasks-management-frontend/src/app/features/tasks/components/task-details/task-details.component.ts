import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ITaskDetailsService } from '../../services/task-details/task-details.interface';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  @Input() public taskId!: number;
  @Input() public visible = false;
  @Output() public visibleChange = new EventEmitter();

  public data!: Task;

  public constructor(
    private readonly taskDetailsService: ITaskDetailsService,
  ) {}

  public ngOnInit(): void {
    this.loadData();
  }

  public cancel(): void {
    this.visibleChange.emit();
  }

  private loadData(): void {
    this.taskDetailsService.findOneTask(this.taskId).subscribe((task) => {
      this.data = task;
    });
  }
}
