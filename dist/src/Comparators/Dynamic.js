"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IComparator_1 = require("./IComparator");
var DynamicFilters = {
    Me: '90d1921e5f510100a9ad2572f2b477fe',
    OneOfMyApprovals: '54635e965f510100a9ad2572f2b4774c',
    OneOfMyAssignments: '0f63961e5f510100a9ad2572f2b47745',
    OneOfMyGroups: 'd6435e965f510100a9ad2572f2b47744',
    UsersWithRoles: '32a39a165f510100a9ad2572f2b477a0'
};
exports.DynamicFilters = DynamicFilters;
var Dynamic = /** @class */ (function (_super) {
    __extends(Dynamic, _super);
    function Dynamic(field, value) {
        return _super.call(this, field, value) || this;
    }
    Dynamic.prototype.get = function () {
        return this.field + "DYNAMIC" + this.value.toString();
    };
    Dynamic.Filters = DynamicFilters;
    return Dynamic;
}(IComparator_1.ValueComparator));
exports.Dynamic = Dynamic;
//# sourceMappingURL=Dynamic.js.map