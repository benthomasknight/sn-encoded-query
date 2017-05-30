import { ValueComparator } from "./IComparator";

export class StartsWith extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "STARTSWITH" + this.value.toString();
  }
}