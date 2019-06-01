import { Component, OnInit } from '@angular/core';
import { WorkoutServices } from 'src/app/core/services/workout.services';
import { Workout } from 'src/app/core/models/workout.model';
import { DateSplits } from 'src/app/core/lib/dateSplits';


@Component({
  selector: 'app-workout-analysis-averages',
  templateUrl: './workout-analysis-averages.component.html',
  styleUrls: ['./workout-analysis-averages.component.css']
})
export class WorkoutAnalysisAveragesComponent implements OnInit {

  constructor(private workoutService: WorkoutServices, private dateSplit: DateSplits) { }

  workouts: Workout[] = []
  originalWorkouts: Workout[] = []
  averages:any = {}

  ngOnInit() {
    this.workoutService.workoutsChanged.subscribe(
      (workouts: Workout[]) =>{
        this.workouts = workouts;
        this.originalWorkouts = workouts;
        this.setDefaultAverage();
      }
    );
  }

  setDefaultAverage(){
    this.workouts = this.originalWorkouts
    this.averages = this.dateSplit.getAverages(this.workouts, 'day');
  }

}
