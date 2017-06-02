import { ValueComparator } from "./IComparator";
export declare class Like extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
