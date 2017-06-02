import { Comparator } from "./IComparator";
export declare class IsAnything extends Comparator {
    constructor(field: string);
    get(): string;
}
