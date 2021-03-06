import { ValueComparator } from "./IComparator";
import { DateRelativeOn } from './Utils';
export declare class On extends ValueComparator {
    constructor(field: string, value: Date | string | DateRelativeOn);
    get(): string;
    static readonly DateRelativeOn: typeof DateRelativeOn;
}
