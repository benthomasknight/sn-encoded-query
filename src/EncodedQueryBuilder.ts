
import { Between } from "./Comparators/Between";
import { Comparator, IComparator, IValueComparator, ValueComparator, IMultiValueComparator, MultiValueComparator } from "./Comparators/IComparator";
import { Direction, OrderBy } from "./Comparators/OrderBy";
import { EncodedQueryPart } from "./EncodedQueryPart";
import { EncodedQueryTree } from "./EncodedQueryTree";
import { GroupBy } from "./Comparators/GroupBy";
import { Is } from "./Comparators/Is";
import { Operator } from "./EncodedQueryPart";
import { parseArgs } from "./Comparators/Comparator";
import { Trend, TrendDirection, TrendHour, TrendDay, TrendWeek, TrendMonth, TrendQuarter, TrendYear} from "./Comparators/Trend";
import { Relative, RelativeAsOf, RelativeDirection, RelativeTime } from './Comparators/Relative';

export class EncodedQueryBuilder {
  private tree:EncodedQueryTree;
  constructor() {
    this.tree = new EncodedQueryTree();
  }

  addQuery(field:string, comparator:typeof Comparator):EncodedQueryPart<IComparator>;
  addQuery(field:string, comparator:typeof ValueComparator, value:any):EncodedQueryPart<IValueComparator>;
  addQuery(field:string, comparator:typeof Between, lower:string|number|Date, higher:string|number|Date):EncodedQueryPart<IMultiValueComparator>;
  addQuery(field:string, comparator:typeof Trend, direction:TrendDirection, value:TrendHour|TrendDay|TrendWeek|TrendMonth|TrendQuarter|TrendYear):EncodedQueryPart<IMultiValueComparator>;
  addQuery(field:string, comparator:typeof Relative, direction:RelativeDirection, value:any, time:RelativeTime, asOf:RelativeAsOf):EncodedQueryPart<IMultiValueComparator>;
  addQuery(field:string, comparator:typeof MultiValueComparator, ...value:any[]):EncodedQueryPart<IMultiValueComparator>;
  addQuery(field:string, value:any):EncodedQueryPart<IValueComparator>;
  addQuery(field:string, compOrVal:any, ...values:any[]):EncodedQueryPart<IComparator|IValueComparator|IMultiValueComparator> {
    return this.tree.add(Operator.And, parseArgs(field, compOrVal, values));
  }

  addOrQuery(field:string, comparator:typeof Comparator):EncodedQueryPart<IComparator>;
  addOrQuery(field:string, comparator:typeof ValueComparator, value:any):EncodedQueryPart<IValueComparator>;
  addOrQuery(field:string, comparator:typeof Between, lower:string|number|Date, higher:string|number|Date):EncodedQueryPart<IMultiValueComparator>;
  addOrQuery(field:string, comparator:typeof Trend, direction:TrendDirection, value:TrendHour|TrendDay|TrendWeek|TrendMonth|TrendQuarter|TrendYear):EncodedQueryPart<IMultiValueComparator>;
  addOrQuery(field:string, comparator:typeof Relative, direction:RelativeDirection, value:any, time:RelativeTime, asOf:RelativeAsOf):EncodedQueryPart<IMultiValueComparator>;
  addOrQuery(field:string, comparator:typeof MultiValueComparator, ...value:any[]):EncodedQueryPart<IMultiValueComparator>;
  addOrQuery(field:string, value:any):EncodedQueryPart<IValueComparator>;
  addOrQuery(field:string, compOrVal:any, ...values:any[]):EncodedQueryPart<IComparator|IValueComparator|IMultiValueComparator> {
    return this.tree.add(Operator.NewQuery, parseArgs(field, compOrVal, values));
  }

  addOrderBy(field:string, direction?:Direction):EncodedQueryPart<OrderBy> {
    return <EncodedQueryPart<OrderBy>>this.tree.add(Operator.And, parseArgs(field, OrderBy, [direction || Direction.Ascending]));
  }

  addGroupBy(field:string):void {
    this.tree.add(Operator.GroupBy, parseArgs(field, GroupBy));
  }

  build():string {
    return this.tree.get();
  }
}