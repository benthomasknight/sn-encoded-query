import { ValueComparator } from "./IComparator";
import * as moment from 'moment';
import { DateFormats, DateRelativeOn } from './Utils';

export class On extends ValueComparator {
  constructor(field:string, value:Date|string|DateRelativeOn) {
    super(field, value);
    if(!(value in DateRelativeOn) && !moment(value, DateFormats, true).isValid()) {
      throw new Error('Date provided is invalid');
    }
  }

  get():string {
    if(this.value in DateRelativeOn) {
      return this.field + 'ON' + this.value;
    }
    var d = moment(this.value, DateFormats, true).format('YYYY-MM-DD');
    return this.field + "ON" + d + '@javascript:gs.dateGenerate(\'' + d + '\',\'start\')@javascript:gs.dateGenerate(\'' + d + '\',\'end\')';
  }

  public static readonly DateRelativeOn = DateRelativeOn;
}