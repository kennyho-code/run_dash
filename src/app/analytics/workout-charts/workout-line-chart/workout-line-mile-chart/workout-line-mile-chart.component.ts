import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { WorkoutServices } from '../../../../core/services/workout.services';
import {Workout} from '../../../../core/models/workout.model';
import { DateSplits } from 'src/app/core/lib/dateSplits';
@Component({
  selector: 'app-workout-line-mile-chart',
  templateUrl: './workout-line-mile-chart.component.html',
  styleUrls: ['./workout-line-mile-chart.component.css']
})
export class WorkoutLineMileChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'miles' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'pink',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: 'green',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  // public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private workoutService: WorkoutServices, private dateSplit: DateSplits) { }

  workouts: Workout[] = [];
  originalworkouts: Workout[] = [];
  ngOnInit() {
    this.workoutService.workoutsChanged.subscribe(
      (workouts: Workout[]) => {
        this.workouts = workouts;
        this.originalworkouts = this.workouts;
        this.getDefaultWorkouts();

        
      }
    )
  }

  getDefaultWorkouts(){
    this.workouts = this.originalworkouts;
    this.workouts = this.dateSplit.getDefaultWorkouts(this.workouts);

    let dates = [];
    let distances = [];
    let durations = [];
    let energyBurneds = [];

    for(let workout of this.workouts){
      dates.push(workout['creationdate']);
      distances.push(workout['totaldistance']);
    }
    this.lineChartLabels = dates;
    this.lineChartData[0].data = distances;
    this.chart.update();
  }


}
