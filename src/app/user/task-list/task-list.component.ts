import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ErrorComponent } from '../../components/error.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { Users } from '../types';
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

  get taskList() {
    if (this.selectedUser && this.selectedUser.tasks.length > 0) {
      return this.selectedUser.tasks;
    } else {
      return null;
    }
  }

  get taskTitle(): string {
    return this.selectedUser?.name ? `${this.selectedUser.name}'s Tasks` : '';
  }
}
