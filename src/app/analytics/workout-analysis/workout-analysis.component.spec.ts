import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutAnalysisComponent } from './workout-analysis.component';

describe('WorkoutAnalysisComponent', () => {
  let component: WorkoutAnalysisComponent;
  let fixture: ComponentFixture<WorkoutAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
