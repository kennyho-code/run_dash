import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLineEnergyBurnedChartComponent } from './workout-line-energy-burned-chart.component';

describe('WorkoutLineEnergyBurnedChartComponent', () => {
  let component: WorkoutLineEnergyBurnedChartComponent;
  let fixture: ComponentFixture<WorkoutLineEnergyBurnedChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutLineEnergyBurnedChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutLineEnergyBurnedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
