"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var chai_1 = require("chai");
describe('EncodedQueryBuilder', function () {
    describe('#addQuery(field, value)', function () {
        it('should return an Is object when no comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Is);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field=value');
        });
    });
    describe('#addQuery(field, comparator, value?)', function () {
        it('should return a Between object when a Between comparator is provided', function () {
            // String Dates
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.Between, '2017-05-30', '2017-05-31 10:10:10');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Between);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.have.length(2);
            chai_1.expect(part.part.value[0]).to.equal('2017-05-30');
            chai_1.expect(part.part.value[1]).to.equal('2017-05-31 10:10:10');
            chai_1.expect(part.part.get()).to.equal('fieldBETWEENjavascript:gs.dateGenerate(\'2017-05-30\',\'00:00:00\')@javascript:gs.dateGenerate(\'2017-05-31\',\'10:10:10\')');
            // Date Objects
            var d1 = new Date(2017, 4, 30);
            var d2 = new Date(2017, 4, 31, 10, 10, 10);
            part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.Between, d1, d2);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.have.length(2);
            chai_1.expect(part.part.value[0].toUTCString()).to.equal(d1.toUTCString());
            chai_1.expect(part.part.value[1].toUTCString()).to.equal(d2.toUTCString());
            chai_1.expect(part.part.get()).to.equal('fieldBETWEENjavascript:gs.dateGenerate(\'2017-05-30\',\'00:00:00\')@javascript:gs.dateGenerate(\'2017-05-31\',\'10:10:10\')');
            // Numbers
            part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.Between, 0, 10);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.have.length(2);
            chai_1.expect(part.part.value[0]).to.equal(0);
            chai_1.expect(part.part.value[1]).to.equal(10);
            chai_1.expect(part.part.get()).to.equal('fieldBETWEEN0@10');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'BETWEEN', 0, 10);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.have.length(2);
            chai_1.expect(part.part.value[0]).to.equal(0);
            chai_1.expect(part.part.value[1]).to.equal(10);
            chai_1.expect(part.part.get()).to.equal('fieldBETWEEN0@10');
        });
        it('should return a DateMoreThan object when a DateMoreThan comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.DateMoreThan, 5, __1.Comparators.DateMoreThan.TimePeriods.Days, __1.Comparators.DateMoreThan.TimeDirection.BeforeOrAfter, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.DateMoreThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0]).to.equal(5);
            chai_1.expect(part.part.value[1]).to.equal(__1.Comparators.DateMoreThan.TimePeriods.Days);
            chai_1.expect(part.part.value[2]).to.equal(__1.Comparators.DateMoreThan.TimeDirection.BeforeOrAfter);
            chai_1.expect(part.part.value[3]).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldMORETHANfield2@day@before or after@5');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'MORETHAN', 5, __1.Comparators.DateMoreThan.TimePeriods.Days, __1.Comparators.DateMoreThan.TimeDirection.BeforeOrAfter, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.DateMoreThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0]).to.equal(5);
            chai_1.expect(part.part.value[1]).to.equal(__1.Comparators.DateMoreThan.TimePeriods.Days);
            chai_1.expect(part.part.value[2]).to.equal(__1.Comparators.DateMoreThan.TimeDirection.BeforeOrAfter);
            chai_1.expect(part.part.value[3]).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldMORETHANfield2@day@before or after@5');
        });
        it('should return a DateLessThan object when a DateLessThan comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.DateLessThan, 5, __1.Comparators.DateLessThan.TimePeriods.Days, __1.Comparators.DateLessThan.TimeDirection.BeforeOrAfter, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.DateLessThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0]).to.equal(5);
            chai_1.expect(part.part.value[1]).to.equal(__1.Comparators.DateLessThan.TimePeriods.Days);
            chai_1.expect(part.part.value[2]).to.equal(__1.Comparators.DateLessThan.TimeDirection.BeforeOrAfter);
            chai_1.expect(part.part.value[3]).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldLESSTHANfield2@day@before or after@5');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'LESSTHAN', 5, __1.Comparators.DateLessThan.TimePeriods.Days, __1.Comparators.DateLessThan.TimeDirection.BeforeOrAfter, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.DateLessThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0]).to.equal(5);
            chai_1.expect(part.part.value[1]).to.equal(__1.Comparators.DateLessThan.TimePeriods.Days);
            chai_1.expect(part.part.value[2]).to.equal(__1.Comparators.DateLessThan.TimeDirection.BeforeOrAfter);
            chai_1.expect(part.part.value[3]).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldLESSTHANfield2@day@before or after@5');
        });
        it('should return a Dynamic object when a Dynamic comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.Dynamic, __1.Comparators.Dynamic.Filters.Me);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Dynamic);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal(__1.Comparators.Dynamic.Filters.Me);
            chai_1.expect(part.part.get()).to.equal('fieldDYNAMIC' + __1.Comparators.Dynamic.Filters.Me);
            // String comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'DYNAMIC', __1.Comparators.Dynamic.Filters.Me);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Dynamic);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal(__1.Comparators.Dynamic.Filters.Me);
            chai_1.expect(part.part.get()).to.equal('fieldDYNAMIC' + __1.Comparators.Dynamic.Filters.Me);
        });
        it('should return an EndsWith object when an EndsWith comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.EndsWith, 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.EndsWith);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldENDSWITHvalue');
            // String comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'ENDSWITH', 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.EndsWith);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldENDSWITHvalue');
        });
        it('should return a GreaterThan object when a GreaterThan comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.GreaterThan, 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.GreaterThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field>value');
            // String comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', '>', 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.GreaterThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field>value');
        });
        it('should return a GreaterThanField object when a GreaterThanField comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.GreaterThanField, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.GreaterThanField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldGT_FIELDfield2');
            // String comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'GT_FIELD', 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.GreaterThanField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldGT_FIELDfield2');
        });
        it('should return a GreaterThanOrEqualToField object when a GreaterThanOrEqualToField comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.GreaterThanOrEqualsField, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.GreaterThanOrEqualsField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldGT_OR_EQUALS_FIELDfield2');
            // String comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'GT_OR_EQUALS_FIELD', 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.GreaterThanOrEqualsField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldGT_OR_EQUALS_FIELDfield2');
        });
        it('should return a GreaterThanOrEqualTo object when a GreaterThanOrEqualTo comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.GreaterThanOrEqualTo, 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.GreaterThanOrEqualTo);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field>=value');
            // String comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', '>=', 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.GreaterThanOrEqualTo);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field>=value');
        });
        it('should return an In object when an In comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.In, 'value', 'value2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.In);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.get()).to.equal('fieldINvalue,value2');
            part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.In, ['value', 'value2']);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.In);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.get()).to.equal('fieldINvalue,value2');
            part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.In, ['value', 'value2'], 'value3', ['value4']);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.In);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.value[0][2]).to.equal('value3');
            chai_1.expect(part.part.value[0][3]).to.equal('value4');
            chai_1.expect(part.part.get()).to.equal('fieldINvalue,value2,value3,value4');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'IN', ['value', 'value2'], 'value3', ['value4']);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.In);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.value[0][2]).to.equal('value3');
            chai_1.expect(part.part.value[0][3]).to.equal('value4');
            chai_1.expect(part.part.get()).to.equal('fieldINvalue,value2,value3,value4');
        });
        it('should return an Is object when an Is comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.Is, 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Is);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field=value');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', '=', 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Is);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field=value');
        });
        it('should return an IsAnything object when an IsAnything comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.IsAnything);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsAnything);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('fieldANYTHING');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'ANYTHING', '');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsAnything);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('fieldANYTHING');
        });
        it('should return an IsEmpty object when an IsEmpty comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.IsEmpty);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsEmpty);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('fieldISEMPTY');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'ISEMPTY', '');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsEmpty);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('fieldISEMPTY');
        });
        it('should return an IsEmptyString object when an IsEmptyString comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.IsEmptyString);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsEmptyString);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('fieldEMPTYSTRING');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'EMPTYSTRING', '');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsEmptyString);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('fieldEMPTYSTRING');
        });
        it('should return an IsNot object when an IsNot comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.IsNot, 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsNot);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field!=value');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', '!=', 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsNot);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field!=value');
        });
        it('should return an IsNotEmpty object when an IsNotEmpty comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.IsNotEmpty);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsNotEmpty);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('fieldISNOTEMPTY');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'ISNOTEMPTY', '');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsNotEmpty);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.get()).to.equal('fieldISNOTEMPTY');
        });
        it('should return an IsNotSameAs object when an IsNotSameAs comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.IsNotSameAs, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsNotSameAs);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldNSAMEASfield2');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'NSAMEAS', 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsNotSameAs);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldNSAMEASfield2');
        });
        it('should return an IsSameAs object when an IsSameAs comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.IsSameAs, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsSameAs);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldSAMEASfield2');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'SAMEAS', 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.IsSameAs);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldSAMEASfield2');
        });
        it('should return a LessThan object when a LessThan comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.LessThan, 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.LessThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field<value');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', '<', 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.LessThan);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field<value');
        });
        it('should return a LessThanField object when a LessThanField comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.LessThanField, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.LessThanField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldLT_FIELDfield2');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'LT_FIELD', 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.LessThanField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldLT_FIELDfield2');
        });
        it('should return a LessThanField object when a LessThanField comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.LessThanOrEqualsField, 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.LessThanOrEqualsField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldLT_OR_EQUALS_FIELDfield2');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'LT_OR_EQUALS_FIELD', 'field2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.LessThanOrEqualsField);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('field2');
            chai_1.expect(part.part.get()).to.equal('fieldLT_OR_EQUALS_FIELDfield2');
        });
        it('should return a LessThanOrEqualTo object when a LessThanOrEqualTo comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.LessThanOrEqualTo, 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.LessThanOrEqualTo);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field<=value');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', '<=', 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.LessThanOrEqualTo);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('field<=value');
        });
        it('should return a GroupBy object when a GroupBy comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder();
            part.addGroupBy('field');
            chai_1.expect(part.build()).to.equal('GROUPBYfield');
        });
        it('should return an OrderBy object when an OrderBy comparator is provided', function () {
            var b = new __1.EncodedQueryBuilder();
            b.addOrderBy('field', __1.Comparators.Direction.Ascending);
            chai_1.expect(b.build()).to.equal('ORDERBYfield');
            b = new __1.EncodedQueryBuilder();
            b.addOrderBy('field', __1.Comparators.Direction.Descending);
            chai_1.expect(b.build()).to.equal('ORDERBYDESCfield');
        });
        it('should return a Like object when a Like comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.Like, 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Like);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldLIKEvalue');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'LIKE', 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Like);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldLIKEvalue');
        });
        it('should return a NotIn object when a NotIn comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.NotIn, 'value', 'value2');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.NotIn);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.get()).to.equal('fieldNOT INvalue,value2');
            part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.NotIn, ['value', 'value2']);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.NotIn);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.get()).to.equal('fieldNOT INvalue,value2');
            part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.NotIn, ['value', 'value2'], 'value3', ['value4']);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.NotIn);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.value[0][2]).to.equal('value3');
            chai_1.expect(part.part.value[0][3]).to.equal('value4');
            chai_1.expect(part.part.get()).to.equal('fieldNOT INvalue,value2,value3,value4');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'NOT IN', ['value', 'value2'], 'value3', ['value4']);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.NotIn);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0][0]).to.equal('value');
            chai_1.expect(part.part.value[0][1]).to.equal('value2');
            chai_1.expect(part.part.value[0][2]).to.equal('value3');
            chai_1.expect(part.part.value[0][3]).to.equal('value4');
            chai_1.expect(part.part.get()).to.equal('fieldNOT INvalue,value2,value3,value4');
        });
        it('should return a Not Like object when a Not Like comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.NotLike, 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.NotLike);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldNOT LIKEvalue');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'NOT LIKE', 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.NotLike);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldNOT LIKEvalue');
        });
        it('should return a NotOn object when a NotOn comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.NotOn, __1.Comparators.NotOn.DateRelativeOn.Yesterday);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.NotOn);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal(__1.Comparators.NotOn.DateRelativeOn.Yesterday);
            chai_1.expect(part.part.get()).to.equal('fieldNOTONYesterday@javascript:gs.daysAgoStart(1)@javascript:gs.daysAgoEnd(1)');
            part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.NotOn, '2017-05-30');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.NotOn);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('2017-05-30');
            chai_1.expect(part.part.get()).to.equal('fieldNOTON2017-05-30@javascript:gs.dateGenerate(\'2017-05-30\',\'start\')@javascript:gs.dateGenerate(\'2017-05-30\',\'end\')');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'NOTON', '2017-05-30');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.NotOn);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('2017-05-30');
            chai_1.expect(part.part.get()).to.equal('fieldNOTON2017-05-30@javascript:gs.dateGenerate(\'2017-05-30\',\'start\')@javascript:gs.dateGenerate(\'2017-05-30\',\'end\')');
        });
        it('should return an On object when an On comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.On, __1.Comparators.On.DateRelativeOn.Yesterday);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.On);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal(__1.Comparators.On.DateRelativeOn.Yesterday);
            chai_1.expect(part.part.get()).to.equal('fieldONYesterday@javascript:gs.daysAgoStart(1)@javascript:gs.daysAgoEnd(1)');
            part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.On, '2017-05-30');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.On);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('2017-05-30');
            chai_1.expect(part.part.get()).to.equal('fieldON2017-05-30@javascript:gs.dateGenerate(\'2017-05-30\',\'start\')@javascript:gs.dateGenerate(\'2017-05-30\',\'end\')');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'ON', '2017-05-30');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.On);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('2017-05-30');
            chai_1.expect(part.part.get()).to.equal('fieldON2017-05-30@javascript:gs.dateGenerate(\'2017-05-30\',\'start\')@javascript:gs.dateGenerate(\'2017-05-30\',\'end\')');
        });
        it('should return a Relative object when a Relative comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.Relative, __1.Comparators.Relative.RelativeDirection.On, 5, __1.Comparators.Relative.RelativeTime.Hours, __1.Comparators.Relative.RelativeAsOf.BeforeNow);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Relative);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0]).to.equal(__1.Comparators.Relative.RelativeDirection.On);
            chai_1.expect(part.part.value[1]).to.equal(5);
            chai_1.expect(part.part.value[2]).to.equal(__1.Comparators.Relative.RelativeTime.Hours);
            chai_1.expect(part.part.value[3]).to.equal(__1.Comparators.Relative.RelativeAsOf.BeforeNow);
            chai_1.expect(part.part.get()).to.equal('fieldRELATIVEEE@hour@ago@5');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'RELATIVE', __1.Comparators.Relative.RelativeDirection.On, 5, __1.Comparators.Relative.RelativeTime.Hours, __1.Comparators.Relative.RelativeAsOf.BeforeNow);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Relative);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0]).to.equal(__1.Comparators.Relative.RelativeDirection.On);
            chai_1.expect(part.part.value[1]).to.equal(5);
            chai_1.expect(part.part.value[2]).to.equal(__1.Comparators.Relative.RelativeTime.Hours);
            chai_1.expect(part.part.value[3]).to.equal(__1.Comparators.Relative.RelativeAsOf.BeforeNow);
            chai_1.expect(part.part.get()).to.equal('fieldRELATIVEEE@hour@ago@5');
        });
        it('should return an StartsWith object when an StartsWith comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.StartsWith, 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.StartsWith);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldSTARTSWITHvalue');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'STARTSWITH', 'value');
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.StartsWith);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value).to.equal('value');
            chai_1.expect(part.part.get()).to.equal('fieldSTARTSWITHvalue');
        });
        it('should return a Trend object when a Trend comparator is provided', function () {
            var part = new __1.EncodedQueryBuilder().addQuery('field', __1.Comparators.Trend, __1.Comparators.Trend.TrendDirection.On, __1.Comparators.Trend.TrendDay.Monday);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Trend);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0]).to.equal(__1.Comparators.Trend.TrendDirection.On);
            chai_1.expect(part.part.value[1]).to.equal(__1.Comparators.Trend.TrendDay.Monday);
            chai_1.expect(part.part.get()).to.equal('fieldDATEPARTMonday@javascript:gs.datePart(\'dayofweek\',\'monday\',\'EE\')');
            // String Comparator
            part = new __1.EncodedQueryBuilder().addQuery('field', 'TREND', __1.Comparators.Trend.TrendDirection.On, __1.Comparators.Trend.TrendDay.Monday);
            chai_1.expect(part.part).to.be.instanceOf(__1.Comparators.Trend);
            chai_1.expect(part.part.field).to.equal('field');
            chai_1.expect(part.part.value[0]).to.equal(__1.Comparators.Trend.TrendDirection.On);
            chai_1.expect(part.part.value[1]).to.equal(__1.Comparators.Trend.TrendDay.Monday);
            chai_1.expect(part.part.get()).to.equal('fieldDATEPARTMonday@javascript:gs.datePart(\'dayofweek\',\'monday\',\'EE\')');
        });
    });
    describe('#build()', function () {
        it('should return a complete query string', function () {
            var builder = new __1.EncodedQueryBuilder();
            builder.addQuery('field', 'value');
            chai_1.expect(builder.build()).to.equal('field=value');
            builder = new __1.EncodedQueryBuilder();
            builder.addQuery('field', 'value').and('field2', __1.Comparators.IsEmpty);
            chai_1.expect(builder.build()).to.equal('field=value^field2ISEMPTY');
            builder = new __1.EncodedQueryBuilder();
            builder.addQuery('field', 'value').and('field2', __1.Comparators.IsEmpty).or('field3', __1.Comparators.GreaterThan, 5);
            chai_1.expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5');
            builder = new __1.EncodedQueryBuilder();
            builder.addQuery('field', 'value').and('field2', __1.Comparators.IsEmpty).or('field3', __1.Comparators.GreaterThan, 5);
            builder.addOrderBy('field');
            chai_1.expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5^ORDERBYfield');
            builder = new __1.EncodedQueryBuilder();
            builder.addQuery('active', 'true')
                .and('active', __1.Comparators.Is, 'true')
                .or('active', 'true');
            builder.addOrQuery('active', 'true')
                .or('active', __1.Comparators.Is, 'true')
                .and('active', __1.Comparators.Is, 'true');
            builder.addOrderBy('active', __1.Comparators.Direction.Ascending);
            chai_1.expect(builder.build()).to.equal('active=true^active=true^ORactive=true^NQactive=true^ORactive=true^active=true^ORDERBYactive');
            builder = new __1.EncodedQueryBuilder();
            builder.addQuery('description', __1.Comparators.IsNotEmpty);
            builder.addOrderBy('active', __1.Comparators.Direction.Ascending);
            builder.addOrderBy('sys_created_by', __1.Comparators.Direction.Descending);
            builder.addGroupBy('active');
            chai_1.expect(builder.build()).to.equal('descriptionISNOTEMPTY^ORDERBYactive^ORDERBYDESCsys_created_by^GROUPBYactive');
        });
    });
});
//# sourceMappingURL=EncodedQueryBuilder.js.map