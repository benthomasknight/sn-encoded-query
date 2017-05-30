import { ValueComparator } from "./IComparator";

export class GreaterThanOrEqualsField extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "GT_OR_EQUALS_FIELD" + this.value;
  }
}