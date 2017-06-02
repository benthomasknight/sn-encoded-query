import { MultiValueComparator } from "./IComparator";
export declare enum RelativeDirection {
    After,
    Before,
    On,
    OnOrAfter,
    OnOrBefore,
}
export declare enum RelativeTime {
    Hours,
    Minutes,
    Days,
    Months,
    Quarters,
    Years,
}
export declare enum RelativeAsOf {
    BeforeNow,
    FromNow,
}
export declare class Relative extends MultiValueComparator {
    constructor(field: string, direction: RelativeDirection, value: any, time: RelativeTime, asOf: RelativeAsOf);
    get(): string;
    static readonly RelativeAsOf: typeof RelativeAsOf;
    static readonly RelativeTime: typeof RelativeTime;
    static readonly RelativeDirection: typeof RelativeDirection;
}
