import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './Error.component.html',
  imports: [],
})
export class ErrorComponent {
  @Input({ required: true }) message!: string;
}
