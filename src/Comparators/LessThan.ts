import { ValueComparator } from "./IComparator";

export class LessThan  extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "<" + this.value;
  }
}