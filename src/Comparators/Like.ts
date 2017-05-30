import { ValueComparator } from "./IComparator";

export class Like extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "LIKE" + this.value.toString();
  }
}