import { EncodedQueryPart } from "./EncodedQueryPart";
import { GroupBy } from "./Comparators/GroupBy";
import { OrderBy } from "./Comparators/OrderBy";
import { Operator } from "./EncodedQueryPart";
import { IValueComparator, IComparator, IMultiValueComparator } from "./Comparators/IComparator";

export class EncodedQueryTree {
  private parts:Array<EncodedQueryPart<IComparator|IValueComparator|IMultiValueComparator>>;
  private order:EncodedQueryPart<OrderBy>;
  private group:GroupBy;

  constructor() {
    this.parts = new Array<EncodedQueryPart<IComparator|IValueComparator|IMultiValueComparator>>();
  }

  add(operator:Operator, part:IComparator):EncodedQueryPart<IComparator>;
  add(operator:Operator, part:IValueComparator):EncodedQueryPart<IValueComparator>;
  add(operator:Operator, part:IMultiValueComparator):EncodedQueryPart<IMultiValueComparator>;
  add(operator:Operator, part:EncodedQueryPart<IComparator>):EncodedQueryPart<IComparator>;
  add(operator:Operator, part:EncodedQueryPart<IValueComparator>):EncodedQueryPart<IValueComparator>;
  add(operator:Operator, part:EncodedQueryPart<IMultiValueComparator>):EncodedQueryPart<IMultiValueComparator>;
  add(operator:Operator, part:EncodedQueryPart<IComparator|IValueComparator|IMultiValueComparator>|IComparator|IValueComparator|IMultiValueComparator):EncodedQueryPart<IComparator|IValueComparator|IMultiValueComparator> {
    // If this is the first part added, don't use the normal operator
    // Doesn't count for related list queries as they add it anyway
    if(this.parts.length === 0 && [Operator.RelatedListStart,Operator.GroupBy, Operator.OrderBy].indexOf(operator) === -1) {
      operator = Operator.Start;
    }
    else {
      // Handle related list queries, orderbys and groupbys in a different manner
      switch(operator) {
        case Operator.GroupBy:
          let tmp = EncodedQueryPart.ensurePart(operator, part);
          this.group = <GroupBy>tmp.part;
          return null;
        case Operator.OrderBy:
          if(!this.order) {
            operator = Operator.Start;
          }
          let lastPart = this.traverseOrder();
          let p = <EncodedQueryPart<OrderBy>>EncodedQueryPart.ensurePart(operator, part);

          // If an order already exists, add it to the end.
          if(lastPart) {
            lastPart.next = p;
          }
          else {
            this.order = p;
          }

          return p;
        case Operator.RelatedListStart:
        case Operator.RelatedListEnd:
          throw new Error('Related Lists not supported');
        default:
      }
    }

    let p = EncodedQueryPart.ensurePart(operator, part);
    this.parts.push(p);
    return p;
  }

  get():string {
    var str = "";
    for(let i = 0; i < this.parts.length; i++) {
      str+=this.parts[i].toString();
    }
    if(this.order) {
      if(this.parts.length !== 0) {
        str += '^';
      }
      str += this.order.toString();
    }
    if(this.group) {
      if(this.parts.length !== 0 || this.order) {
        str += '^';
      }
      str += this.group.get();
    }
    return str;
  }

  private traverseOrder():EncodedQueryPart<OrderBy> {
    if(!this.order) {
      return null;
    }
    let part = this.order;
    while(part.next) {
      part = <EncodedQueryPart<OrderBy>>part.next;
    }
    return part;
  }
}