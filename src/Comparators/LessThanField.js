"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var LessThanField = (function (_super) {
    __extends(LessThanField, _super);
    function LessThanField(field, value) {
        return _super.call(this, field, value) || this;
    }
    LessThanField.prototype.get = function () {
        return this.field + "LT_FIELD" + this.value;
    };
    return LessThanField;
}(IComparator_1.ValueComparator));
exports.LessThanField = LessThanField;
//# sourceMappingURL=LessThanField.js.map