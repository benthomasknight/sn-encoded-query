//import {IType} from './Comparator';
import { OrderBy, Direction } from "./Comparators/OrderBy";
import { parseArgs } from "./Comparators/Comparator";
import { IMultiValueComparator, IValueComparator, IComparator, Comparator, ValueComparator, MultiValueComparator } from "./Comparators/IComparator";

export enum Operator {
  Start = <any>'',
  And = <any>'^',
  Or = <any>'^OR',
  NewQuery = <any>'^NQ',
  RelatedListStart = <any>'^RLQUERY',
  RelatedListEnd = <any>'^ENDRLQUERY',
  GroupBy = <any>'GROUPBY',
  OrderBy = <any>'ORDERBY'
}

export interface IPart<T extends Comparator|ValueComparator|MultiValueComparator> {
  operator:Operator;
  part:T;
  next:EncodedQueryPart<IComparator|IValueComparator|IMultiValueComparator>;

  and(field:string, comparator:typeof Comparator):EncodedQueryPart<IComparator>;
  and(field:string, comparator:typeof ValueComparator, value:any):EncodedQueryPart<IValueComparator>;
  and(field:string, comparator:typeof MultiValueComparator, value:any):EncodedQueryPart<IMultiValueComparator>;
  and(field:string, value:any):EncodedQueryPart<IValueComparator>;
  //and(field:string, ...value:any[]):EncodedQueryPart<IMultiValueComparator>;

  or(field:string, comparator:typeof Comparator):EncodedQueryPart<IComparator>;
  or(field:string, comparator:typeof ValueComparator, value:any):EncodedQueryPart<IValueComparator>;
  or(field:string, comparator:typeof MultiValueComparator, value:any):EncodedQueryPart<IMultiValueComparator>;
  or(field:string, value:any):EncodedQueryPart<IValueComparator>;
}

export class EncodedQueryPart<T extends IComparator|IValueComparator> implements IPart<T> {
  public next:EncodedQueryPart<IComparator|IValueComparator>;

  constructor(operator:Operator, part:IComparator);
  constructor(operator:Operator, part:IValueComparator);
  constructor(public operator:Operator, public part:T){}

  and(field:string, comparator:typeof Comparator):EncodedQueryPart<IComparator>;
  and(field:string, comparator:typeof OrderBy, value:Direction):EncodedQueryPart<IValueComparator>;
  and(field:string, comparator:typeof ValueComparator, value:any):EncodedQueryPart<IValueComparator>;
  and(field:string, comparator:typeof MultiValueComparator, value:any):EncodedQueryPart<IMultiValueComparator>;
  and(field:string, value:any):EncodedQueryPart<IValueComparator>;
  and(field:string, compOrVal:any, ...value:any[]):EncodedQueryPart<IComparator|IValueComparator|IMultiValueComparator> {
    let p = EncodedQueryPart.ensurePart(Operator.And, parseArgs(field, compOrVal, value));
    this.next = p;
    return <EncodedQueryPart<T>>p;
  }

  or(field:string, comparator:typeof Comparator):EncodedQueryPart<IComparator>;
  or(field:string, comparator:typeof OrderBy, value:Direction):EncodedQueryPart<IValueComparator>;
  or(field:string, comparator:typeof ValueComparator, value:any):EncodedQueryPart<IValueComparator>;
  or(field:string, comparator:typeof MultiValueComparator, value:any):EncodedQueryPart<IMultiValueComparator>;
  or(field:string, value:any):EncodedQueryPart<IValueComparator>;
  or(field:string, compOrVal:any, ...value:any[]):EncodedQueryPart<IComparator|IValueComparator|IMultiValueComparator> {
    // It is not logical to or an order by, so and it instead
    if(compOrVal === typeof OrderBy) {
      return this.and(field, compOrVal, value);
    }

    let p = EncodedQueryPart.ensurePart(Operator.Or, parseArgs(field, compOrVal, value));
    this.next = p;
    return <EncodedQueryPart<T>>p;
  }

  toString():string {
    let str = this.operator + this.part.get();
    if(this.next) {
      // The below operator can exist at the start, so does not have a chevron attached. If it is not at the start we need to manually add it
      if(this.next.operator === Operator.OrderBy) {
        str += '^';
      }
      str+=this.next.toString();
    }
    return str;
  }

  static ensurePart(operator:Operator, part:EncodedQueryPart<Comparator|ValueComparator|MultiValueComparator>|IComparator|IValueComparator|IMultiValueComparator):EncodedQueryPart<IComparator|IValueComparator|IMultiValueComparator> {
    if(part instanceof Comparator) {
      return new EncodedQueryPart<IComparator>(operator, part);
    }
    else if(part instanceof ValueComparator) {
      return new EncodedQueryPart<IValueComparator>(operator, part);
    }
    else if(part instanceof MultiValueComparator) {
      return new EncodedQueryPart<IMultiValueComparator>(operator, part);
    }
    else {
      return <EncodedQueryPart<IComparator|IValueComparator|IMultiValueComparator>>part;
    }
  }
}