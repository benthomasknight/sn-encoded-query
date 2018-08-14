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
var IsNotSameAs = /** @class */ (function (_super) {
    __extends(IsNotSameAs, _super);
    function IsNotSameAs(field, value) {
        return _super.call(this, field, value) || this;
    }
    IsNotSameAs.prototype.get = function () {
        return this.field + "NSAMEAS" + this.value.toString();
    };
    return IsNotSameAs;
}(IComparator_1.ValueComparator));
exports.IsNotSameAs = IsNotSameAs;
//# sourceMappingURL=IsNotSameAs.js.map