import { ValueComparator } from "./IComparator";
export declare enum Direction {
    Ascending,
    Descending
}
export declare class OrderBy extends ValueComparator {
    constructor(field: string, direction: Direction);
    get(): string;
}
