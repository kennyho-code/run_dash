export class Workout{
    creationdate: string;
    startdate: string;
    enddate: string;
    sourcename: string;
    sourceversion: string;
    totaldistance: number;
    totaldistanceunit: string;
    duration : number;
    durationunit: string;
    totalenergyburned: number;
    totalenergyburnedunit: string;
    workoutactivitytype: string;

    constructor(creationdate, startdate, enddate, sourcename, sourceversion, totaldistance, totaldistanceunit, duration, durationunit, totalenergyburned, totalenergyburnedunit, workoutactivitytype ){
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

}