import { IComparator, Comparator, IValueComparator, ValueComparator, IMultiValueComparator, MultiValueComparator } from "./IComparator";
import { Is } from "./Is";
import { Between } from "./Between";
import { DateLessThan } from "./DateLessThan";
import { LessThan } from "./LessThan";
import { DateMoreThan } from "./DateMoreThan";
import { GreaterThan } from "./GreaterThan";
import { Dynamic } from "./Dynamic";
import { EndsWith } from "./EndsWith";
import { GreaterThanField } from "./GreaterThanField";
import { GreaterThanOrEqualsField } from "./GreaterThanOrEqualsField";
import { GreaterThanOrEqualTo } from "./GreaterThanOrEqualTo";
import { GroupBy } from "./GroupBy";
import { In } from "./In";
import { IsAnything } from "./IsAnything";
import { IsEmpty } from "./IsEmpty";
import { IsEmptyString } from "./IsEmptyString";
import { IsNot } from "./IsNot";
import { IsNotEmpty } from "./IsNotEmpty";
import { IsNotSameAs } from "./IsNotSameAs";
import { IsSameAs } from "./IsSameAs";
import { LessThanField } from "./LessThanField";
import { LessThanOrEqualsField } from "./LessThanOrEqualsField";
import { LessThanOrEqualTo } from "./LessThanOrEqualTo";
import { Like } from "./Like";
import { NotIn } from "./NotIn";
import { NotLike } from "./NotLike";
import { NotOn } from "./NotOn";
import { On } from "./On";
import { OrderBy } from "./OrderBy";
import { Relative } from "./Relative";
import { StartsWith } from "./StartsWith";
import { Trend } from "./Trend";

export function parseArgs(field:string, comparator:typeof Comparator):IComparator;
export function parseArgs(field:string, comparator:typeof ValueComparator, value:any):IValueComparator;
export function parseArgs(field:string, comparator:typeof MultiValueComparator, ...values:any[]):IMultiValueComparator;
export function parseArgs(field:string, comparator:any):IValueComparator;
export function parseArgs(field:string, compOrVal:any, values?:any[]):IComparator|IValueComparator|IMultiValueComparator {
  if(typeof compOrVal === "function") {
    // Comparator has been given
    if(compOrVal.length == 1) {
      return new compOrVal(field, ...values) as IComparator;
    }
    if(compOrVal.length == 2) {
      return new compOrVal(field, ...values) as IValueComparator;
    }
    if(compOrVal.length >= 3) {
      return new compOrVal(field, ...values) as IMultiValueComparator;
    }
  }
  else if(values.length > 0) {
    // There is a text comparator
    var comp = findComparator(compOrVal);

    return new comp(field, ...values);
  }
  else {
    // assume it is an equals query
    return new Is(field, compOrVal);
  }
}


function findComparator(comp: string):any  {
  switch(comp) {
    case 'BETWEEN':
      return Between;
    case 'MORETHAN':
      return DateMoreThan;
    case 'LESSTHAN':
      return DateLessThan
    case '<':
      return LessThan;
    case '>':
      return GreaterThan;
    case 'DYNAMIC':
      return Dynamic;
    case 'ENDSWITH':
      return EndsWith;
    case 'GT_FIELD':
      return GreaterThanField;
    case 'GT_OR_EQUALS_FIELD':
      return GreaterThanOrEqualsField;
    case '>=':
      return GreaterThanOrEqualTo;
    case 'IN':
      return In;
    case '=':
      return Is;
    case 'ANYTHING':
      return IsAnything;
    case 'ISEMPTY':
      return IsEmpty;
    case 'EMPTYSTRING':
      return IsEmptyString;
    case '!=':
      return IsNot;
    case 'ISNOTEMPTY':
      return IsNotEmpty;
    case 'NSAMEAS':
      return IsNotSameAs;
    case 'SAMEAS':
      return IsSameAs;
    case 'LT_FIELD':
      return LessThanField;
    case 'LT_OR_EQUALS_FIELD':
      return LessThanOrEqualsField;
    case '<=':
      return LessThanOrEqualTo;
    case 'LIKE':
      return Like;
    case 'NOT IN':
      return NotIn;
    case 'NOT LIKE':
      return NotLike;
    case 'NOTON':
      return NotOn;
    case 'ON':
      return On;
    case 'RELATIVE':
      return Relative;
    case 'STARTSWITH':
      return StartsWith;
    case 'TREND':
      return Trend;
  }
}

// Below are options I am not sure how to handle. Will look again later
/*{"code":"SINCE", "format":""},
{"code":"MATCH_PAT", "format":""},
{"code":"MATCH_RGX", "format":""},
{"code":"INSTANCEOF", "format":""},
{"code":"VALCHANGES", "format":""},
{"code":"CHANGESFROM", "format":""},
{"code":"CHANGESTO", "format":""},
{"code":"sum", "format":""},
{"code":"avg", "format":""},
{"code":"min", "format":""},
{"code":"max", "format":""}*/