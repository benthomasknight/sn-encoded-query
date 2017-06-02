"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderBy_1 = require("./Comparators/OrderBy");
var EncodedQueryTree_1 = require("./EncodedQueryTree");
var GroupBy_1 = require("./Comparators/GroupBy");
var EncodedQueryPart_1 = require("./EncodedQueryPart");
var Comparator_1 = require("./Comparators/Comparator");
var EncodedQueryBuilder = (function () {
    function EncodedQueryBuilder() {
        this.tree = new EncodedQueryTree_1.EncodedQueryTree();
    }
    EncodedQueryBuilder.prototype.addQuery = function (field, compOrVal) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        return this.tree.add(EncodedQueryPart_1.Operator.And, Comparator_1.parseArgs(field, compOrVal, values));
    };
    EncodedQueryBuilder.prototype.addOrQuery = function (field, compOrVal) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        return this.tree.add(EncodedQueryPart_1.Operator.NewQuery, Comparator_1.parseArgs(field, compOrVal, values));
    };
    EncodedQueryBuilder.prototype.addOrderBy = function (field, direction) {
        this.tree.add(EncodedQueryPart_1.Operator.And, Comparator_1.parseArgs(field, OrderBy_1.OrderBy, [direction || OrderBy_1.Direction.Ascending]));
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