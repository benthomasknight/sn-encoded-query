"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EncodedQueryBuilder_1 = require("./../src/EncodedQueryBuilder");
var chai_1 = require("chai");
var OrderBy_1 = require("../src/Comparators/OrderBy");
var Comparators = require("./../src/Comparators/Comparator");
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
    describe('#addQuery(field, comparator, value?)', function () {
        it('should return a Between object when a Between comparator is provided', function () {
            // String Dates
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.Between, '2017-05-30', '2017-05-31 10:10:10');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.Between);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.have.length(2);
            chai_1.expect(part.part.value[0]).to.equal('2017-05-30');
            chai_1.expect(part.part.value[1]).to.equal('2017-05-31 10:10:10');
            chai_1.expect(part.part.get()).to.equal('fieldBETWEENjavascript:gs.dateGenerate(\'2017-05-30\',\'00:00:00\')@javascript:gs.dateGenerate(\'2017-05-31\',\'10:10:10\')');
            // Date Objects
            var d1 = new Date(2017, 4, 30);
            var d2 = new Date(2017, 4, 31, 10, 10, 10);
            part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.Between, d1, d2);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.have.length(2);
            chai_1.expect(part.part.value[0].toUTCString()).to.equal(d1.toUTCString());
            chai_1.expect(part.part.value[1].toUTCString()).to.equal(d2.toUTCString());
            chai_1.expect(part.part.get()).to.equal('fieldBETWEENjavascript:gs.dateGenerate(\'2017-05-30\',\'00:00:00\')@javascript:gs.dateGenerate(\'2017-05-31\',\'10:10:10\')');
            // Numbers
            part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.Between, 0, 10);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.have.length(2);
            chai_1.expect(part.part.value[0]).to.equal(0);
            chai_1.expect(part.part.value[1]).to.equal(10);
            chai_1.expect(part.part.get()).to.equal('fieldBETWEEN0@10');
        });
        it('should return an EndsWith object when an EndsWith comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.EndsWith, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.EndsWith);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldENDSWITHvalue');
        });
        it('should return a GreaterThan object when a GreaterThan comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.GreaterThan, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.GreaterThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field>value');
        });
        it('should return a GreaterThanField object when a GreaterThanField comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.GreaterThanField, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.GreaterThanField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldGT_FIELDfield2');
        });
        it('should return a GreaterThanOrEqualToField object when a GreaterThanOrEqualToField comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.GreaterThanOrEqualsField, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.GreaterThanOrEqualsField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldGT_OR_EQUALS_FIELDfield2');
        });
        it('should return a GreaterThanOrEqualTo object when a GreaterThanOrEqualTo comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.GreaterThanOrEqualTo, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.GreaterThanOrEqualTo);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field>=value');
        });
        it('should return an In object when an In comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.In, 'value', 'value2');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.In);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.get()).to.equal('fieldINvalue,value2');
            part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.In, ['value', 'value2']);
            chai_1.expect(part.part).to.be.instanceOf(Comparators.In);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.get()).to.equal('fieldINvalue,value2');
            part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.In, ['value', 'value2'], 'value3', ['value4']);
            chai_1.expect(part.part).to.be.instanceOf(Comparators.In);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.value[0][2]).to.equal('value3');
            chai_1.expect(part.part.value[0][3]).to.equal('value4');
            chai_1.expect(part.part.get()).to.equal('fieldINvalue,value2,value3,value4');
        });
        it('should return an Is object when an Is comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.Is, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.Is);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field=value');
        });
        it('should return an IsAnything object when an IsAnything comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.IsAnything);
            chai_1.expect(part.part).to.be.instanceOf(Comparators.IsAnything);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('fieldANYTHING');
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
        it('should return an IsNotSameAs object when an IsNotSameAs comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.IsNotSameAs, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.IsNotSameAs);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldNSAMEASfield2');
        });
        it('should return an IsSameAs object when an IsSameAs comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.IsSameAs, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.IsSameAs);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldSAMEASfield2');
        });
        it('should return a LessThan object when a LessThan comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.LessThan, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.LessThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field<value');
        });
        it('should return a LessThanField object when a LessThanField comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.LessThanField, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.LessThanField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldLT_FIELDfield2');
        });
        it('should return a LessThanField object when a LessThanField comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.LessThanOrEqualsField, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.LessThanOrEqualsField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldLT_OR_EQUALS_FIELDfield2');
        });
        it('should return a LessThanOrEqualTo object when a LessThanOrEqualTo comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.LessThanOrEqualTo, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.LessThanOrEqualTo);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field<=value');
        });
        it('should return a GroupBy object when a GroupBy comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            part.addGroupBy('field');
            chai_1.expect(part.build()).to.equal('GROUPBYfield');
        });
        it('should return an OrderBy object when an OrderBy comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addOrderBy('field', Comparators.Direction.Ascending);
            chai_1.expect(part.part).to.be.instanceOf(OrderBy_1.OrderBy);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal(Comparators.Direction.Ascending);
            chai_1.expect(part.part.get()).to.equal('ORDERBYfield');
            part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addOrderBy('field', Comparators.Direction.Descending);
            chai_1.expect(part.part).to.be.instanceOf(OrderBy_1.OrderBy);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal(Comparators.Direction.Descending);
            chai_1.expect(part.part.get()).to.equal('ORDERBYDESCfield');
        });
        it('should return a Like object when a Like comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.Like, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.Like);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldLIKEvalue');
        });
        it('should return a NotIn object when a NotIn comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.NotIn, 'value', 'value2');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.NotIn);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.get()).to.equal('fieldNOT INvalue,value2');
            part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.NotIn, ['value', 'value2']);
            chai_1.expect(part.part).to.be.instanceOf(Comparators.NotIn);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.get()).to.equal('fieldNOT INvalue,value2');
            part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.NotIn, ['value', 'value2'], 'value3', ['value4']);
            chai_1.expect(part.part).to.be.instanceOf(Comparators.NotIn);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.value[0][2]).to.equal('value3');
            chai_1.expect(part.part.value[0][3]).to.equal('value4');
            chai_1.expect(part.part.get()).to.equal('fieldNOT INvalue,value2,value3,value4');
        });
        it('should return a Not Like object when a Not Like comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.NotLike, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.NotLike);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldNOT LIKEvalue');
        });
        it('should return an StartsWith object when an StartsWith comparator is provided', function () {
            var part = new EncodedQueryBuilder_1.EncodedQueryBuilder().addQuery('field', Comparators.StartsWith, 'value');
            chai_1.expect(part.part).to.be.instanceOf(Comparators.StartsWith);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldSTARTSWITHvalue');
        });
    });
    describe('#build()', function () {
        it('should return a complete query string', function () {
            var builder = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            builder.addQuery('field', 'value');
            chai_1.expect(builder.build()).to.equal('field=value');
            builder = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty);
            chai_1.expect(builder.build()).to.equal('field=value^field2ISEMPTY');
            builder = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty).or('field3', Comparators.GreaterThan, 5);
            chai_1.expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5');
            builder = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty).or('field3', Comparators.GreaterThan, 5);
            builder.addOrderBy('field');
            chai_1.expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5^ORDERBYfield');
            builder = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            builder.addQuery('active', 'true')
                .and('active', Comparators.Is, 'true')
                .or('active', 'true');
            builder.addOrQuery('active', 'true')
                .or('active', Comparators.Is, 'true')
                .and('active', Comparators.Is, 'true');
            builder.addOrderBy('active', Comparators.Direction.Ascending);
            chai_1.expect(builder.build()).to.equal('active=true^active=true^ORactive=true^NQactive=true^ORactive=true^active=true^ORDERBYactive');
            builder = new EncodedQueryBuilder_1.EncodedQueryBuilder();
            builder.addQuery('description', Comparators.IsNotEmpty);
            builder.addOrderBy('active', Comparators.Direction.Ascending);
            builder.addOrderBy('sys_created_by', Comparators.Direction.Descending);
            builder.addGroupBy('active');
            chai_1.expect(builder.build()).to.equal('descriptionISNOTEMPTY^ORDERBYactive^ORDERBYDESCsys_created_by^GROUPBYactive');
        });
    });
});
//# sourceMappingURL=EncodedQueryBuilder.js.map