import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sharedPipeB'
})
export class SharedPipeBPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
