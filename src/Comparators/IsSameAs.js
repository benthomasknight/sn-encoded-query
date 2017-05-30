"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var IsSameAs = (function (_super) {
    __extends(IsSameAs, _super);
    function IsSameAs(field, value) {
        return _super.call(this, field, value) || this;
    }
    IsSameAs.prototype.get = function () {
        return this.field + "SAMEAS" + this.value.toString();
    };
    return IsSameAs;
}(IComparator_1.ValueComparator));
exports.IsSameAs = IsSameAs;
//# sourceMappingURL=IsSameAs.js.map