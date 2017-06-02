import { ValueComparator } from "./IComparator";
export declare class NotLike extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
}
