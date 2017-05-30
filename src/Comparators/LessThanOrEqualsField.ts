import { ValueComparator } from "./IComparator";

export class LessThanOrEqualsField extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "LT_OR_EQUALS_FIELD" + this.value;
  }
}