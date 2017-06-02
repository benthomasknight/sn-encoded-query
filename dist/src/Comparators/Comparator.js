"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Is_1 = require("./Is");
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