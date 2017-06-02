import { Comparator } from "./IComparator";

export class IsEmptyString extends Comparator {
  constructor(field:string) {
    super(field);
  }

  get():string {
    return this.field + "EMPTYSTRING";
  }
}