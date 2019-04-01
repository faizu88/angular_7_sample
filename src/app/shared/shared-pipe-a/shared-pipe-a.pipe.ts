import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sharedPipeA'
})
export class SharedPipeAPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
