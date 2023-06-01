import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskIntf } from '../global-list.component';
import { TaskService } from '../../SERVICES/task.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  constructor(private taskService: TaskService) {}

  @Output('sortTaskList') sortTaskList: EventEmitter<any> = new EventEmitter();
  @Output('deleteTask') deleteTask: EventEmitter<any> = new EventEmitter();
  @Input() task: TaskIntf;

  deleteItem(task: TaskIntf) {
    if (confirm('are you sure to delete ' + task.title)) {
      this.deleteTask.emit(task.id);
    }
  }

  changeStatus(task: TaskIntf) {
    if (task?.status === 'Pending') {
      task.status = 'Complete';
      this.taskService.updateTask(task).subscribe();
      this.sortTaskList.emit();
    } else {
      task.status = 'Pending';
      this.taskService.updateTask(task).subscribe();
      this.sortTaskList.emit();
    }
  }
}
