import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from '../../../src/app/global-list/list-item/list-item.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItemComponent],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
