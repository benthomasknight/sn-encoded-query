"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var GreaterThanOrEqualsField = (function (_super) {
    __extends(GreaterThanOrEqualsField, _super);
    function GreaterThanOrEqualsField(field, value) {
        return _super.call(this, field, value) || this;
    }
    GreaterThanOrEqualsField.prototype.get = function () {
        return this.field + "GT_OR_EQUALS_FIELD" + this.value;
    };
    return GreaterThanOrEqualsField;
}(IComparator_1.ValueComparator));
exports.GreaterThanOrEqualsField = GreaterThanOrEqualsField;
//# sourceMappingURL=GreaterThanOrEqualsField.js.map