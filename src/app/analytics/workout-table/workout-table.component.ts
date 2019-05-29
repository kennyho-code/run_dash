import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WorkoutServices } from 'src/app/core/services/workout.services';
import { Workout } from '../../core/models/workout.model'
import {WorkoutTableFilterComponent} from './workout-table-filter/workout-table-filter.component';
import {  DateSplits } from '../../core/lib/dateSplits'

@Component({
  selector: 'app-workout-table',
  templateUrl: './workout-table.component.html',
  styleUrls: ['./workout-table.component.css'],

})
export class WorkoutTableComponent implements OnInit {

  @ViewChild(WorkoutTableFilterComponent)
  private workoutTableFilterComponent: WorkoutTableFilterComponent;
  displayedColumns: string[] = ['creationdate', 'duration', 'totaldistance', 'totalenergyburned'];
  workouts: Workout[] = [];
  originalWorkouts: Workout[] = [];
  constructor(private workoutService: WorkoutServices, private dateSplit: DateSplits) { }

  ngOnInit() {
    this.workoutService.workoutsChanged.subscribe(
      (workouts: Workout[]) =>{
        this.workouts = workouts;
        this.originalWorkouts = workouts;
        this.applyDefaultFilter();
      }
    );
  }

  applyDefaultFilter(){
    this.workouts = this.originalWorkouts;
    let current_date = new Date();
    this.workouts = this.workouts.filter(w=> this.isSameMonthYear(w.creationdate, current_date.getMonth(), current_date.getFullYear()));
    let defaultWorkouts: Workout[] = []
    for(let workout of this.workouts){
      if(this.isSameMonthYear(workout.creationdate, current_date.getMonth(), current_date.getFullYear())){
        let newDate = new Date(workout['creationdate']);
        workout['creationdate'] = this.dateSplit.getDayDate(newDate);
        defaultWorkouts.push(workout)
      }
    }

    this.workouts = defaultWorkouts;
    // this.workouts = this.workouts.map(w => "${w.creationdate.getMonth()}/${w.creationdate.getDate}/${w.creationdate.getYear()}");
  }

  isSameMonthYear(dateStr, month, year){
    let d = new Date(dateStr);
    return d.getMonth() == month && d.getFullYear() == year;
  }

  onDateSelected(e){
    this.workouts = this.originalWorkouts;
    this.workouts = this.workouts.filter(w=> this.isSameMonthYear(w.creationdate, e.month(), e.year()));
  }

  onSplitsSelected(e){
    this.workouts = this.originalWorkouts;
    let splits = this.dateSplit.getDateSplits(this.workouts, e)
    this.workouts = this.dateSplit.transformSplits(splits)
  }

}
