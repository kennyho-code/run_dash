"use strict";
exports.__esModule = true;
var workouts = [
    {
        "creationdate": "2016-11-25T16:16:07Z",
        "startdate": "2016-11-25T15:58:42Z",
        "enddate": "2016-11-25T16:15:59Z",
        "sourcename": "Nike Run Club",
        "sourceversion": "1611092002",
        "totaldistance": 2.016404642887629,
        "totaldistanceunit": "mi",
        "duration": 17.28132258256277,
        "durationunit": "min",
        "totalenergyburned": 251.515,
        "totalenergyburnedunit": "kcal",
        "workoutactivitytype": "HKWorkoutActivityTypeRunning"
    },
    {
        "creationdate": "2016-11-26T14:39:11Z",
        "startdate": "2016-11-26T14:22:39Z",
        "enddate": "2016-11-26T14:39:03Z",
        "sourcename": "Nike Run Club",
        "sourceversion": "1611092002",
        "totaldistance": 2.003157896061453,
        "totaldistanceunit": "mi",
        "duration": 16.40252153078715,
        "durationunit": "min",
        "totalenergyburned": 251.809,
        "totalenergyburnedunit": "kcal",
        "workoutactivitytype": "HKWorkoutActivityTypeRunning"
    },
    {
        "creationdate": "2016-11-27T15:47:13Z",
        "startdate": "2016-11-27T15:30:14Z",
        "enddate": "2016-11-27T15:47:05Z",
        "sourcename": "Nike Run Club",
        "sourceversion": "1611092002",
        "totaldistance": 2.011136214507229,
        "totaldistanceunit": "mi",
        "duration": 16.85148598353068,
        "durationunit": "min",
        "totalenergyburned": 251.693,
        "totalenergyburnedunit": "kcal",
        "workoutactivitytype": "HKWorkoutActivityTypeRunning"
    },
    {
        "creationdate": "2016-11-28T12:50:11Z",
        "startdate": "2016-11-28T12:32:34Z",
        "enddate": "2016-11-28T12:50:02Z",
        "sourcename": "Nike Run Club",
        "sourceversion": "1611092002",
        "totaldistance": 2.015456319287026,
        "totaldistanceunit": "mi",
        "duration": 17.46430501540502,
        "durationunit": "min",
        "totalenergyburned": 250.667,
        "totalenergyburnedunit": "kcal",
        "workoutactivitytype": "HKWorkoutActivityTypeRunning"
    },
    {
        "creationdate": "2016-11-28T23:00:24Z",
        "startdate": "2016-11-28T22:42:52Z",
        "enddate": "2016-11-28T23:00:16Z",
        "sourcename": "Nike Run Club",
        "sourceversion": "1611092002",
        "totaldistance": 2.028217708581935,
        "totaldistanceunit": "mi",
        "duration": 17.39615410168966,
        "durationunit": "min",
        "totalenergyburned": 252.905,
        "totalenergyburnedunit": "kcal",
        "workoutactivitytype": "HKWorkoutActivityTypeRunning"
    },
    {
        "creationdate": "2016-11-29T14:38:04Z",
        "startdate": "2016-11-29T14:20:28Z",
        "enddate": "2016-11-29T14:37:57Z",
        "sourcename": "Nike Run Club",
        "sourceversion": "1611092002",
        "totaldistance": 2.058006243537843,
        "totaldistanceunit": "mi",
        "duration": 17.47462755044301,
        "durationunit": "min",
        "totalenergyburned": 257.187,
        "totalenergyburnedunit": "kcal",
        "workoutactivitytype": "HKWorkoutActivityTypeRunning"
    },
    {
        "creationdate": "2016-11-29T23:48:22Z",
        "startdate": "2016-11-29T23:31:52Z",
        "enddate": "2016-11-29T23:48:14Z",
        "sourcename": "Nike Run Club",
        "sourceversion": "1611092002",
        "totaldistance": 2.014535506661081,
        "totaldistanceunit": "mi",
        "duration": 16.36753833293915,
        "durationunit": "min",
        "totalenergyburned": 253.715,
        "totalenergyburnedunit": "kcal",
        "workoutactivitytype": "HKWorkoutActivityTypeRunning"
    },
    {
        "creationdate": "2016-11-30T12:53:44Z",
        "startdate": "2016-11-30T12:36:58Z",
        "enddate": "2016-11-30T12:53:36Z",
        "sourcename": "Nike Run Club",
        "sourceversion": "1611092002",
        "totaldistance": 2.007890564011066,
        "totaldistanceunit": "mi",
        "duration": 16.62973023255666,
        "durationunit": "min",
        "totalenergyburned": 251.288,
        "totalenergyburnedunit": "kcal",
        "workoutactivitytype": "HKWorkoutActivityTypeRunning"
    },
    {
        "creationdate": "2016-12-01T15:13:59Z",
        "startdate": "2016-12-01T14:57:26Z",
        "enddate": "2016-12-01T15:13:51Z",
        "sourcename": "Nike Run Club",
        "sourceversion": "1611092002",
        "totaldistance": 2.003493348842722,
        "totaldistanceunit": "mi",
        "duration": 16.41705311536789,
        "durationunit": "min",
        "totalenergyburned": 250.672,
        "totalenergyburnedunit": "kcal",
        "workoutactivitytype": "HKWorkoutActivityTypeRunning"
    },
    {
        "creationdate": "2016-12-02T13:00:32Z",
        "startdate": "2016-12-02T12:42:15Z",
        "enddate": "2016-12-02T13:00:23Z",
        "sourcename": "Nike Run Club",
        "sourceversion": "1611092002",
        "totaldistance": 2.001057738962459,
        "totaldistanceunit": "mi",
        "duration": 18.13586405118307,
        "durationunit": "min",
        "totalenergyburned": 248.481,
        "totalenergyburnedunit": "kcal",
        "workoutactivitytype": "HKWorkoutActivityTypeRunning"
    }
];

