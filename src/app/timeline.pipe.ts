import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeline'
})
export class TimelinePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
