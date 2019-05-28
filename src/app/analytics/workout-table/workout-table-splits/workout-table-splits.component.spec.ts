import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTableSplitsComponent } from './workout-table-splits.component';

describe('WorkoutTableSplitsComponent', () => {
  let component: WorkoutTableSplitsComponent;
  let fixture: ComponentFixture<WorkoutTableSplitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTableSplitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTableSplitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
