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
var Comparator = /** @class */ (function () {
    function Comparator(field) {
        this.field = field;
    }
    Comparator.prototype.get = function () {
        throw new Error();
    };
    return Comparator;
}());
exports.Comparator = Comparator;
var ValueComparator = /** @class */ (function (_super) {
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
var MultiValueComparator = /** @class */ (function (_super) {
    __extends(MultiValueComparator, _super);
    function MultiValueComparator(field) {
        var value = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            value[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, field) || this;
        _this.value = value;
        return _this;
    }
    MultiValueComparator.prototype.get = function () {
        throw new Error();
    };
    return MultiValueComparator;
}(Comparator));
exports.MultiValueComparator = MultiValueComparator;
//# sourceMappingURL=IComparator.js.map