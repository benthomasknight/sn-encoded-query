import { TimeDirection } from "./Comparators/Utils";
import { TimePeriods } from "./Comparators/Utils";
import { Between } from "./Comparators/Between";
import { Comparator, IComparator, IValueComparator, ValueComparator, IMultiValueComparator, MultiValueComparator } from "./Comparators/IComparator";
import { Direction, OrderBy } from "./Comparators/OrderBy";
import { EncodedQueryPart } from "./EncodedQueryPart";
import { DateMoreThan } from "./Comparators/DateMoreThan";
import { DateLessThan } from "./Comparators/DateLessThan";
import { Trend, TrendDirection, TrendHour, TrendDay, TrendWeek, TrendMonth, TrendQuarter, TrendYear } from "./Comparators/Trend";
import { Relative, RelativeAsOf, RelativeDirection, RelativeTime } from './Comparators/Relative';
export declare class EncodedQueryBuilder {
    private tree;
    constructor();
    addQuery(field: string, comparator: typeof Comparator): EncodedQueryPart<IComparator>;
    addQuery(field: string, comparator: typeof ValueComparator, value: any): EncodedQueryPart<IValueComparator>;
    addQuery(field: string, comparator: typeof Between, lower: string | number | Date, higher: string | number | Date): EncodedQueryPart<IMultiValueComparator>;
    addQuery(field: string, comparator: typeof Trend, direction: TrendDirection, value: TrendHour | TrendDay | TrendWeek | TrendMonth | TrendQuarter | TrendYear): EncodedQueryPart<IMultiValueComparator>;
    addQuery(field: string, comparator: typeof Relative, direction: RelativeDirection, value: any, time: RelativeTime, asOf: RelativeAsOf): EncodedQueryPart<IMultiValueComparator>;
    addQuery(field: string, comparator: typeof DateMoreThan | typeof DateLessThan, value: number | string, period: TimePeriods, direction: TimeDirection, comparisonField: string): EncodedQueryPart<IMultiValueComparator>;
    addQuery(field: string, comparator: typeof MultiValueComparator, ...value: any[]): EncodedQueryPart<IMultiValueComparator>;
    addQuery(field: string, value: any): EncodedQueryPart<IValueComparator>;
    addOrQuery(field: string, comparator: typeof Comparator): EncodedQueryPart<IComparator>;
    addOrQuery(field: string, comparator: typeof ValueComparator, value: any): EncodedQueryPart<IValueComparator>;
    addOrQuery(field: string, comparator: typeof Between, lower: string | number | Date, higher: string | number | Date): EncodedQueryPart<IMultiValueComparator>;
    addOrQuery(field: string, comparator: typeof Trend, direction: TrendDirection, value: TrendHour | TrendDay | TrendWeek | TrendMonth | TrendQuarter | TrendYear): EncodedQueryPart<IMultiValueComparator>;
    addOrQuery(field: string, comparator: typeof Relative, direction: RelativeDirection, value: any, time: RelativeTime, asOf: RelativeAsOf): EncodedQueryPart<IMultiValueComparator>;
    addOrQuery(field: string, comparator: typeof DateMoreThan | typeof DateLessThan, value: number | string, period: TimePeriods, direction: TimeDirection, comparisonField: string): EncodedQueryPart<IMultiValueComparator>;
    addOrQuery(field: string, comparator: typeof MultiValueComparator, ...value: any[]): EncodedQueryPart<IMultiValueComparator>;
    addOrQuery(field: string, value: any): EncodedQueryPart<IValueComparator>;
    addOrderBy(field: string, direction?: Direction): EncodedQueryPart<OrderBy>;
    addGroupBy(field: string): void;
    build(): string;
}
