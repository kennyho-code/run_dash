"use strict";
exports.__esModule = true;
var Workout = /** @class */ (function () {
    function Workout(creationdate, startdate, enddate, sourcename, sourceversion, totaldistance, totaldistanceunit, duration, durationunit, totalenergyburned, totalenergyburnedunit, workoutactivitytype) {
        this.creationdate = creationdate;
        this.startdate = startdate;
        this.enddate = enddate;
        this.sourcename = sourcename;
        this.sourceversion = sourceversion;
        this.totaldistance = totaldistance;
        this.totaldistanceunit = totaldistanceunit;
        this.duration = duration;
        this.durationunit = durationunit;
        this.totalenergyburned = totalenergyburned;
        this.totaldistanceunit = totalenergyburnedunit;
        this.workoutactivitytype = workoutactivitytype;
    }
    return Workout;
}());
exports.Workout = Workout;
