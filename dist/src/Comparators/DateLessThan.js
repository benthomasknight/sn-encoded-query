"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IComparator_1 = require("./IComparator");
var Utils_1 = require("./Utils");
var DateLessThan = (function (_super) {
    __extends(DateLessThan, _super);
    function DateLessThan(field, value, period, direction, compareToField) {
        return _super.call(this, field, value, period, direction, compareToField) || this;
    }
    DateLessThan.prototype.get = function () {
        return this.field + "LESSTHAN" + this.value[3] + '@' + this.value[1] + '@' + this.value[2] + '@' + this.value[0];
    };
    return DateLessThan;
}(IComparator_1.MultiValueComparator));
DateLessThan.TimePeriods = Utils_1.TimePeriods;
DateLessThan.TimeDirection = Utils_1.TimeDirection;
exports.DateLessThan = DateLessThan;
//# sourceMappingURL=DateLessThan.js.map