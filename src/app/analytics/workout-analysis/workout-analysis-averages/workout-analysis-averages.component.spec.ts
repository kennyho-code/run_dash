import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutAnalysisAveragesComponent } from './workout-analysis-averages.component';

describe('WorkoutAnalysisAveragesComponent', () => {
  let component: WorkoutAnalysisAveragesComponent;
  let fixture: ComponentFixture<WorkoutAnalysisAveragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutAnalysisAveragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutAnalysisAveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
