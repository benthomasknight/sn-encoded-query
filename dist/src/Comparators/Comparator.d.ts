import { IComparator, Comparator, IValueComparator, ValueComparator, IMultiValueComparator, MultiValueComparator } from "./IComparator";
export declare function parseArgs(field: string, comparator: typeof Comparator): IComparator;
export declare function parseArgs(field: string, comparator: typeof ValueComparator, value: any): IValueComparator;
export declare function parseArgs(field: string, comparator: typeof MultiValueComparator, ...values: any[]): IMultiValueComparator;
export declare function parseArgs(field: string, comparator: any): IValueComparator;
