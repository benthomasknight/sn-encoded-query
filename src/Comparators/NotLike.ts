import { ValueComparator } from "./IComparator";

export class NotLike extends ValueComparator {
  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "NOT LIKE" + this.value.toString();
  }
}