import { OrderBy, Direction } from "./Comparators/OrderBy";
import { IMultiValueComparator, IValueComparator, IComparator, Comparator, ValueComparator, MultiValueComparator } from "./Comparators/IComparator";
export declare enum Operator {
    Start,
    And,
    Or,
    NewQuery,
    RelatedListStart,
    RelatedListEnd,
    GroupBy,
    OrderBy,
}
export interface IPart<T extends Comparator | ValueComparator | MultiValueComparator> {
    operator: Operator;
    part: T;
    next: EncodedQueryPart<IComparator | IValueComparator | IMultiValueComparator>;
    and(field: string, comparator: typeof Comparator): EncodedQueryPart<IComparator>;
    and(field: string, comparator: typeof ValueComparator, value: any): EncodedQueryPart<IValueComparator>;
    and(field: string, comparator: typeof MultiValueComparator, value: any): EncodedQueryPart<IMultiValueComparator>;
    and(field: string, value: any): EncodedQueryPart<IValueComparator>;
    or(field: string, comparator: typeof Comparator): EncodedQueryPart<IComparator>;
    or(field: string, comparator: typeof ValueComparator, value: any): EncodedQueryPart<IValueComparator>;
    or(field: string, comparator: typeof MultiValueComparator, value: any): EncodedQueryPart<IMultiValueComparator>;
    or(field: string, value: any): EncodedQueryPart<IValueComparator>;
}
export declare class EncodedQueryPart<T extends IComparator | IValueComparator> implements IPart<T> {
    operator: Operator;
    part: T;
    next: EncodedQueryPart<IComparator | IValueComparator>;
    constructor(operator: Operator, part: IComparator);
    constructor(operator: Operator, part: IValueComparator);
    and(field: string, comparator: typeof Comparator): EncodedQueryPart<IComparator>;
    and(field: string, comparator: typeof OrderBy, value: Direction): EncodedQueryPart<IValueComparator>;
    and(field: string, comparator: typeof ValueComparator, value: any): EncodedQueryPart<IValueComparator>;
    and(field: string, comparator: typeof MultiValueComparator, value: any): EncodedQueryPart<IMultiValueComparator>;
    and(field: string, value: any): EncodedQueryPart<IValueComparator>;
    or(field: string, comparator: typeof Comparator): EncodedQueryPart<IComparator>;
    or(field: string, comparator: typeof OrderBy, value: Direction): EncodedQueryPart<IValueComparator>;
    or(field: string, comparator: typeof ValueComparator, value: any): EncodedQueryPart<IValueComparator>;
    or(field: string, comparator: typeof MultiValueComparator, value: any): EncodedQueryPart<IMultiValueComparator>;
    or(field: string, value: any): EncodedQueryPart<IValueComparator>;
    toString(): string;
    static ensurePart(operator: Operator, part: EncodedQueryPart<Comparator | ValueComparator | MultiValueComparator> | IComparator | IValueComparator | IMultiValueComparator): EncodedQueryPart<IComparator | IValueComparator | IMultiValueComparator>;
}
