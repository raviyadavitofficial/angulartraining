import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'multiplier'
})
export class CustomMultiplier implements PipeTransform{
    transform(value: number, multiple:number) {
        return value * multiple;
    }

}