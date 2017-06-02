import { ValueComparator } from "./IComparator";
declare let DynamicFilters: {
    Me: string;
    OneOfMyApprovals: string;
    OneOfMyAssignments: string;
    OneOfMyGroups: string;
    UsersWithRoles: string;
};
export { DynamicFilters };
export declare class Dynamic extends ValueComparator {
    constructor(field: string, value: any);
    get(): string;
    static Filters: {
        Me: string;
        OneOfMyApprovals: string;
        OneOfMyAssignments: string;
        OneOfMyGroups: string;
        UsersWithRoles: string;
    };
}
