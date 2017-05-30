"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var GreaterThanField = (function (_super) {
    __extends(GreaterThanField, _super);
    function GreaterThanField(field, value) {
        return _super.call(this, field, value) || this;
    }
    GreaterThanField.prototype.get = function () {
        return this.field + "GT_FIELD" + this.value;
    };
    return GreaterThanField;
}(IComparator_1.ValueComparator));
exports.GreaterThanField = GreaterThanField;
//# sourceMappingURL=GreaterThanField.js.map