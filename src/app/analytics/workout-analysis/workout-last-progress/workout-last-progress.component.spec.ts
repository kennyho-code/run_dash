import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLastProgressComponent } from './workout-last-progress.component';

describe('WorkoutLastProgressComponent', () => {
  let component: WorkoutLastProgressComponent;
  let fixture: ComponentFixture<WorkoutLastProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutLastProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutLastProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
