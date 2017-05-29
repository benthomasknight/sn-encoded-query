
import { parseArgs } from "./Comparators/Comparator";
import { Operator } from "./EncodedQueryPart";
import { Is } from "./Comparators/Is";
import { Comparator, IComparator, IValueComparator, ValueComparator } from "./Comparators/IComparator";
import { EncodedQueryTree } from "./EncodedQueryTree";
import { EncodedQueryPart } from "./EncodedQueryPart";

export class EncodedQueryBuilder {
  private tree:EncodedQueryTree;
  constructor() {
    this.tree = new EncodedQueryTree();
  }

  addQuery(field:string, comparator:typeof Comparator):EncodedQueryPart<IComparator>;
  addQuery(field:string, comparator:typeof ValueComparator, value:any):EncodedQueryPart<IValueComparator>;
  addQuery(field:string, value:any):EncodedQueryPart<IValueComparator>;
  addQuery(field:string, compOrVal:any, value?:any):EncodedQueryPart<IComparator|IValueComparator> {
    return this.tree.add(Operator.And, parseArgs(field, compOrVal, value));
  }

  build():string {
    return this.tree.get();
  }
}