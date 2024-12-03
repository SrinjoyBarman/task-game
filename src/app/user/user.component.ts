import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { DUMMY_USERS } from './user-list/models/user-model';
import { Users } from './types';
import { TaskListComponent } from './task-list/task-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [UserListComponent, TaskListComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users = DUMMY_USERS;
  selectedUser: string | null = null;
  isModalOpen = !!this.selectedUser;

  @ViewChild('taskList') modal!: ElementRef;

  closeModal() {
    this.isModalOpen = false;
    this.selectedUser = null;
  }

  selectUser(userName: string) {
    console.log(userName, 'helooooooo');
    this.selectedUser = userName;
    this.isModalOpen = true;
  }
}
