"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IComparator_1 = require("./IComparator");
var LessThan = (function (_super) {
    __extends(LessThan, _super);
    function LessThan(field, value) {
        return _super.call(this, field, value) || this;
    }
    LessThan.prototype.get = function () {
        return this.field + "<" + this.value;
    };
    return LessThan;
}(IComparator_1.ValueComparator));
exports.LessThan = LessThan;
//# sourceMappingURL=LessThan.js.map