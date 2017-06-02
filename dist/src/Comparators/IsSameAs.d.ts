import { ValueComparator } from "./IComparator";
export declare class IsSameAs extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
