import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondCustomPipe'
})
export class SecondCustomPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
