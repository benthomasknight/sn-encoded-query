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
var IsEmpty = (function (_super) {
    __extends(IsEmpty, _super);
    function IsEmpty(field) {
        return _super.call(this, field) || this;
    }
    IsEmpty.prototype.get = function () {
        return this.field + "ISEMPTY";
    };
    return IsEmpty;
}(IComparator_1.Comparator));
exports.IsEmpty = IsEmpty;
//# sourceMappingURL=IsEmpty.js.map