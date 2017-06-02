import { MultiValueComparator } from "./IComparator";
export declare class Between extends MultiValueComparator {
    constructor(field: string, lower: Date, higher: Date);
    constructor(field: string, lower: string, higher: string);
    constructor(field: string, lower: number, higher: number);
    get(): string;
    private getDateGenerationString(date);
}
