import { Comparator } from "./IComparator";

export class GroupBy extends Comparator {
  constructor(field:string) {
    super(field);
  }

  get():string {
    return 'GROUPBY' + this.field;
  }
}