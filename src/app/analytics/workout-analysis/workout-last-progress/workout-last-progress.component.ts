import { Component, OnInit } from '@angular/core';
import { DateSplits } from 'src/app/core/lib/dateSplits';
import { WorkoutServices } from 'src/app/core/services/workout.services';
import { Workout } from 'src/app/core/models/workout.model';

@Component({
  selector: 'app-workout-last-progress',
  templateUrl: './workout-last-progress.component.html',
  styleUrls: ['./workout-last-progress.component.css']
})
export class WorkoutLastProgressComponent implements OnInit {

  constructor(private dateSplit: DateSplits, private workoutService: WorkoutServices) { }

  workouts: Workout[] = [];
  originalWorkouts: Workout[] = [];
  lastTwo: Workout[] = [];
  lastDifferences = {
    'distance': 0,
    'duration': 0,
    'energyburned': 0
  }
  lastPercentages = {
    'distance': 0,
    'duration': 0,
    'energyburned': 0
  }
  ngOnInit() {
    this.workoutService.workoutsChanged.subscribe(
      (workouts: Workout[]) => {
        this.workouts = workouts;
        this.originalWorkouts = this.workouts;
        this.getDefaultLastProgress();
      }
    )
  }

  getDefaultLastProgress(){
    this.workouts = this.originalWorkouts;
    let splits = this.dateSplit.getDateSplits(this.workouts, 'week')
    let weekSplits = this.dateSplit.transformSplits(splits)
    this.lastTwo = weekSplits.slice(-2, weekSplits.length)
    this.getDifferences();
    this.getPercentages()
    console.log(this.lastTwo);
    console.log(this.lastDifferences)
    console.log(this.lastPercentages);
  }

  getDifferences(){

    this.lastDifferences = {
      'distance': this.lastTwo[1]['totaldistance'] - this.lastTwo[0]['totaldistance'],
      'duration': this.lastTwo[1]['duration'] - this.lastTwo[0]['duration'],
      'energyburned': this.lastTwo[1]['totalenergyburned'] - this.lastTwo[0]['totalenergyburned']
    }
  }

  getPercentages(){
    this.lastPercentages = {
      'distance': this.getPercent(this.lastTwo[1]['totaldistance'], this.lastTwo[0]['totaldistance']),
      'duration': this.getPercent(this.lastTwo[1]['duration'], this.lastTwo[0]['duration']),
      'energyburned': this.getPercent(this.lastTwo[1]['totalenergyburned'], this.lastTwo[0]['totalenergyburned'])
    }
  }

  getPercent(num1, num2){
    return (num1 / num2 - 1) * 100
  }

  getSign(num){
    if(num == 0){
      return ''
    }
    return num > 0 ? '+' : '-'
  }

  getColor(num){
    if(num == 0){
      return 'gray'
    }
    return num > 0 ? 'green' : 'red'
  }



}
