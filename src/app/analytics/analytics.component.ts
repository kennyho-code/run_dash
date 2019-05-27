import { Component, OnInit } from '@angular/core';
import { WorkoutServices } from '../core/services/workout.services'

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private workoutService: WorkoutServices) { }

  ngOnInit() {
    this.workoutService.getWorkouts();
  }

}
