import { IComparator, Comparator, IValueComparator, ValueComparator, IMultiValueComparator, MultiValueComparator } from "./IComparator";
import { Is } from "./Is";

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