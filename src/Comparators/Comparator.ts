import { IComparator, Comparator, IValueComparator, ValueComparator, IMultiValueComparator, MultiValueComparator } from "./IComparator";
import { Is } from "./Is";

export { Between } from "./Between";
export { Direction } from "./OrderBy";
export { EndsWith } from "./EndsWith";
export { GreaterThan } from "./GreaterThan";
export { GreaterThanField } from "./GreaterThanField";
export { GreaterThanOrEqualsField } from "./GreaterThanOrEqualsField";
export { GreaterThanOrEqualTo } from "./GreaterThanOrEqualTo";
export { In } from "./In";
export { Is } from "./Is";
export { IsAnything } from "./IsAnything";
export { IsEmpty } from "./IsEmpty";
export { IsNot } from "./IsNot";
export { IsNotEmpty } from "./IsNotEmpty";
export { IsNotSameAs } from "./IsNotSameAs";
export { IsSameAs } from "./IsSameAs";
export { LessThan } from "./LessThan";
export { LessThanField } from "./LessThanField";
export { LessThanOrEqualsField } from "./LessThanOrEqualsField";
export { LessThanOrEqualTo } from "./LessThanOrEqualTo";
export { Like } from './Like';
export { NotIn } from "./NotIn";
export { NotLike } from './NotLike';
export { NotOn } from './NotOn';
export { On } from './On';
export { Relative, RelativeAsOf, RelativeDirection, RelativeTime } from './Relative';
export { StartsWith } from "./StartsWith";
export { Trend, TrendDirection, TrendHour, TrendDay, TrendWeek, TrendMonth, TrendQuarter, TrendYear } from "./Trend";

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
  else {
    // assume it is an equals query
    return new Is(field, compOrVal);
  }
}



export interface IType {
  code:string;
  format:string;
}



let types:Array<IType> = [
  {"code":"MORETHAN", "format":""},
  {"code":"LESSTHAN", "format":""}

    // Below are options I am not sure how to handle. Will look again later
    /*{"code":"SINCE", "format":""}, // Unknown
    {"code":"MATCH_PAT", "format":""},
    {"code":"MATCH_RGX", "format":""},
    {"code":"EMPTYSTRING", "format":""},
    {"code":"DYNAMIC", "format":""},
    {"code":"INSTANCEOF", "format":""},
    {"code":"VALCHANGES", "format":""},
    {"code":"CHANGESFROM", "format":""},
    {"code":"CHANGESTO", "format":""},
    {"code":"sum", "format":""},
    {"code":"avg", "format":""},
    {"code":"min", "format":""},
    {"code":"max", "format":""}*/
  ];