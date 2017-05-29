//import {IType} from './Comparator';
"use strict";
var Operator;
(function (Operator) {
    Operator[Operator["And"] = '^'] = "And";
    Operator[Operator["Or"] = '^OR'] = "Or";
    Operator[Operator["NewQuery"] = '^NQ'] = "NewQuery";
    Operator[Operator["RelatedListStart"] = '^RLQUERY'] = "RelatedListStart";
    Operator[Operator["RelatedListEnd"] = '^ENDRLQUERY'] = "RelatedListEnd";
    Operator[Operator["GroupBy"] = 'GROUPBY'] = "GroupBy";
    Operator[Operator["OrderBy"] = 'ORDERBY'] = "OrderBy";
})(Operator = exports.Operator || (exports.Operator = {}));
var EncodedQueryPart = (function () {
    function EncodedQueryPart() {
    }
    return EncodedQueryPart;
}());
exports.EncodedQueryPart = EncodedQueryPart;
//# sourceMappingURL=EncodedQueryPart.js.map