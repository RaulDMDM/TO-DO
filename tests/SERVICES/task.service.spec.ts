import { TestBed } from '@angular/core/testing';

import { TaskService } from '../../src/app/SERVICES/task.service';
import { HttpClientModule } from '@angular/common/http';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TaskService
      ]
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
