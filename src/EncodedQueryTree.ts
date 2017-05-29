import { EncodedQueryPart } from "./EncodedQueryPart";
import { Operator } from "./EncodedQueryPart";
import { IValueComparator, IComparator } from "./Comparators/IComparator";

export class EncodedQueryTree {
  private parts:Array<EncodedQueryPart<IComparator|IValueComparator>>;

  constructor() {
    this.parts = new Array<EncodedQueryPart<IComparator|IValueComparator>>();
  }

  add(operator:Operator, part:IComparator):EncodedQueryPart<IComparator>;
  add(operator:Operator, part:IValueComparator):EncodedQueryPart<IValueComparator>;
  add(operator:Operator, part:EncodedQueryPart<IComparator>):EncodedQueryPart<IComparator>;
  add(operator:Operator, part:EncodedQueryPart<IValueComparator>):EncodedQueryPart<IValueComparator>;
  add(operator:Operator, part:EncodedQueryPart<IComparator|IValueComparator>|IComparator|IValueComparator):EncodedQueryPart<IComparator|IValueComparator> {
    // If this is the first part added, don't use the normal operator
    // Doesn't count for related list queries as they add it anyway
    if(this.parts.length === 0 && operator != Operator.RelatedListStart) {
      operator = Operator.Start;
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
    return str;
  }
}