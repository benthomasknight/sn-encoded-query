import { ValueComparator } from "./IComparator";
export declare class EndsWith extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
