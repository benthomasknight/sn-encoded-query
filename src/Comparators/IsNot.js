"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var IsNot = (function (_super) {
    __extends(IsNot, _super);
    function IsNot(field, value) {
        return _super.call(this, field, value) || this;
    }
    IsNot.prototype.get = function () {
        return this.field + "!=" + this.value.toString();
    };
    return IsNot;
}(IComparator_1.ValueComparator));
exports.IsNot = IsNot;
//# sourceMappingURL=IsNot.js.map