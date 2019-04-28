import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ratepipe'})
export class RatePipe implements PipeTransform {

public response : string;
  transform(rate: string): string {
    if(rate.length > 5 ){
        this.response = rate[0] + rate[1] + rate[2] + rate[3] + rate[4];
        return this.response;
    }else{
        return rate;
    }
  }
}