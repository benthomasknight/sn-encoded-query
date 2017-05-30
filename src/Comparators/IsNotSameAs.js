"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var IsNotSameAs = (function (_super) {
    __extends(IsNotSameAs, _super);
    function IsNotSameAs(field, value) {
        return _super.call(this, field, value) || this;
    }
    IsNotSameAs.prototype.get = function () {
        return this.field + "NSAMEAS" + this.value.toString();
    };
    return IsNotSameAs;
}(IComparator_1.ValueComparator));
exports.IsNotSameAs = IsNotSameAs;
//# sourceMappingURL=IsNotSameAs.js.map