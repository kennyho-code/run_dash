import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLineChartComponent } from './workout-line-chart.component';

describe('WorkoutLineChartComponent', () => {
  let component: WorkoutLineChartComponent;
  let fixture: ComponentFixture<WorkoutLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
