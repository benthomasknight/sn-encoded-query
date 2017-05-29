import { ValueComparator } from "./IComparator";

export class Is extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "=" + this.value.toString();
  }
}