import { Component, Input } from '@angular/core';
import { TaskList } from '../types';
import { getFormattedDateFromISO } from '../../utils/date/methods';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  @Input({ required: true }) task?: TaskList;

  get formattedDate() {
    let newDate = '';
    if (this.task) {
      newDate = getFormattedDateFromISO(this.task.raisedOnDate);
    }

    return newDate;
  }
}
