import { Comparator } from "./IComparator";

export class IsNotEmpty extends Comparator {
  constructor(field:string) {
    super(field);
  }

  get():string {
    return this.field + "ISNOTEMPTY";
  }
}