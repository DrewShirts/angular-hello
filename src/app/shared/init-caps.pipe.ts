import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initCaps'
})
export class InitCapsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
