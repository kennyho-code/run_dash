import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalServices } from './global.services';
import { Workout } from '../models/workout.model';
import { Subject } from 'rxjs';

@Injectable()
export class WorkoutServices{
    constructor(private http: HttpClient, private globalService: GlobalServices){}

    baseUrl = this.globalService.baseUrl;
    workouts: Workout[] = [];
    workoutsChanged = new Subject<Workout[]>();

    getWorkouts(){
        const url = `${this.baseUrl}workouts`
        this.http.get(url).subscribe(
            (workouts: Workout[]) => {
                this.workouts = workouts;
                this.workoutsChanged.next(this.workouts);
            }
        )
    }
}