import { ValueComparator } from "./IComparator";
export declare class GreaterThan extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
