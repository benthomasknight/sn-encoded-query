import { MultiValueComparator } from "./IComparator";
import * as moment from 'moment';
import { DateFormats } from './Utils';

export class Between extends MultiValueComparator {
  constructor(field:string, lower:Date, higher:Date);
  constructor(field:string, lower:string, higher:string);
  constructor(field:string, lower:number, higher:number);
  constructor(field:string, lower:number|string|Date, higher:number|string|Date) {
    if(lower == null || higher == null) {
      throw new Error('A lower and higher value must be provided');
    }
    super(field, lower, higher);
  }

  get():string {
    let l = moment(this.value[0], DateFormats, true);
    let h = moment(this.value[1], DateFormats, true);

    // Dates
    if(l.isValid() && h.isValid()) {
      // Special formatting for dates
      return this.field + "BETWEEN" + this.getDateGenerationString(l) + '@' + this.getDateGenerationString(h);
    }
    // Numbers
    return this.field + "BETWEEN" + this.value[0] + '@' + this.value[1];
  }

  private getDateGenerationString(date:moment.Moment):string {
    return 'javascript:gs.dateGenerate(\'' + date.format('YYYY-MM-DD') + '\',\'' + date.format('HH:mm:ss') + '\')';
  }
}