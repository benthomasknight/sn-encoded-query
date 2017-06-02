import { ValueComparator } from "./IComparator";
export declare class GreaterThanOrEqualsField extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
