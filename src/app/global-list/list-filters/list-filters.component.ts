import { Component, EventEmitter, Input, Output, DoCheck } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss'],
})
export class ListFiltersComponent implements DoCheck {
  @Output() filterValue: EventEmitter<string> = new EventEmitter<string>();
  @Input() taskList: Task[];

  itemCount = 0;
  pendingCount = 0;

  ngDoCheck(): void {
    this.itemCount = this.taskList?.length;
    this.pendingCount = this.taskList?.filter(
      (task) => task.status === 'Pending'
    ).length;
  }

  selFilter(selectedFilter: string) {
    console.log();
    switch (selectedFilter) {
      case '':
        this.filterValue.emit(selectedFilter);
        break;
      case 'Pending':
        this.filterValue.emit(selectedFilter);
        break;
      case 'Complete':
        this.filterValue.emit(selectedFilter);
        break;
    }
  }
}
