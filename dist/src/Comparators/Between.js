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
var Between = /** @class */ (function (_super) {
    __extends(Between, _super);
    function Between(field, lower, higher) {
        var _this = this;
        if (lower == null || higher == null) {
            throw new Error('A lower and higher value must be provided');
        }
        _this = _super.call(this, field, lower, higher) || this;
        return _this;
    }
    Between.prototype.get = function () {
        var l = moment(this.value[0], Utils_1.DateFormats, true);
        var h = moment(this.value[1], Utils_1.DateFormats, true);
        // Dates
        if (l.isValid() && h.isValid()) {
            // Special formatting for dates
            return this.field + "BETWEEN" + this.getDateGenerationString(l) + '@' + this.getDateGenerationString(h);
        }
        // Numbers
        return this.field + "BETWEEN" + this.value[0] + '@' + this.value[1];
    };
    Between.prototype.getDateGenerationString = function (date) {
        return 'javascript:gs.dateGenerate(\'' + date.format('YYYY-MM-DD') + '\',\'' + date.format('HH:mm:ss') + '\')';
    };
    return Between;
}(IComparator_1.MultiValueComparator));
exports.Between = Between;
//# sourceMappingURL=Between.js.map