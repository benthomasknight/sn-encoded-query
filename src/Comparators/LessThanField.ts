import { ValueComparator } from "./IComparator";

export class LessThanField  extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "LT_FIELD" + this.value;
  }
}