import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WorkoutServices } from 'src/app/core/services/workout.services';
import { Workout } from '../../core/models/workout.model'
import {WorkoutTableFilterComponent} from './workout-table-filter/workout-table-filter.component';
import { months } from 'moment';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


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
  constructor(private workoutService: WorkoutServices) { }

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

    
  }

  isSameMonthYear(dateStr, month, year){
    let d = new Date(dateStr);
    return d.getMonth() == month && d.getFullYear() == year;

  }

  onDateSelected(e){
    this.workouts = this.originalWorkouts;
    console.log(this.workouts);
    this.workouts = this.workouts.filter(w=> this.isSameMonthYear(w.creationdate, e.month(), e.year()));
  }

}
