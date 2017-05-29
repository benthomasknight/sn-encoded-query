"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var Is = (function (_super) {
    __extends(Is, _super);
    function Is(field, value) {
        return _super.call(this, field, value) || this;
    }
    Is.prototype.get = function () {
        return this.field + "=" + this.value.toString();
    };
    return Is;
}(IComparator_1.ValueComparator));
exports.Is = Is;
//# sourceMappingURL=Is.js.map