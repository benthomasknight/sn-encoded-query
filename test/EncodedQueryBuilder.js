"use strict";
var OrderBy_1 = require("./../src/Comparators/OrderBy");
var chai_1 = require("chai");
var Comparators = require("./../src/Comparators/Comparator");
var EncodedQueryBuilder_1 = require("./../src/EncodedQueryBuilder");
describe('EncodedQueryBuilder', function () {
    describe('#addQuery(field, value)', function () {
        it('should return an Is object when no comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.Is);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field=value');
        });
    });
    describe('#addQuery(field, comparator, value)', function () {
        it('should return a GreaterThan object when a GreaterThan comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.GreaterThan, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.GreaterThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field>value');
        });
        it('should return a GreaterThanOrEqualTo object when a GreaterThanOrEqualTo comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.GreaterThanOrEqualTo, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.GreaterThanOrEqualTo);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field>=value');
        });
        it('should return an Is object when an Is comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.Is, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.Is);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field=value');
        });
        it('should return an IsEmpty object when an IsEmpty comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.IsEmpty);
            chai_1.expect(part.part).to.be.instanceOf(Comparators.IsEmpty);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('fieldISEMPTY');
        });
        it('should return an IsNot object when an IsNot comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.IsNot, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.IsNot);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field!=value');
        });
        it('should return an IsNotEmpty object when an IsNotEmpty comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.IsNotEmpty);
            chai_1.expect(part.part).to.be.instanceOf(Comparators.IsNotEmpty);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('fieldISNOTEMPTY');
        });
        it('should return a LessThan object when a LessThan comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.LessThan, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.LessThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field<value');
        });
        it('should return a LessThanOrEqualTo object when a LessThanOrEqualTo comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.LessThanOrEqualTo, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.LessThanOrEqualTo);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field<=value');
        });
        it('should return a GroupBy object when a GroupBy comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.GroupBy);
            chai_1.expect(part.part).to.be.instanceOf(Comparators.GroupBy);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('GROUPBYfield');
        });
        it('should return an OrderBy object when an OrderBy comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.OrderBy, Comparators.Direction.Ascending);
            chai_1.expect(part.part).to.be.instanceOf(Comparators.OrderBy);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal(Comparators.Direction.Ascending);
            chai_1.expect(part.part.get()).to.equal('ORDERBYfield');
            part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.OrderBy, Comparators.Direction.Descending);
            chai_1.expect(part.part).to.be.instanceOf(Comparators.OrderBy);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal(Comparators.Direction.Descending);
            chai_1.expect(part.part.get()).to.equal('ORDERBYDESCfield');
        });
    });
    describe('#build()', function () {
        it('should return a complete query string', function () {
            var builder = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            var part = builder.addQuery('field', 'value');
            chai_1.expect(builder.build()).to.equal('field=value');
            builder = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            var part2 = builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty);
            chai_1.expect(builder.build()).to.equal('field=value^field2ISEMPTY');
            builder = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            var part3 = builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty).or('field3', Comparators.GreaterThan, 5);
            chai_1.expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5');
            builder = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            var part4 = builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty).or('field3', Comparators.GreaterThan, 5).and('field', Comparators.OrderBy, OrderBy_1.Direction.Ascending);
            chai_1.expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5^ORDERBYfield');
            builder = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            var part5 = builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty).or('field3', Comparators.GreaterThan, 5).or('field', Comparators.OrderBy, OrderBy_1.Direction.Ascending);
            chai_1.expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5^ORORDERBYfield');
        });
    });
    /*describe('#get()', function() {
      it('should return a complete query string', function() {
        let part = new EncodedQueryBuilder().addQuery('field', 'value');
  
        expect(part.part).to.be.instanceOf(Comparators.Is);
        expect(part.part.field).to.equal('field');
        expect(part.part.value).to.equal('value');
        expect(part.part.get()).to.equal('field=value');
      });
    });*/
});
//# sourceMappingURL=EncodedQueryBuilder.js.map