import { EncodedQueryPart } from "./EncodedQueryPart";
import { Operator } from "./EncodedQueryPart";
import { IValueComparator, IComparator, IMultiValueComparator } from "./Comparators/IComparator";
export declare class EncodedQueryTree {
    private parts;
    private order;
    private group;
    constructor();
    add(operator: Operator, part: IComparator): EncodedQueryPart<IComparator>;
    add(operator: Operator, part: IValueComparator): EncodedQueryPart<IValueComparator>;
    add(operator: Operator, part: IMultiValueComparator): EncodedQueryPart<IMultiValueComparator>;
    add(operator: Operator, part: EncodedQueryPart<IComparator>): EncodedQueryPart<IComparator>;
    add(operator: Operator, part: EncodedQueryPart<IValueComparator>): EncodedQueryPart<IValueComparator>;
    add(operator: Operator, part: EncodedQueryPart<IMultiValueComparator>): EncodedQueryPart<IMultiValueComparator>;
    get(): string;
    private traverseOrder;
}
