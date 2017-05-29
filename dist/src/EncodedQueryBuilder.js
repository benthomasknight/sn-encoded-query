"use strict";
var Is_1 = require("./Comparators/Is");
var EncodedQueryBuilder = (function () {
    function EncodedQueryBuilder() {
    }
    EncodedQueryBuilder.prototype.addQuery = function (field, compOrVal) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        if (typeof compOrVal === "function") {
            if (compOrVal.length == 1) {
                return new compOrVal(field);
            }
            if (compOrVal.length == 2) {
                return new compOrVal(field, values[0]);
            }
        }
        else {
            // assume it is an equals query
            return new Is_1.Is(field, compOrVal);
        }
    };
    return EncodedQueryBuilder;
}());
exports.EncodedQueryBuilder = EncodedQueryBuilder;
//# sourceMappingURL=EncodedQueryBuilder.js.map