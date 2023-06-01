import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateItemComponent } from '../../../src/app/global-list/form-create-item/form-create-item.component';
import { HttpClientModule } from '@angular/common/http';

describe('FormCreateItemComponent', () => {
  let component: FormCreateItemComponent;
  let fixture: ComponentFixture<FormCreateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateItemComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
