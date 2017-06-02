import { MultiValueComparator } from "./IComparator";
import { TimePeriods, TimeDirection } from "./Utils";

export class DateLessThan extends MultiValueComparator {
  constructor(field:string, value:any, period:TimePeriods, direction:TimeDirection, compareToField:any) {
    super(field, value, period, direction ,compareToField);
  }

  get():string {
    return this.field + "LESSTHAN" + this.value[3] + '@' + this.value[1] + '@' + this.value[2] + '@' + this.value[0];
  }

  public static readonly TimePeriods = TimePeriods;
  public static readonly TimeDirection = TimeDirection;
}
