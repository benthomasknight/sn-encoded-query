"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var LessThanOrEqualsField = (function (_super) {
    __extends(LessThanOrEqualsField, _super);
    function LessThanOrEqualsField(field, value) {
        return _super.call(this, field, value) || this;
    }
    LessThanOrEqualsField.prototype.get = function () {
        return this.field + "LT_OR_EQUALS_FIELD" + this.value;
    };
    return LessThanOrEqualsField;
}(IComparator_1.ValueComparator));
exports.LessThanOrEqualsField = LessThanOrEqualsField;
//# sourceMappingURL=LessThanOrEqualsField.js.map