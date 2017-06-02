import { MultiValueComparator } from "./IComparator";
export declare class In extends MultiValueComparator {
    constructor(field: string, ...values: any[]);
    get(): string;
}
