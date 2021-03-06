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
var IsAnything = /** @class */ (function (_super) {
    __extends(IsAnything, _super);
    function IsAnything(field) {
        return _super.call(this, field) || this;
    }
    IsAnything.prototype.get = function () {
        return this.field + "ANYTHING";
    };
    return IsAnything;
}(IComparator_1.Comparator));
exports.IsAnything = IsAnything;
//# sourceMappingURL=IsAnything.js.map