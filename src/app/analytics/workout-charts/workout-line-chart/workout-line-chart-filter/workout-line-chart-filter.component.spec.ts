import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLineChartFilterComponent } from './workout-line-chart-filter.component';

describe('WorkoutLineChartFilterComponent', () => {
  let component: WorkoutLineChartFilterComponent;
  let fixture: ComponentFixture<WorkoutLineChartFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutLineChartFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutLineChartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
