"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Is_1 = require("./Is");
var Between_1 = require("./Between");
var DateLessThan_1 = require("./DateLessThan");
var LessThan_1 = require("./LessThan");
var DateMoreThan_1 = require("./DateMoreThan");
var GreaterThan_1 = require("./GreaterThan");
var Dynamic_1 = require("./Dynamic");
var EndsWith_1 = require("./EndsWith");
var GreaterThanField_1 = require("./GreaterThanField");
var GreaterThanOrEqualsField_1 = require("./GreaterThanOrEqualsField");
var GreaterThanOrEqualTo_1 = require("./GreaterThanOrEqualTo");
var In_1 = require("./In");
var IsAnything_1 = require("./IsAnything");
var IsEmpty_1 = require("./IsEmpty");
var IsEmptyString_1 = require("./IsEmptyString");
var IsNot_1 = require("./IsNot");
var IsNotEmpty_1 = require("./IsNotEmpty");
var IsNotSameAs_1 = require("./IsNotSameAs");
var IsSameAs_1 = require("./IsSameAs");
var LessThanField_1 = require("./LessThanField");
var LessThanOrEqualsField_1 = require("./LessThanOrEqualsField");
var LessThanOrEqualTo_1 = require("./LessThanOrEqualTo");
var Like_1 = require("./Like");
var NotIn_1 = require("./NotIn");
var NotLike_1 = require("./NotLike");
var NotOn_1 = require("./NotOn");
var On_1 = require("./On");
var Relative_1 = require("./Relative");
var StartsWith_1 = require("./StartsWith");
var Trend_1 = require("./Trend");
function parseArgs(field, compOrVal, values) {
    if (typeof compOrVal === "function") {
        // Comparator has been given
        if (compOrVal.length == 1) {
            return new (compOrVal.bind.apply(compOrVal, [void 0, field].concat(values)))();
        }
        if (compOrVal.length == 2) {
            return new (compOrVal.bind.apply(compOrVal, [void 0, field].concat(values)))();
        }
        if (compOrVal.length >= 3) {
            return new (compOrVal.bind.apply(compOrVal, [void 0, field].concat(values)))();
        }
    }
    else if (values.length > 0) {
        // There is a text comparator
        var comp = findComparator(compOrVal);
        return new (comp.bind.apply(comp, [void 0, field].concat(values)))();
    }
    else {
        // assume it is an equals query
        return new Is_1.Is(field, compOrVal);
    }
}
exports.parseArgs = parseArgs;
function findComparator(comp) {
    switch (comp) {
        case 'BETWEEN':
            return Between_1.Between;
        case 'MORETHAN':
            return DateMoreThan_1.DateMoreThan;
        case 'LESSTHAN':
            return DateLessThan_1.DateLessThan;
        case '<':
            return LessThan_1.LessThan;
        case '>':
            return GreaterThan_1.GreaterThan;
        case 'DYNAMIC':
            return Dynamic_1.Dynamic;
        case 'ENDSWITH':
            return EndsWith_1.EndsWith;
        case 'GT_FIELD':
            return GreaterThanField_1.GreaterThanField;
        case 'GT_OR_EQUALS_FIELD':
            return GreaterThanOrEqualsField_1.GreaterThanOrEqualsField;
        case '>=':
            return GreaterThanOrEqualTo_1.GreaterThanOrEqualTo;
        case 'IN':
            return In_1.In;
        case '=':
            return Is_1.Is;
        case 'ANYTHING':
            return IsAnything_1.IsAnything;
        case 'ISEMPTY':
            return IsEmpty_1.IsEmpty;
        case 'EMPTYSTRING':
            return IsEmptyString_1.IsEmptyString;
        case '!=':
            return IsNot_1.IsNot;
        case 'ISNOTEMPTY':
            return IsNotEmpty_1.IsNotEmpty;
        case 'NSAMEAS':
            return IsNotSameAs_1.IsNotSameAs;
        case 'SAMEAS':
            return IsSameAs_1.IsSameAs;
        case 'LT_FIELD':
            return LessThanField_1.LessThanField;
        case 'LT_OR_EQUALS_FIELD':
            return LessThanOrEqualsField_1.LessThanOrEqualsField;
        case '<=':
            return LessThanOrEqualTo_1.LessThanOrEqualTo;
        case 'LIKE':
            return Like_1.Like;
        case 'NOT IN':
            return NotIn_1.NotIn;
        case 'NOT LIKE':
            return NotLike_1.NotLike;
        case 'NOTON':
            return NotOn_1.NotOn;
        case 'ON':
            return On_1.On;
        case 'RELATIVE':
            return Relative_1.Relative;
        case 'STARTSWITH':
            return StartsWith_1.StartsWith;
        case 'TREND':
            return Trend_1.Trend;
    }
}
// Below are options I am not sure how to handle. Will look again later
/*{"code":"SINCE", "format":""},
{"code":"MATCH_PAT", "format":""},
{"code":"MATCH_RGX", "format":""},
{"code":"INSTANCEOF", "format":""},
{"code":"VALCHANGES", "format":""},
{"code":"CHANGESFROM", "format":""},
{"code":"CHANGESTO", "format":""},
{"code":"sum", "format":""},
{"code":"avg", "format":""},
{"code":"min", "format":""},
{"code":"max", "format":""}*/ 
//# sourceMappingURL=Comparator.js.map