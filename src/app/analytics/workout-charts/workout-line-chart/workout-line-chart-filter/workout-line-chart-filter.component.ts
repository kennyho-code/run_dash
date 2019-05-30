import { Component, OnInit } from '@angular/core';
import { WorkoutServices } from 'src/app/core/services/workout.services';

@Component({
  selector: 'app-workout-line-chart-filter',
  templateUrl: './workout-line-chart-filter.component.html',
  styleUrls: ['./workout-line-chart-filter.component.css']
})
export class WorkoutLineChartFilterComponent implements OnInit {

  constructor(private workoutService: WorkoutServices) { }

  ngOnInit() {
  }
  onSetWorkoutLineChartSplitType(splitType){
    this.workoutService.setWorklineLineChartSplitType(splitType);
  }

}
