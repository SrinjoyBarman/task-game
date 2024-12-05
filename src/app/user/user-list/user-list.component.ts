import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from '../types';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  @Input({ required: true }) users?: Users[];
  @Input({ required: true }) selectedUser?: Users;
  //normal users assignment

  //legacy
  @Output() selectUser = new EventEmitter<Users>();

  //new
  // setUser = output<string>();

  //also using input
  // newUsers = input.required<Users[]>();
  // initialName = this.newUsers();

  //signals assignment for state updates
  // selectedUserName = signal('');

  // selectedUserNameId = computed(
  //   () => this.users?.find((user) => user.name === this.selectedUserName())?.id
  // );

  get imagePath(): string {
    return '';
  }

  //use the above as a property - "imagePath"

  onclick = (user: Users) => {
    //normal set
    // this.selectedUserName = user;

    //signal set
    // this.selectedUserName.set(user);

    //emit
    this.selectUser.emit(user);
    // this.setUser.emit(user);
  };
}
