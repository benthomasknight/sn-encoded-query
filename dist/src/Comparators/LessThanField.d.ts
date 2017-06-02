import { ValueComparator } from "./IComparator";
export declare class LessThanField extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
