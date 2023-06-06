export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export const taskStatusArray = [
  {
    text: 'Pending',
    value: TaskStatus.PENDING,
  },
  {
    text: 'In Progress',
    value: TaskStatus.IN_PROGRESS,
  },
  {
    text: 'Completed',
    value: TaskStatus.COMPLETED,
  },
];
