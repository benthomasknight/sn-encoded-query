import { ValueComparator } from "./IComparator";

let DynamicFilters = {
  Me:'90d1921e5f510100a9ad2572f2b477fe',
  OneOfMyApprovals: '54635e965f510100a9ad2572f2b4774c',
  OneOfMyAssignments: '0f63961e5f510100a9ad2572f2b47745',
  OneOfMyGroups: 'd6435e965f510100a9ad2572f2b47744',
  UsersWithRoles: '32a39a165f510100a9ad2572f2b477a0'
}

export { DynamicFilters};
export class Dynamic extends ValueComparator {

  constructor(field:string, value:any) {
    super(field, value);
  }

  get():string {
    return this.field + "DYNAMIC" + this.value.toString();
  }

  public static Filters = DynamicFilters;
}