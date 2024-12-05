export interface Users {
  id: number;
  name: string;
  tasks: TaskList[];
}

export interface TaskList {
  taskId: number;
  taskName: string;
  taskDescription: string;
  raisedOnDate: string;
  markedAsComplete: boolean;
}
