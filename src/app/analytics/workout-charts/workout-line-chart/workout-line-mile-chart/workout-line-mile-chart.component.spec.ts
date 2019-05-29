import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLineMileChartComponent } from './workout-line-mile-chart.component';

describe('WorkoutLineMileChartComponent', () => {
  let component: WorkoutLineMileChartComponent;
  let fixture: ComponentFixture<WorkoutLineMileChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutLineMileChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutLineMileChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
