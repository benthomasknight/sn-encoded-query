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
var _ = require("lodash");
var In = (function (_super) {
    __extends(In, _super);
    function In(field) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return _super.call(this, field, _.flattenDeep(values)) || this;
    }
    In.prototype.get = function () {
        return this.field + "IN" + this.value.toString();
    };
    return In;
}(IComparator_1.MultiValueComparator));
exports.In = In;
//# sourceMappingURL=In.js.map