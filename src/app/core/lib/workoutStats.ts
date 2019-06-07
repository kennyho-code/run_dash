import { Injectable } from '@angular/core';
import { DateSplits } from './dateSplits';

@Injectable()
export class WorkoutStats{

    constructor(private dateSplit: DateSplits){}

    getAverages(workouts, splitType){
        let splits = this.dateSplit.getDateSplits(workouts, splitType);
        let transformedSplits = this.dateSplit.transformSplits(splits);
        let avgDistance = 0;
        let avgDuration = 0;
        let avgEnergyBurned = 0
        for(let row of transformedSplits){
            avgDistance += row['totaldistance'];
            avgDuration += row['duration'];
            avgEnergyBurned += row['totalenergyburned'];
        }
        let avgRow = {
            'avgDistance': avgDistance,
            'avgDuration': avgDuration,
            'avgEnergyBurned': avgEnergyBurned,
            'avgPace': avgDistance / avgDuration
        }
        return avgRow;
    }
}
