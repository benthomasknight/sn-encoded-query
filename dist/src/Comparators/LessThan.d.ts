import { ValueComparator } from "./IComparator";
export declare class LessThan extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
