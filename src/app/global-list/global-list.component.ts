import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../SERVICES/task.service';

@Component({
  selector: 'app-global-list',
  templateUrl: './global-list.component.html',
})
export class GlobalListComponent implements OnInit {
  status = '';
  taskList: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  onValidatedForm(formData: TaskIntf) {
    let currentId = Math.max.apply(
      Math,
      this.taskList.map(function (Task) {
        return Task.id;
      })
    );
    let newId = 0;

    if (currentId == -Infinity) {
      newId = 1;
    } else {
      newId = currentId + 1;
    }

    let newTask = new Task(
      formData.title!,
      formData.description!,
      'Pending',
      newId
    );
    this.taskService.setTask(newTask).subscribe((res) => {
      this.getTasks();
      this.sortTaskList();
    });
  }

  getTasks() {
    this.taskService.getTasks().subscribe((res) => {
      this.taskList = <any>res;
      this.sortTaskList();
    });
  }

  onFilterSelected(filter: string) {
    this.status = filter;
  }

  sortTaskList(): void {
    this.taskList.sort((a, b) => {
      if (a.status === 'Complete' && b.status === 'Pending') {
        return 1;
      }
      if (a.status === 'Pending' && b.status === 'Complete') {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  }

  deleteTask(taskToDel: number) {
    this.taskService.deleteTask(taskToDel).subscribe((res) => {
      this.getTasks();
      this.sortTaskList();
    });
    this.getTasks();
  }
}

export interface TaskIntf {
  title?: string;
  description?: string;
  status?: string;
  id?: number;
}
