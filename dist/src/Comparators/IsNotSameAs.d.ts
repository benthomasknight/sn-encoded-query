import { ValueComparator } from "./IComparator";
export declare class IsNotSameAs extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
