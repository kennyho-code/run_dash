"use strict";
exports.__esModule = true;

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
