import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutAnalysisMileAverageComponent } from './workout-analysis-mile-average.component';

describe('WorkoutAnalysisMileAverageComponent', () => {
  let component: WorkoutAnalysisMileAverageComponent;
  let fixture: ComponentFixture<WorkoutAnalysisMileAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutAnalysisMileAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutAnalysisMileAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
