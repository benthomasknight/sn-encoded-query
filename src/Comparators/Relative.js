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
var RelativeDirection;
(function (RelativeDirection) {
    RelativeDirection[RelativeDirection["After"] = 'GT'] = "After";
    RelativeDirection[RelativeDirection["Before"] = 'LT'] = "Before";
    RelativeDirection[RelativeDirection["On"] = 'EE'] = "On";
    RelativeDirection[RelativeDirection["OnOrAfter"] = 'GE'] = "OnOrAfter";
    RelativeDirection[RelativeDirection["OnOrBefore"] = 'LE'] = "OnOrBefore";
})(RelativeDirection = exports.RelativeDirection || (exports.RelativeDirection = {}));
var RelativeTime;
(function (RelativeTime) {
    RelativeTime[RelativeTime["Hours"] = 'hour'] = "Hours";
    RelativeTime[RelativeTime["Minutes"] = 'minute'] = "Minutes";
    RelativeTime[RelativeTime["Days"] = 'dayofweek'] = "Days";
    RelativeTime[RelativeTime["Months"] = 'month'] = "Months";
    RelativeTime[RelativeTime["Quarters"] = 'quarter'] = "Quarters";
    RelativeTime[RelativeTime["Years"] = 'year'] = "Years";
})(RelativeTime = exports.RelativeTime || (exports.RelativeTime = {}));
var RelativeAsOf;
(function (RelativeAsOf) {
    RelativeAsOf[RelativeAsOf["BeforeNow"] = 'ago'] = "BeforeNow";
    RelativeAsOf[RelativeAsOf["FromNow"] = 'ahead'] = "FromNow";
})(RelativeAsOf = exports.RelativeAsOf || (exports.RelativeAsOf = {}));
var Relative = (function (_super) {
    __extends(Relative, _super);
    function Relative(field, direction, value, time, asOf) {
        return _super.call(this, field, direction, value, time, asOf) || this;
    }
    Relative.prototype.get = function () {
        return this.field + "RELATIVE" + this.value[0] + '@' + this.value[2] + '@' + this.value[3] + '@' + this.value[1];
    };
    return Relative;
}(IComparator_1.MultiValueComparator));
Relative.RelativeAsOf = RelativeAsOf;
Relative.RelativeTime = RelativeTime;
Relative.RelativeDirection = RelativeDirection;
exports.Relative = Relative;
//# sourceMappingURL=Relative.js.map