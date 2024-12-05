import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ErrorComponent } from '../../components/error.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { TaskList, Users } from '../types';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list',
  imports: [
    CommonModule,
    ErrorComponent,
    SectionHeaderComponent,
    TaskCardComponent,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input({ required: true }) selectedUser?: Users;
  @Input({ required: true }) users?: Users[];

  private _taskList: TaskList[] | null = null;

  ngOnChanges() {
    if (this.selectedUser) {
      this._taskList = [...this.selectedUser.tasks]; // Initialize with the user's tasks
    }
  }

  onAddTask() {
    let newTaskId = Math.random() * 3;

    this._taskList?.unshift({
      taskId: newTaskId,
      taskName: '',
      taskDescription: '',
      markedAsComplete: false,
      raisedOnDate: new Date(Date.now()).toISOString(),
    });
  }

  setCompletedTaskId(taskId: number) {
    if (this._taskList) {
      //TODO: mark as complete in api
      this._taskList = this._taskList.filter((task) => task.taskId !== taskId);
    }
  }

  removeTask(taskId: number) {
    if (this._taskList) {
      //TODO: delete task in api
      this._taskList = this._taskList.filter((task) => task.taskId !== taskId);
    }
  }

  get taskList() {
    return this._taskList;
  }

  get taskTitle(): string {
    return this.selectedUser?.name ? `${this.selectedUser.name}'s Tasks` : '';
  }
}
