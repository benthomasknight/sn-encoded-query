"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var GroupBy = (function (_super) {
    __extends(GroupBy, _super);
    function GroupBy(field) {
        return _super.call(this, field) || this;
    }
    GroupBy.prototype.get = function () {
        return 'GROUPBY' + this.field;
    };
    return GroupBy;
}(IComparator_1.Comparator));
exports.GroupBy = GroupBy;
//# sourceMappingURL=GroupBy.js.map