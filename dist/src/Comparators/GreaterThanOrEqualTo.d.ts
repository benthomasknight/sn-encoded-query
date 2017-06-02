import { ValueComparator } from "./IComparator";
export declare class GreaterThanOrEqualTo extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
