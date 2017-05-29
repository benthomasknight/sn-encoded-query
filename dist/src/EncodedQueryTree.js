"use strict";
var EncodedQueryTree = (function () {
    function EncodedQueryTree() {
    }
    EncodedQueryTree.prototype.add = function (part) {
        this.parts.push(part);
    };
    EncodedQueryTree.prototype.get = function () {
        return "";
    };
    return EncodedQueryTree;
}());
exports.EncodedQueryTree = EncodedQueryTree;
//# sourceMappingURL=EncodedQueryTree.js.map