class DateSplits{
    getStartMonthDate(date) {
        return date.getMonth() + " " + date.getFullYear();
    }
    getStartWeekDate(date) {
        date.setDate(date.getDate() - date.getDay());
    return date.getMonth() + " " + date.getDate() + " " + date.getFullYear();
}
    getStartYearDate(date) {
        date.setDate(date.getDate() - date.getDay());
        return "" + date.getFullYear();
    }   
    getDateSplits(workouts, timeRange) {
        var getTimeRangeStr = {
            'week': getStartWeekDate,
            'month': getStartMonthDate,
            'year': getStartYearDate
        }[timeRange];
        var splits = {};
        for (var _i = 0, workouts_1 = workouts; _i < workouts_1.length; _i++) {
            var workout = workouts_1[_i];
            var d = new Date(workout.creationdate);
            var startDate = getTimeRangeStr(d);
            if (startDate in splits) {
                splits[startDate].push(workout);
            }
            else {
                splits[startDate] = [workout];
            }
        }
        return splits;
    }

    transformSplits(splits) {
        var transformedSplits = [];
        for (var datekey in splits) {
            var rows = splits[datekey];
            var totalDistance = 0.0;
            var totalDuration = 0.0;
            var totalEnergyBurned = 0.0;
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                totalDistance += row['totaldistance'];
                totalDuration += row['duration'];
                totalEnergyBurned += row['totalenergyburned'];
            }
            var transformedRow = {
                'dateKey': datekey,
                'avgDistance': totalDistance / rows.length,
                'avgDuration': totalDuration / rows.length,
                'avgEnergyBurned': totalEnergyBurned / rows.length
            };
            transformedSplits.push(transformedRow);
        }
        return transformedSplits;
    }
}
export {DateSplits}
var weeksplits = getDateSplits(workouts, 'week');
// let monthsplits = getDateSplits(workouts, 'month')
// console.log(Object.keys(weeksplits));
// console.log(Object.keys(monthsplits));
console.log(transformSplits(weeksplits));
