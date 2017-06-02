import { ValueComparator } from "./IComparator";
export declare class IsNot extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
