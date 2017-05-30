"use strict";
var EncodedQueryPart_1 = require("./EncodedQueryPart");
var EncodedQueryPart_2 = require("./EncodedQueryPart");
var EncodedQueryTree = (function () {
    function EncodedQueryTree() {
        this.parts = new Array();
    }
    EncodedQueryTree.prototype.add = function (operator, part) {
        // If this is the first part added, don't use the normal operator
        // Doesn't count for related list queries as they add it anyway
        if (this.parts.length === 0 && [EncodedQueryPart_2.Operator.RelatedListStart, EncodedQueryPart_2.Operator.GroupBy, EncodedQueryPart_2.Operator.OrderBy].indexOf(operator) === -1) {
            operator = EncodedQueryPart_2.Operator.Start;
        }
        else {
            // Handle related list queries, orderbys and groupbys in a different manner
            switch (operator) {
                case EncodedQueryPart_2.Operator.GroupBy:
                    var tmp = EncodedQueryPart_1.EncodedQueryPart.ensurePart(operator, part);
                    this.group = tmp.part;
                    return null;
                case EncodedQueryPart_2.Operator.OrderBy:
                    if (!this.order) {
                        operator = EncodedQueryPart_2.Operator.Start;
                    }
                    var lastPart = this.traverseOrder();
                    var p_1 = EncodedQueryPart_1.EncodedQueryPart.ensurePart(operator, part);
                    // If an order already exists, add it to the end.
                    if (lastPart) {
                        lastPart.next = p_1;
                    }
                    else {
                        this.order = p_1;
                    }
                    return p_1;
                case EncodedQueryPart_2.Operator.RelatedListStart:
                case EncodedQueryPart_2.Operator.RelatedListEnd:
                    throw new Error('Related Lists not supported');
                default:
            }
        }
        var p = EncodedQueryPart_1.EncodedQueryPart.ensurePart(operator, part);
        this.parts.push(p);
        return p;
    };
    EncodedQueryTree.prototype.get = function () {
        var str = "";
        for (var i = 0; i < this.parts.length; i++) {
            str += this.parts[i].toString();
        }
        if (this.order) {
            if (this.parts.length !== 0) {
                str += '^';
            }
            str += this.order.toString();
        }
        if (this.group) {
            if (this.parts.length !== 0 || this.order) {
                str += '^';
            }
            str += this.group.get();
        }
        return str;
    };
    EncodedQueryTree.prototype.traverseOrder = function () {
        if (!this.order) {
            return null;
        }
        var part = this.order;
        while (part.next) {
            part = part.next;
        }
        return part;
    };
    return EncodedQueryTree;
}());
exports.EncodedQueryTree = EncodedQueryTree;
//# sourceMappingURL=EncodedQueryTree.js.map