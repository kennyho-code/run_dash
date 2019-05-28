import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTableFilterComponent } from './workout-table-filter.component';

describe('WorkoutTableFilterComponent', () => {
  let component: WorkoutTableFilterComponent;
  let fixture: ComponentFixture<WorkoutTableFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTableFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
