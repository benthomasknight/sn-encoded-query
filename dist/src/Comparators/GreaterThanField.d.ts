import { ValueComparator } from "./IComparator";
export declare class GreaterThanField extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
