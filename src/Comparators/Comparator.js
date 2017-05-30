"use strict";
var Is_1 = require("./Is");
var OrderBy_1 = require("./OrderBy");
exports.Direction = OrderBy_1.Direction;
var LessThanOrEqualTo_1 = require("./LessThanOrEqualTo");
exports.LessThanOrEqualTo = LessThanOrEqualTo_1.LessThanOrEqualTo;
var LessThan_1 = require("./LessThan");
exports.LessThan = LessThan_1.LessThan;
var IsNotEmpty_1 = require("./IsNotEmpty");
exports.IsNotEmpty = IsNotEmpty_1.IsNotEmpty;
var IsNot_1 = require("./IsNot");
exports.IsNot = IsNot_1.IsNot;
var IsEmpty_1 = require("./IsEmpty");
exports.IsEmpty = IsEmpty_1.IsEmpty;
var Is_2 = require("./Is");
exports.Is = Is_2.Is;
//export { GroupBy } from "./GroupBy";
var GreaterThanOrEqualTo_1 = require("./GreaterThanOrEqualTo");
exports.GreaterThanOrEqualTo = GreaterThanOrEqualTo_1.GreaterThanOrEqualTo;
var GreaterThan_1 = require("./GreaterThan");
exports.GreaterThan = GreaterThan_1.GreaterThan;
var IsAnything_1 = require("./IsAnything");
exports.IsAnything = IsAnything_1.IsAnything;
var IsSameAs_1 = require("./IsSameAs");
exports.IsSameAs = IsSameAs_1.IsSameAs;
var IsNotSameAs_1 = require("./IsNotSameAs");
exports.IsNotSameAs = IsNotSameAs_1.IsNotSameAs;
var GreaterThanField_1 = require("./GreaterThanField");
exports.GreaterThanField = GreaterThanField_1.GreaterThanField;
var LessThanField_1 = require("./LessThanField");
exports.LessThanField = LessThanField_1.LessThanField;
var GreaterThanOrEqualsField_1 = require("./GreaterThanOrEqualsField");
exports.GreaterThanOrEqualsField = GreaterThanOrEqualsField_1.GreaterThanOrEqualsField;
var LessThanOrEqualsField_1 = require("./LessThanOrEqualsField");
exports.LessThanOrEqualsField = LessThanOrEqualsField_1.LessThanOrEqualsField;
function parseArgs(field, compOrVal) {
    var values = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        values[_i - 2] = arguments[_i];
    }
    if (typeof compOrVal === "function") {
        // Comparator has been given
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
}
exports.parseArgs = parseArgs;
var types = [
    /*{"code":"=", "format":"{0}{1}{2}"},
    {"code":"!=", "format":"{0}{1}{2}"},
    {"code":"ISEMPTY", "format":"{0}{1}"},
    {"code":"ISNOTEMPTY", "format":"{0}{1}"},
    {"code":"<", "format":"{0}{1}{2}"},
    {"code":">", "format":"{0}{1}{2}"},
    {"code":"<=", "format":"{0}{1}{2}"},
    {"code":">=", "format":"{0}{1}{2}"},*/
    { "code": "BETWEEN", "format": "{0}{1}{2}@{3}" },
    //{"code":"ANYTHING", "format":"{0}{1}"},
    //{"code":"SAMEAS", "format":"{0}{1}{2}"},
    //{"code":"NSAMEAS", "format":"{0}{1}{2}"},
    //{"code":"GT_FIELD", "format":"{0}{1}{2}"},
    //{"code":"LT_FIELD", "format":"{0}{1}{2}"},
    //{"code":"GT_OR_EQUALS_FIELD", "format":"{0}{1}{2}"},
    //{"code":"LT_OR_EQUALS_FIELD", "format":"{0}{1}{2}"},
    { "code": "DATEPART", "format": "{0}{1}{2}{4}" },
    { "code": "RELATIVE", "format": "{0}{1}{2}{4}" },
    { "code": "IN", "format": "{0}{1}{2}" },
    { "code": "NOT IN", "format": "{0}{1}{2}" },
    { "code": "LIKE", "format": "{0}{1}{2}" },
    { "code": "STARTSWITH", "format": "{0}{1}{2}" },
    { "code": "ENDSWITH", "format": "{0}{1}{2}" },
    { "code": "NOT LIKE", "format": "{0}{1}{2}" }
];
//# sourceMappingURL=Comparator.js.map