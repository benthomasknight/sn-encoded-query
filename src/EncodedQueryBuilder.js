"use strict";
var GroupBy_1 = require("./Comparators/GroupBy");
var OrderBy_1 = require("./Comparators/OrderBy");
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
    EncodedQueryBuilder.prototype.addOrQuery = function (field, compOrVal, value) {
        return this.tree.add(EncodedQueryPart_1.Operator.NewQuery, Comparator_1.parseArgs(field, compOrVal, value));
    };
    EncodedQueryBuilder.prototype.addOrderBy = function (field, direction) {
        return this.tree.add(EncodedQueryPart_1.Operator.And, Comparator_1.parseArgs(field, OrderBy_1.OrderBy, direction || OrderBy_1.Direction.Ascending));
    };
    EncodedQueryBuilder.prototype.addGroupBy = function (field) {
        this.tree.add(EncodedQueryPart_1.Operator.GroupBy, Comparator_1.parseArgs(field, GroupBy_1.GroupBy));
    };
    EncodedQueryBuilder.prototype.build = function () {
        return this.tree.get();
    };
    return EncodedQueryBuilder;
}());
exports.EncodedQueryBuilder = EncodedQueryBuilder;
//# sourceMappingURL=EncodedQueryBuilder.js.map