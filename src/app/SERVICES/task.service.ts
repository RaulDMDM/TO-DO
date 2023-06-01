import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskIntf } from '../global-list/global-list.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(){
    return this.http.get('http://localhost:3000/getTaskList');
  }

  setTask(newTask: Object){
    return this.http.post('http://localhost:3000/setTask', newTask)
  }

  deleteTask(id: number){
    return this.http.delete('http://localhost:3000/deleteTask/' + id)
  }

  updateTask( task: TaskIntf){
    return this.http.put('http://localhost:3000/updateTask/' + task.id, task)
  }
}
