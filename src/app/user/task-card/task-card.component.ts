import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TaskList } from '../types';
import { getFormattedDateFromISO } from '../../utils/date/methods';
import { MatIconModule } from '@angular/material/icon';

export enum TextTypes {
  taskTitle = 'title',
  taskDescription = 'description',
}

@Component({
  selector: 'app-task-card',
  imports: [MatIconModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  @Input({ required: true }) task?: TaskList;
  @Output() completedTaskId = new EventEmitter<number>();
  @Output() removedTaskId = new EventEmitter<number>();

  showUpdateTaskButton: boolean = false;
  updatedTask: TaskList | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task'] && changes['task'].currentValue) {
      this.updatedTask = { ...changes['task'].currentValue };
    }
  }

  onComplete() {
    this.completedTaskId.emit(this.task?.taskId);
  }

  removeTask() {
    this.removedTaskId.emit(this.task?.taskId);
  }

  onUpdate() {
    //call an api to update tasks with this.updatedTask
    //then
    this.showUpdateTaskButton = false;
  }

  onChange(event: Event, type: string) {
    if (this.updatedTask) {
      const inputElement = event.target as HTMLTextAreaElement;
      const value = inputElement.value;
      this.showUpdateTaskButton = true;
      switch (type) {
        case TextTypes.taskTitle:
          this.updatedTask = { ...this.updatedTask, taskName: value };
          break;
        case TextTypes.taskDescription:
          this.updatedTask = { ...this.updatedTask, taskDescription: value };
          break;
        default:
          break;
      }
    }
  }

  get formattedDate() {
    let newDate = '';
    if (this.task) {
      newDate = getFormattedDateFromISO(this.task.raisedOnDate);
    }

    return newDate;
  }
}
