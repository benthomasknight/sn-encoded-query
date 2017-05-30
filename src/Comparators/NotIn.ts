import { MultiValueComparator } from "./IComparator";
import * as _ from 'lodash';

export class NotIn extends MultiValueComparator {
  constructor(field:string, ...values:any[]) {
    super(field, _.flattenDeep(values));
  }

  get():string {
    return this.field + "NOT IN" + this.value.toString();
  }
}