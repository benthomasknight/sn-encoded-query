import { MultiValueComparator } from "./IComparator";

export enum RelativeDirection {
  After = <any>'GT',
  Before = <any>'LT',
  On = <any>'EE',
  OnOrAfter = <any>'GE',
  OnOrBefore = <any>'LE'
}

export enum RelativeTime {
  Hours = <any>'hour',
  Minutes = <any>'minute',
  Days = <any>'dayofweek',
  Months = <any>'month',
  Quarters = <any>'quarter',
  Years = <any>'year'
}

export enum RelativeAsOf {
  BeforeNow = <any>'ago',
  FromNow = <any>'ahead'
}


export class Relative extends MultiValueComparator {
  constructor(field:string, direction:RelativeDirection, value:any, time:RelativeTime, asOf:RelativeAsOf) {
    super(field, direction, value, time, asOf);
  }

  get():string {
    return this.field + "RELATIVE" + this.value[0] + '@' + this.value[2] + '@' + this.value[3] + '@' + this.value[1];
  }

  public static readonly RelativeAsOf = RelativeAsOf;
  public static readonly RelativeTime = RelativeTime;
  public static readonly RelativeDirection = RelativeDirection;
}