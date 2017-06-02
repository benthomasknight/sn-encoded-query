import { ValueComparator } from "./IComparator";
export declare class StartsWith extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
