"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var IsNotEmpty = (function (_super) {
    __extends(IsNotEmpty, _super);
    function IsNotEmpty(field) {
        return _super.call(this, field) || this;
    }
    IsNotEmpty.prototype.get = function () {
        return this.field + "ISNOTEMPTY";
    };
    return IsNotEmpty;
}(IComparator_1.Comparator));
exports.IsNotEmpty = IsNotEmpty;
//# sourceMappingURL=IsNotEmpty.js.map