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
        if (this.parts.length === 0 && operator != EncodedQueryPart_2.Operator.RelatedListStart) {
            operator = EncodedQueryPart_2.Operator.Start;
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
        return str;
    };
    return EncodedQueryTree;
}());
exports.EncodedQueryTree = EncodedQueryTree;
//# sourceMappingURL=EncodedQueryTree.js.map