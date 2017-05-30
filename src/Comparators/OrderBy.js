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
var Direction;
(function (Direction) {
    Direction[Direction["Ascending"] = 'ORDERBY'] = "Ascending";
    Direction[Direction["Descending"] = 'ORDERBYDESC'] = "Descending";
})(Direction = exports.Direction || (exports.Direction = {}));
var OrderBy = (function (_super) {
    __extends(OrderBy, _super);
    function OrderBy(field, direction) {
        return _super.call(this, field, direction) || this;
    }
    OrderBy.prototype.get = function () {
        return (this.value || Direction.Ascending) + this.field;
    };
    return OrderBy;
}(IComparator_1.ValueComparator));
exports.OrderBy = OrderBy;
//# sourceMappingURL=OrderBy.js.map