import { MultiValueComparator } from "./IComparator";
import { TimePeriods, TimeDirection } from "./Utils";
export declare class DateLessThan extends MultiValueComparator {
    constructor(field: string, value: any, period: TimePeriods, direction: TimeDirection, compareToField: any);
    get(): string;
    static readonly TimePeriods: typeof TimePeriods;
    static readonly TimeDirection: typeof TimeDirection;
}
