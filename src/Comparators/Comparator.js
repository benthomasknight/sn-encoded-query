"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Is_1 = require("./Is");
var Between_1 = require("./Between");
exports.Between = Between_1.Between;
var OrderBy_1 = require("./OrderBy");
exports.Direction = OrderBy_1.Direction;
var EndsWith_1 = require("./EndsWith");
exports.EndsWith = EndsWith_1.EndsWith;
var GreaterThan_1 = require("./GreaterThan");
exports.GreaterThan = GreaterThan_1.GreaterThan;
var GreaterThanField_1 = require("./GreaterThanField");
exports.GreaterThanField = GreaterThanField_1.GreaterThanField;
var GreaterThanOrEqualsField_1 = require("./GreaterThanOrEqualsField");
exports.GreaterThanOrEqualsField = GreaterThanOrEqualsField_1.GreaterThanOrEqualsField;
var GreaterThanOrEqualTo_1 = require("./GreaterThanOrEqualTo");
exports.GreaterThanOrEqualTo = GreaterThanOrEqualTo_1.GreaterThanOrEqualTo;
var In_1 = require("./In");
exports.In = In_1.In;
var Is_2 = require("./Is");
exports.Is = Is_2.Is;
var IsAnything_1 = require("./IsAnything");
exports.IsAnything = IsAnything_1.IsAnything;
var IsEmpty_1 = require("./IsEmpty");
exports.IsEmpty = IsEmpty_1.IsEmpty;
var IsNot_1 = require("./IsNot");
exports.IsNot = IsNot_1.IsNot;
var IsNotEmpty_1 = require("./IsNotEmpty");
exports.IsNotEmpty = IsNotEmpty_1.IsNotEmpty;
var IsNotSameAs_1 = require("./IsNotSameAs");
exports.IsNotSameAs = IsNotSameAs_1.IsNotSameAs;
var IsSameAs_1 = require("./IsSameAs");
exports.IsSameAs = IsSameAs_1.IsSameAs;
var LessThan_1 = require("./LessThan");
exports.LessThan = LessThan_1.LessThan;
var LessThanField_1 = require("./LessThanField");
exports.LessThanField = LessThanField_1.LessThanField;
var LessThanOrEqualsField_1 = require("./LessThanOrEqualsField");
exports.LessThanOrEqualsField = LessThanOrEqualsField_1.LessThanOrEqualsField;
var LessThanOrEqualTo_1 = require("./LessThanOrEqualTo");
exports.LessThanOrEqualTo = LessThanOrEqualTo_1.LessThanOrEqualTo;
var Like_1 = require("./Like");
exports.Like = Like_1.Like;
var NotIn_1 = require("./NotIn");
exports.NotIn = NotIn_1.NotIn;
var NotLike_1 = require("./NotLike");
exports.NotLike = NotLike_1.NotLike;
var NotOn_1 = require("./NotOn");
exports.NotOn = NotOn_1.NotOn;
var On_1 = require("./On");
exports.On = On_1.On;
var Relative_1 = require("./Relative");
exports.Relative = Relative_1.Relative;
exports.RelativeAsOf = Relative_1.RelativeAsOf;
exports.RelativeDirection = Relative_1.RelativeDirection;
exports.RelativeTime = Relative_1.RelativeTime;
var StartsWith_1 = require("./StartsWith");
exports.StartsWith = StartsWith_1.StartsWith;
var Trend_1 = require("./Trend");
exports.Trend = Trend_1.Trend;
exports.TrendDirection = Trend_1.TrendDirection;
exports.TrendHour = Trend_1.TrendHour;
exports.TrendDay = Trend_1.TrendDay;
exports.TrendWeek = Trend_1.TrendWeek;
exports.TrendMonth = Trend_1.TrendMonth;
exports.TrendQuarter = Trend_1.TrendQuarter;
exports.TrendYear = Trend_1.TrendYear;
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
    else {
        // assume it is an equals query
        return new Is_1.Is(field, compOrVal);
    }
}
exports.parseArgs = parseArgs;
var types = [
    { "code": "ON", "format": "{0}{1}{2}{4}" },
    { "code": "NOTON", "format": "{0}{1}{2}{4}" },
    { "code": "MORETHAN", "format": "" },
    { "code": "LESSTHAN", "format": "" }
    // Below are options I am not sure how to handle. Will look again later
    /*{"code":"SINCE", "format":""}, // Unknown
    {"code":"MATCH_PAT", "format":""},
    {"code":"MATCH_RGX", "format":""},
    {"code":"EMPTYSTRING", "format":""},
    {"code":"DYNAMIC", "format":""},
    {"code":"INSTANCEOF", "format":""},
    {"code":"VALCHANGES", "format":""},
    {"code":"CHANGESFROM", "format":""},
    {"code":"CHANGESTO", "format":""},
    {"code":"sum", "format":""},
    {"code":"avg", "format":""},
    {"code":"min", "format":""},
    {"code":"max", "format":""}*/
];
//# sourceMappingURL=Comparator.js.map