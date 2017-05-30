import { ValueComparator } from "./IComparator";

export class GreaterThanField extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "GT_FIELD" + this.value;
  }
}