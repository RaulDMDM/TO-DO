import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(task: any[], status: string) {
    if (!task) return [];
    if (!status) return task;

    return task.filter((task) => {
      return Object.keys(task).some((key) => {
        return String(task[key]).toLowerCase().includes(status.toLowerCase());
      });
    });
  }
}
