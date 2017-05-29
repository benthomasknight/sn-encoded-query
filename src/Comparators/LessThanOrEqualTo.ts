import { ValueComparator } from "./IComparator";

export class LessThanOrEqualTo extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "<=" + this.value;
  }
}