import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLineDurationChartComponent } from './workout-line-duration-chart.component';

describe('WorkoutLineDurationChartComponent', () => {
  let component: WorkoutLineDurationChartComponent;
  let fixture: ComponentFixture<WorkoutLineDurationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutLineDurationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutLineDurationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
