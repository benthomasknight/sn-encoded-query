import { MultiValueComparator } from "./IComparator";
import * as _ from 'lodash';

export class In extends MultiValueComparator {
  constructor(field:string, ...values:any[]) {
    super(field, _.flattenDeep(values));
  }

  get():string {
    return this.field + "IN" + this.value.toString();
  }
}