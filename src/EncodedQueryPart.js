"use strict";
var Comparator_1 = require("./Comparators/Comparator");
var IComparator_1 = require("./Comparators/IComparator");
var Operator;
(function (Operator) {
    Operator[Operator["Start"] = ''] = "Start";
    Operator[Operator["And"] = '^'] = "And";
    Operator[Operator["Or"] = '^OR'] = "Or";
    Operator[Operator["NewQuery"] = '^NQ'] = "NewQuery";
    Operator[Operator["RelatedListStart"] = '^RLQUERY'] = "RelatedListStart";
    Operator[Operator["RelatedListEnd"] = '^ENDRLQUERY'] = "RelatedListEnd";
    Operator[Operator["GroupBy"] = 'GROUPBY'] = "GroupBy";
    Operator[Operator["OrderBy"] = 'ORDERBY'] = "OrderBy";
})(Operator = exports.Operator || (exports.Operator = {}));
var EncodedQueryPart = (function () {
    function EncodedQueryPart(operator, part) {
        this.operator = operator;
        this.part = part;
    }
    EncodedQueryPart.prototype.and = function (field, compOrVal, value) {
        var p = EncodedQueryPart.ensurePart(Operator.And, Comparator_1.parseArgs(field, compOrVal, value));
        this.next = p;
        return p;
    };
    EncodedQueryPart.prototype.or = function (field, compOrVal, value) {
        var p = EncodedQueryPart.ensurePart(Operator.Or, Comparator_1.parseArgs(field, compOrVal, value));
        this.next = p;
        return p;
    };
    EncodedQueryPart.prototype.toString = function () {
        var str = this.operator + this.part.get();
        if (this.next) {
            str += this.next.toString();
        }
        return str;
    };
    EncodedQueryPart.ensurePart = function (operator, part) {
        if (part instanceof IComparator_1.Comparator) {
            return new EncodedQueryPart(operator, part);
        }
        else if (part instanceof IComparator_1.ValueComparator) {
            return new EncodedQueryPart(operator, part);
        }
        else {
            return part;
        }
    };
    return EncodedQueryPart;
}());
exports.EncodedQueryPart = EncodedQueryPart;
//# sourceMappingURL=EncodedQueryPart.js.map