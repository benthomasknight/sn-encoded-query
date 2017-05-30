import { ValueComparator } from "./IComparator";

export class IsNotSameAs extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "NSAMEAS" + this.value.toString();
  }
}