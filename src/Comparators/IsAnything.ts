import { Comparator } from "./IComparator";

export class IsAnything extends Comparator {
  constructor(field:string) {
    super(field);
  }

  get():string {
    return this.field + "ANYTHING";
  }
}