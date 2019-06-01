import { Component, OnInit } from '@angular/core';
import { DateSplits } from 'src/app/core/lib/dateSplits';
import { WorkoutServices } from 'src/app/core/services/workout.services';
import { Workout } from 'src/app/core/models/workout.model';

@Component({
  selector: 'app-workout-total',
  templateUrl: './workout-total.component.html',
  styleUrls: ['./workout-total.component.css']
})
export class WorkoutTotalComponent implements OnInit {

  constructor(private dateSplit: DateSplits, private workoutService: WorkoutServices) { }

  workouts: Workout[] = [];
  originalWorkouts: Workout[] = [];
  totalMiles = 0;
  ngOnInit() {
    this.workoutService.workoutsChanged.subscribe(
      (workouts: Workout[]) => {
        this.workouts = workouts;
        this.originalWorkouts = workouts; 
        this.setTotalMiles();
      }
    );
  }

  setTotalMiles(){
    this.workouts = this.originalWorkouts;
    this.totalMiles = this.dateSplit.getTotalMiles(this.workouts);
  }



}
