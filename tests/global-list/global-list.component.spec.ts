import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalListComponent } from '../../src/app/global-list/global-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from '../../src/app/global-list/filter.pipe';

describe('GlobalListComponent', () => {
  let component: GlobalListComponent;
  let fixture: ComponentFixture<GlobalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalListComponent,FilterPipe ],
      imports: [HttpClientModule,
      FilterPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
