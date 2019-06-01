import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTotalComponent } from './workout-total.component';

describe('WorkoutTotalComponent', () => {
  let component: WorkoutTotalComponent;
  let fixture: ComponentFixture<WorkoutTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
