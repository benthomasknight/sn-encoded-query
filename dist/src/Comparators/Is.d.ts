import { ValueComparator } from "./IComparator";
export declare class Is extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
