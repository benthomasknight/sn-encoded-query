import { ValueComparator } from "./IComparator";

export enum Direction {
  Ascending = <any>'ORDERBY',
  Descending = <any>'ORDERBYDESC'
}
export class OrderBy extends ValueComparator {
  constructor(field:string, direction:Direction) {
    super(field, direction);
  }

  get():string {
    return this.value + this.field;
  }
}