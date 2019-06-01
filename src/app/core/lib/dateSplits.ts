import { Workout } from '../models/workout.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DateSplits{

    getDayDate(date){
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    getStartMonthDate(date){
        return `${date.getMonth() + 1}/${date.getFullYear()}`;

    }

    getStartWeekDate(date){
        date.setDate(date.getDate() - date.getDay())
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    getStartYearDate(date){
        return `${date.getFullYear()}`;
    }

    getDateSplits(workouts, timeRange){
        let getTimeRangeStr = {
            'day': this.getDayDate,
            'week': this.getStartWeekDate,
            'month': this.getStartMonthDate,
            'year': this.getStartYearDate
        }[timeRange]

        let splits = {}
        for(let workout of workouts){
            let d = new Date(workout.creationdate)
            let startDate = getTimeRangeStr(d)
            if(startDate in splits){
                splits[startDate].push(workout)
            }
            else{
                splits[startDate] = [workout]
            }
        }
        return splits
    }


    transformSplits(splits){
        let transformedSplits = [];
        for(let datekey in splits){
            let rows = splits[datekey];
            let totalDistance = 0.0;
            let totalDuration = 0.0;
            let totalEnergyBurned = 0.0;
            for(let row of rows){
                totalDistance += row['totaldistance'];
                totalDuration += row['duration']
                totalEnergyBurned += row['totalenergyburned']
            }
            let transformedRow = {
                'creationdate': datekey,
                'totaldistance': totalDistance / rows.length,
                'duration': totalDuration / rows.length,
                'totalenergyburned': totalEnergyBurned / rows.length
            }
            transformedSplits.push(transformedRow);
        }
        return transformedSplits;
    }

    isSameMonthYear(dateStr, month, year){
        let d = new Date(dateStr);
        return d.getMonth() == month && d.getFullYear() == year;
      }

    getDefaultWorkouts(workouts){
        workouts = workouts.slice(-30, workouts.length)
        for(let workout of workouts){
            let newDate = new Date(workout['creationdate']);
            workout['creationdate'] = this.getDayDate(newDate);
        }
        return workouts;
    }

    getAverages(workouts, splitType){
        workouts = this.getDefaultWorkouts(workouts);
        let splits = this.getDateSplits(workouts, splitType);
        let transformedSplits = this.transformSplits(splits);
        let avgDistance = 0;
        let avgDuration = 0;
        let avgEnergyBurned = 0
        for(let row of transformedSplits){
            avgDistance += row['totaldistance'];
            avgDuration += row['duration'];
            avgEnergyBurned += row['totalenergyburned'];
        }
        let avgRow = {
            'avgDistance': avgDistance / transformedSplits.length,
            'avgDuration': avgDuration / transformedSplits.length,
            'avgEnergyBurned': avgEnergyBurned / transformedSplits.length,
            'avgPace': avgDuration / avgDistance
        }
        return avgRow;
    }

    getTotalMiles(workouts){
        let total = 0;
        for(let workout of workouts){
            total += workout['totaldistance']
        }
        return total;
    }



}
