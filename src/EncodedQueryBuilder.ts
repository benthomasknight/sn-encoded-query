
import { GroupBy } from "./Comparators/GroupBy";
import { Direction, OrderBy } from "./Comparators/OrderBy";
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

  addOrQuery(field:string, comparator:typeof Comparator):EncodedQueryPart<IComparator>;
  addOrQuery(field:string, comparator:typeof ValueComparator, value:any):EncodedQueryPart<IValueComparator>;
  addOrQuery(field:string, value:any):EncodedQueryPart<IValueComparator>;
  addOrQuery(field:string, compOrVal:any, value?:any):EncodedQueryPart<IComparator|IValueComparator> {
    return this.tree.add(Operator.NewQuery, parseArgs(field, compOrVal, value));
  }

  addOrderBy(field:string, direction?:Direction):EncodedQueryPart<OrderBy> {
    return <EncodedQueryPart<OrderBy>>this.tree.add(Operator.And, parseArgs(field, OrderBy, direction || Direction.Ascending));
  }

  addGroupBy(field:string):void {
    this.tree.add(Operator.GroupBy, parseArgs(field, GroupBy));
  }

  build():string {
    return this.tree.get();
  }
}