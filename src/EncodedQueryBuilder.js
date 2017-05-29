"use strict";
var Comparator_1 = require("./Comparators/Comparator");
var EncodedQueryPart_1 = require("./EncodedQueryPart");
var EncodedQueryTree_1 = require("./EncodedQueryTree");
var EncodedQueryBuilder = (function () {
    function EncodedQueryBuilder() {
        this.tree = new EncodedQueryTree_1.EncodedQueryTree();
    }
    EncodedQueryBuilder.prototype.addQuery = function (field, compOrVal, value) {
        return this.tree.add(EncodedQueryPart_1.Operator.And, Comparator_1.parseArgs(field, compOrVal, value));
    };
    EncodedQueryBuilder.prototype.build = function () {
        return this.tree.get();
    };
    return EncodedQueryBuilder;
}());
exports.EncodedQueryBuilder = EncodedQueryBuilder;
//# sourceMappingURL=EncodedQueryBuilder.js.map