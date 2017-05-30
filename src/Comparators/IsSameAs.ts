import { ValueComparator } from "./IComparator";

export class IsSameAs extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "SAMEAS" + this.value.toString();
  }
}