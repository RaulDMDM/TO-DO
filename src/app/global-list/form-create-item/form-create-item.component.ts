import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskIntf } from '../global-list.component';

@Component({
  selector: 'app-form-create-item',
  templateUrl: './form-create-item.component.html',
  styleUrls: ['./form-create-item.component.scss'],
})
export class FormCreateItemComponent {
  newTask: TaskIntf = {
    title: '',
    description: '',
    status: '',
    id: 0,
  };

  @Output() validatedForm: EventEmitter<TaskIntf> =
    new EventEmitter<TaskIntf>();

  onSubmit(createForm: NgForm) {
    if (createForm.valid) {
      this.validatedForm.emit(this.newTask);
    }
  }
}
