import { ValueComparator } from "./IComparator";
export declare class LessThanOrEqualsField extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
