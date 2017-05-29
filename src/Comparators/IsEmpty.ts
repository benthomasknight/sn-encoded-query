import { Comparator } from "./IComparator";

export class IsEmpty extends Comparator {
  constructor(field:string) {
    super(field);
  }

  get():string {
    return this.field + "ISEMPTY";
  }
}