"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Comparator = (function () {
    function Comparator(field) {
        this.field = field;
    }
    Comparator.prototype.get = function () {
        throw new Error();
    };
    return Comparator;
}());
exports.Comparator = Comparator;
var ValueComparator = (function (_super) {
    __extends(ValueComparator, _super);
    function ValueComparator(field, value) {
        var _this = _super.call(this, field) || this;
        _this.value = value;
        return _this;
    }
    ValueComparator.prototype.get = function () {
        throw new Error();
    };
    return ValueComparator;
}(Comparator));
exports.ValueComparator = ValueComparator;
//# sourceMappingURL=IComparator.js.map