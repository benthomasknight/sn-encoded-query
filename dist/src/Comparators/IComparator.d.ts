export interface IComparator {
    field: string;
    get(): string;
}
export declare abstract class Comparator implements IComparator {
    field: string;
    constructor(field: string);
    get(): string;
}
export interface IValueComparator extends IComparator {
    value: any;
}
export declare abstract class ValueComparator extends Comparator implements IValueComparator {
    value: any;
    constructor(field: string, value: any);
    get(): string;
}
export interface IMultiValueComparator extends IValueComparator {
    value: any[];
}
export declare abstract class MultiValueComparator extends Comparator implements IMultiValueComparator {
    value: any[];
    constructor(field: string, ...value: any[]);
    get(): string;
}
