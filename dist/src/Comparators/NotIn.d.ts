import { MultiValueComparator } from "./IComparator";
export declare class NotIn extends MultiValueComparator {
    constructor(field: string, ...values: any[]);
    get(): string;
}
