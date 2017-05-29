"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var LessThanOrEqualTo = (function (_super) {
    __extends(LessThanOrEqualTo, _super);
    function LessThanOrEqualTo(field, value) {
        return _super.call(this, field, value) || this;
    }
    LessThanOrEqualTo.prototype.get = function () {
        return this.field + "<=" + this.value;
    };
    return LessThanOrEqualTo;
}(IComparator_1.ValueComparator));
exports.LessThanOrEqualTo = LessThanOrEqualTo;
//# sourceMappingURL=LessThanOrEqualTo.js.map