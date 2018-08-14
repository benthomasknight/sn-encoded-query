"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IComparator_1 = require("./IComparator");
var _ = require("lodash");
var NotIn = /** @class */ (function (_super) {
    __extends(NotIn, _super);
    function NotIn(field) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return _super.call(this, field, _.flattenDeep(values)) || this;
    }
    NotIn.prototype.get = function () {
        return this.field + "NOT IN" + this.value.toString();
    };
    return NotIn;
}(IComparator_1.MultiValueComparator));
exports.NotIn = NotIn;
//# sourceMappingURL=NotIn.js.map