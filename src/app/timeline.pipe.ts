import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeline'
})
export class TimelinePipe implements PipeTransform {

  transform(value: any): string {

    let today:any=new Date();
    let todayWithNoTime:any=new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference = Math.abs(value-today);
    const secondsInDay=86400;
    var dateDifferenceSeconds=dateDifference*0.001;

    if(dateDifferenceSeconds<60) return ` Just now`;
    else if(dateDifferenceSeconds<3600) return `${Math.floor(dateDifferenceSeconds/60)} Minutes ago`;
    else if(dateDifferenceSeconds<86400) return `${Math.floor(dateDifferenceSeconds/3600)}  Hours ago` ;
    else return `${Math.floor(dateDifferenceSeconds/86400)} Days ago`;

  }

}
