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
var moment = require("moment");
var Utils_1 = require("./Utils");
var On = /** @class */ (function (_super) {
    __extends(On, _super);
    function On(field, value) {
        var _this = _super.call(this, field, value) || this;
        if (!(value in Utils_1.DateRelativeOn) && !moment(value, Utils_1.DateFormats, true).isValid()) {
            throw new Error('Date provided is invalid');
        }
        return _this;
    }
    On.prototype.get = function () {
        if (this.value in Utils_1.DateRelativeOn) {
            return this.field + 'ON' + this.value;
        }
        var d = moment(this.value, Utils_1.DateFormats, true).format('YYYY-MM-DD');
        return this.field + "ON" + d + '@javascript:gs.dateGenerate(\'' + d + '\',\'start\')@javascript:gs.dateGenerate(\'' + d + '\',\'end\')';
    };
    On.DateRelativeOn = Utils_1.DateRelativeOn;
    return On;
}(IComparator_1.ValueComparator));
exports.On = On;
//# sourceMappingURL=On.js.map