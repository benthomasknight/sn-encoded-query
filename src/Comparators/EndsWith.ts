import { ValueComparator } from "./IComparator";

export class EndsWith extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "ENDSWITH" + this.value.toString();
  }
}