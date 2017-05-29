
import { IComparator, Comparator, IValueComparator, ValueComparator } from "./IComparator";
import { Is } from "./Is";

export { Direction, OrderBy } from "./OrderBy";
export { LessThanOrEqualTo } from "./LessThanOrEqualTo";
export { LessThan } from "./LessThan";
export { IsNotEmpty } from "./IsNotEmpty";
export { IsNot } from "./IsNot";
export { IsEmpty } from "./IsEmpty";
export { Is } from "./Is";
export { GroupBy } from "./GroupBy";
export { GreaterThanOrEqualTo } from "./GreaterThanOrEqualTo";
export { GreaterThan } from "./GreaterThan";

export function parseArgs(field:string, comparator:typeof Comparator):IComparator;
export function parseArgs(field:string, comparator:typeof ValueComparator, value:any):IValueComparator;
export function parseArgs(field:string, comparator:any):IValueComparator;
export function parseArgs(field:string, compOrVal:any, ...values:any[]):IComparator|IValueComparator {
  if(typeof compOrVal === "function") {
    // Comparator has been given
    if(compOrVal.length == 1) {
      return new compOrVal(field) as IComparator;
    }
    if(compOrVal.length == 2) {
      return new compOrVal(field, values[0]) as IValueComparator;
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
    {"code":"=", "format":"{0}{1}{2}"},
    {"code":"!=", "format":"{0}{1}{2}"},
    {"code":"ISEMPTY", "format":"{0}{1}"},
    {"code":"ISNOTEMPTY", "format":"{0}{1}"},
    {"code":"<", "format":"{0}{1}{2}"},
    {"code":">", "format":"{0}{1}{2}"},
    {"code":"<=", "format":"{0}{1}{2}"},
    {"code":">=", "format":"{0}{1}{2}"},
    {"code":"BETWEEN", "format":"{0}{1}{2}@{3}"},
    {"code":"ANYTHING", "format":"{0}{1}"},
    {"code":"SAMEAS", "format":"{0}{1}{2}"},
    {"code":"NSAMEAS", "format":"{0}{1}{2}"},
    {"code":"GT_FIELD", "format":"{0}{1}{2}"},
    {"code":"LT_FIELD", "format":"{0}{1}{2}"},
    {"code":"GT_OR_EQUALS_FIELD", "format":"{0}{1}{2}"},
    {"code":"LT_OR_EQUALS_FIELD", "format":"{0}{1}{2}"},
    {"code":"DATEPART", "format":"{0}{1}{2}{4}"},
    {"code":"RELATIVE", "format":"{0}{1}{2}{4}"},
    {"code":"IN", "format":"{0}{1}{2}"},
    {"code":"NOT IN", "format":"{0}{1}{2}"},
    {"code":"LIKE", "format":"{0}{1}{2}"},
    {"code":"STARTSWITH", "format":"{0}{1}{2}"},
    {"code":"ENDSWITH", "format":"{0}{1}{2}"},
    {"code":"NOT LIKE", "format":"{0}{1}{2}"}

    // Below are options I am not sure how to handle. Will look again later
    /*{"code":"ON", "format":"{0}{1}{2}{4}"}, // Calendar specific. Quite complex so leaving for now
    {"code":"NOTON", "format":"{0}{1}{2}{4}"}, // Calendar specific. Quite complex so leaving for now
    {"code":"SINCE", "format":""}, // Unknown
    {"code":"MORETHAN", "format":""}, // Calendar specific. Quite complex so leaving for now
    {"code":"LESSTHAN", "format":""}, // Calendar specific. Quite complex so leaving for now
    {"code":"MATCH_PAT", "format":""},
    {"code":"MATCH_RGX", "format":""},
    {"code":"EMPTYSTRING", "format":""},
    {"code":"DYNAMIC", "format":""},
    {"code":"ascending", "format":""},
    {"code":"descending", "format":""},
    {"code":"INSTANCEOF", "format":""},
    {"code":"VALCHANGES", "format":""},
    {"code":"CHANGESFROM", "format":""},
    {"code":"CHANGESTO", "format":""},
    {"code":"sum", "format":""},
    {"code":"avg", "format":""},
    {"code":"min", "format":""},
    {"code":"max", "format":""}*/
  ];