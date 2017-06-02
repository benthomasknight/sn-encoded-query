import { ValueComparator } from "./IComparator";
export declare class LessThanOrEqualTo extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
