import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { DUMMY_USERS } from './user-list/models/user-model';
import { TaskListComponent } from './task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { Users } from './types';

@Component({
  selector: 'app-user',
  imports: [UserListComponent, TaskListComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users: Users[] = DUMMY_USERS;
  selectedUser?: Users;
  isModalOpen = !!this.selectedUser;

  closeModal() {
    this.isModalOpen = false;
    this.selectedUser = undefined;
  }

  selectUser(user: Users) {
    this.selectedUser = user;
    this.isModalOpen = true;
  }
}
