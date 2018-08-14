import { EncodedQueryBuilder, Comparators } from "../";
import { expect } from 'chai';
import { OrderBy } from '../src/Comparators/OrderBy';
import * as mocha from "mocha";


describe('EncodedQueryBuilder', function() {
  describe('#addQuery(field, value)', function() {
    it('should return an Is object when no comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', 'value');

      expect(part.part).to.be.instanceOf(Comparators.Is);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field=value');
    });
  });

  describe('#addQuery(field, comparator, value?)', function() {
    it('should return a Between object when a Between comparator is provided', function() {
      // String Dates
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.Between, '2017-05-30', '2017-05-31 10:10:10');
      expect(part.part).to.be.instanceOf(Comparators.Between);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.have.length(2);
      expect(part.part.value[0]).to.equal('2017-05-30');
      expect(part.part.value[1]).to.equal('2017-05-31 10:10:10');
      expect(part.part.get()).to.equal('fieldBETWEENjavascript:gs.dateGenerate(\'2017-05-30\',\'00:00:00\')@javascript:gs.dateGenerate(\'2017-05-31\',\'10:10:10\')');

      // Date Objects
      var d1 = new Date(2017, 4, 30);
      var d2 = new Date(2017, 4, 31, 10, 10, 10);
      part = new EncodedQueryBuilder().addQuery('field', Comparators.Between, d1, d2);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.have.length(2);
      expect(part.part.value[0].toUTCString()).to.equal(d1.toUTCString());
      expect(part.part.value[1].toUTCString()).to.equal(d2.toUTCString());
      expect(part.part.get()).to.equal('fieldBETWEENjavascript:gs.dateGenerate(\'2017-05-30\',\'00:00:00\')@javascript:gs.dateGenerate(\'2017-05-31\',\'10:10:10\')');

      // Numbers
      part = new EncodedQueryBuilder().addQuery('field', Comparators.Between, 0, 10);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.have.length(2);
      expect(part.part.value[0]).to.equal(0);
      expect(part.part.value[1]).to.equal(10);
      expect(part.part.get()).to.equal('fieldBETWEEN0@10');

      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'BETWEEN', 0, 10);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.have.length(2);
      expect(part.part.value[0]).to.equal(0);
      expect(part.part.value[1]).to.equal(10);
      expect(part.part.get()).to.equal('fieldBETWEEN0@10');
    });
    it('should return a DateMoreThan object when a DateMoreThan comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.DateMoreThan, 5, Comparators.DateMoreThan.TimePeriods.Days, Comparators.DateMoreThan.TimeDirection.BeforeOrAfter, 'field2');

      expect(part.part).to.be.instanceOf(Comparators.DateMoreThan);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0]).to.equal(5);
      expect(part.part.value[1]).to.equal(Comparators.DateMoreThan.TimePeriods.Days);
      expect(part.part.value[2]).to.equal(Comparators.DateMoreThan.TimeDirection.BeforeOrAfter);
      expect(part.part.value[3]).to.equal('field2');
      expect(part.part.get()).to.equal('fieldMORETHANfield2@day@before or after@5');

      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'MORETHAN', 5, Comparators.DateMoreThan.TimePeriods.Days, Comparators.DateMoreThan.TimeDirection.BeforeOrAfter, 'field2');

      expect(part.part).to.be.instanceOf(Comparators.DateMoreThan);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0]).to.equal(5);
      expect(part.part.value[1]).to.equal(Comparators.DateMoreThan.TimePeriods.Days);
      expect(part.part.value[2]).to.equal(Comparators.DateMoreThan.TimeDirection.BeforeOrAfter);
      expect(part.part.value[3]).to.equal('field2');
      expect(part.part.get()).to.equal('fieldMORETHANfield2@day@before or after@5');
    });
    it('should return a DateLessThan object when a DateLessThan comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.DateLessThan, 5, Comparators.DateLessThan.TimePeriods.Days, Comparators.DateLessThan.TimeDirection.BeforeOrAfter, 'field2');

      expect(part.part).to.be.instanceOf(Comparators.DateLessThan);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0]).to.equal(5);
      expect(part.part.value[1]).to.equal(Comparators.DateLessThan.TimePeriods.Days);
      expect(part.part.value[2]).to.equal(Comparators.DateLessThan.TimeDirection.BeforeOrAfter);
      expect(part.part.value[3]).to.equal('field2');
      expect(part.part.get()).to.equal('fieldLESSTHANfield2@day@before or after@5');

      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'LESSTHAN', 5, Comparators.DateLessThan.TimePeriods.Days, Comparators.DateLessThan.TimeDirection.BeforeOrAfter, 'field2');

      expect(part.part).to.be.instanceOf(Comparators.DateLessThan);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0]).to.equal(5);
      expect(part.part.value[1]).to.equal(Comparators.DateLessThan.TimePeriods.Days);
      expect(part.part.value[2]).to.equal(Comparators.DateLessThan.TimeDirection.BeforeOrAfter);
      expect(part.part.value[3]).to.equal('field2');
      expect(part.part.get()).to.equal('fieldLESSTHANfield2@day@before or after@5');
    });
    it('should return a Dynamic object when a Dynamic comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.Dynamic, Comparators.Dynamic.Filters.Me);

      expect(part.part).to.be.instanceOf(Comparators.Dynamic);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal(Comparators.Dynamic.Filters.Me);
      expect(part.part.get()).to.equal('fieldDYNAMIC' + Comparators.Dynamic.Filters.Me);


      // String comparator
      part = new EncodedQueryBuilder().addQuery('field', 'DYNAMIC', Comparators.Dynamic.Filters.Me);

      expect(part.part).to.be.instanceOf(Comparators.Dynamic);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal(Comparators.Dynamic.Filters.Me);
      expect(part.part.get()).to.equal('fieldDYNAMIC' + Comparators.Dynamic.Filters.Me);
    });
    it('should return an EndsWith object when an EndsWith comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.EndsWith, 'value');

      expect(part.part).to.be.instanceOf(Comparators.EndsWith);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('fieldENDSWITHvalue');

      // String comparator
      part = new EncodedQueryBuilder().addQuery('field', 'ENDSWITH', 'value');

      expect(part.part).to.be.instanceOf(Comparators.EndsWith);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('fieldENDSWITHvalue');
    });
    it('should return a GreaterThan object when a GreaterThan comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.GreaterThan, 'value');

      expect(part.part).to.be.instanceOf(Comparators.GreaterThan);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field>value');

      // String comparator
      part = new EncodedQueryBuilder().addQuery('field', '>', 'value');

      expect(part.part).to.be.instanceOf(Comparators.GreaterThan);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field>value');
    });
    it('should return a GreaterThanField object when a GreaterThanField comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.GreaterThanField, 'field2');

      expect(part.part).to.be.instanceOf(Comparators.GreaterThanField);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldGT_FIELDfield2');

      // String comparator
      part = new EncodedQueryBuilder().addQuery('field', 'GT_FIELD', 'field2');

      expect(part.part).to.be.instanceOf(Comparators.GreaterThanField);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldGT_FIELDfield2');
    });
    it('should return a GreaterThanOrEqualToField object when a GreaterThanOrEqualToField comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.GreaterThanOrEqualsField, 'field2');
      expect(part.part).to.be.instanceOf(Comparators.GreaterThanOrEqualsField);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldGT_OR_EQUALS_FIELDfield2');

      // String comparator
      part = new EncodedQueryBuilder().addQuery('field', 'GT_OR_EQUALS_FIELD', 'field2');
      expect(part.part).to.be.instanceOf(Comparators.GreaterThanOrEqualsField);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldGT_OR_EQUALS_FIELDfield2');
    });
    it('should return a GreaterThanOrEqualTo object when a GreaterThanOrEqualTo comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.GreaterThanOrEqualTo, 'value');

      expect(part.part).to.be.instanceOf(Comparators.GreaterThanOrEqualTo);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field>=value');

      // String comparator
      part = new EncodedQueryBuilder().addQuery('field', '>=', 'value');

      expect(part.part).to.be.instanceOf(Comparators.GreaterThanOrEqualTo);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field>=value');
    });
    it('should return an In object when an In comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.In, 'value', 'value2');

      expect(part.part).to.be.instanceOf(Comparators.In);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0][0]).to.equal('value');
      expect(part.part.value[0][1]).to.equal('value2');
      expect(part.part.get()).to.equal('fieldINvalue,value2');

      part = new EncodedQueryBuilder().addQuery('field', Comparators.In, ['value', 'value2']);
      expect(part.part).to.be.instanceOf(Comparators.In);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0][0]).to.equal('value');
      expect(part.part.value[0][1]).to.equal('value2');
      expect(part.part.get()).to.equal('fieldINvalue,value2');

      part = new EncodedQueryBuilder().addQuery('field', Comparators.In, ['value', 'value2'], 'value3', ['value4']);
      expect(part.part).to.be.instanceOf(Comparators.In);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0][0]).to.equal('value');
      expect(part.part.value[0][1]).to.equal('value2');
      expect(part.part.value[0][2]).to.equal('value3');
      expect(part.part.value[0][3]).to.equal('value4');
      expect(part.part.get()).to.equal('fieldINvalue,value2,value3,value4');

      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'IN', ['value', 'value2'], 'value3', ['value4']);
      expect(part.part).to.be.instanceOf(Comparators.In);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0][0]).to.equal('value');
      expect(part.part.value[0][1]).to.equal('value2');
      expect(part.part.value[0][2]).to.equal('value3');
      expect(part.part.value[0][3]).to.equal('value4');
      expect(part.part.get()).to.equal('fieldINvalue,value2,value3,value4');
    });
    it('should return an Is object when an Is comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.Is, 'value');

      expect(part.part).to.be.instanceOf(Comparators.Is);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field=value');

      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', '=', 'value');

      expect(part.part).to.be.instanceOf(Comparators.Is);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field=value');
    });
    it('should return an IsAnything object when an IsAnything comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.IsAnything);

      expect(part.part).to.be.instanceOf(Comparators.IsAnything);
      expect(part.part.field).to.equal('field');
      expect(part.part.get()).to.equal('fieldANYTHING');

      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'ANYTHING', '');

      expect(part.part).to.be.instanceOf(Comparators.IsAnything);
      expect(part.part.field).to.equal('field');
      expect(part.part.get()).to.equal('fieldANYTHING');
    });
    it('should return an IsEmpty object when an IsEmpty comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.IsEmpty);

      expect(part.part).to.be.instanceOf(Comparators.IsEmpty);
      expect(part.part.field).to.equal('field');
      expect(part.part.get()).to.equal('fieldISEMPTY');

      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'ISEMPTY', '');

      expect(part.part).to.be.instanceOf(Comparators.IsEmpty);
      expect(part.part.field).to.equal('field');
      expect(part.part.get()).to.equal('fieldISEMPTY');
    });
    it('should return an IsEmptyString object when an IsEmptyString comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.IsEmptyString);

      expect(part.part).to.be.instanceOf(Comparators.IsEmptyString);
      expect(part.part.field).to.equal('field');
      expect(part.part.get()).to.equal('fieldEMPTYSTRING');

      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'EMPTYSTRING', '');

      expect(part.part).to.be.instanceOf(Comparators.IsEmptyString);
      expect(part.part.field).to.equal('field');
      expect(part.part.get()).to.equal('fieldEMPTYSTRING');
    });
    it('should return an IsNot object when an IsNot comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.IsNot, 'value');
      expect(part.part).to.be.instanceOf(Comparators.IsNot);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field!=value');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', '!=', 'value');
      expect(part.part).to.be.instanceOf(Comparators.IsNot);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field!=value');
    });
    it('should return an IsNotEmpty object when an IsNotEmpty comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.IsNotEmpty);
      expect(part.part).to.be.instanceOf(Comparators.IsNotEmpty);
      expect(part.part.field).to.equal('field');
      expect(part.part.get()).to.equal('fieldISNOTEMPTY');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'ISNOTEMPTY', '');
      expect(part.part).to.be.instanceOf(Comparators.IsNotEmpty);
      expect(part.part.field).to.equal('field');
      expect(part.part.get()).to.equal('fieldISNOTEMPTY');
    });
    it('should return an IsNotSameAs object when an IsNotSameAs comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.IsNotSameAs, 'field2');

      expect(part.part).to.be.instanceOf(Comparators.IsNotSameAs);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldNSAMEASfield2');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'NSAMEAS', 'field2');

      expect(part.part).to.be.instanceOf(Comparators.IsNotSameAs);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldNSAMEASfield2');
    });
    it('should return an IsSameAs object when an IsSameAs comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.IsSameAs, 'field2');

      expect(part.part).to.be.instanceOf(Comparators.IsSameAs);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldSAMEASfield2');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'SAMEAS', 'field2');

      expect(part.part).to.be.instanceOf(Comparators.IsSameAs);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldSAMEASfield2');
    });
    it('should return a LessThan object when a LessThan comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.LessThan, 'value');
      expect(part.part).to.be.instanceOf(Comparators.LessThan);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field<value');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', '<', 'value');
      expect(part.part).to.be.instanceOf(Comparators.LessThan);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field<value');
    });
    it('should return a LessThanField object when a LessThanField comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.LessThanField, 'field2');
      expect(part.part).to.be.instanceOf(Comparators.LessThanField);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldLT_FIELDfield2');

      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'LT_FIELD', 'field2');
      expect(part.part).to.be.instanceOf(Comparators.LessThanField);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldLT_FIELDfield2');
    });
    it('should return a LessThanField object when a LessThanField comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.LessThanOrEqualsField, 'field2');
      expect(part.part).to.be.instanceOf(Comparators.LessThanOrEqualsField);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldLT_OR_EQUALS_FIELDfield2');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'LT_OR_EQUALS_FIELD', 'field2');
      expect(part.part).to.be.instanceOf(Comparators.LessThanOrEqualsField);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('field2');
      expect(part.part.get()).to.equal('fieldLT_OR_EQUALS_FIELDfield2');
    });
    it('should return a LessThanOrEqualTo object when a LessThanOrEqualTo comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.LessThanOrEqualTo, 'value');
      expect(part.part).to.be.instanceOf(Comparators.LessThanOrEqualTo);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field<=value');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', '<=', 'value');
      expect(part.part).to.be.instanceOf(Comparators.LessThanOrEqualTo);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field<=value');
    });
    it('should return a GroupBy object when a GroupBy comparator is provided', function() {
      let part = new EncodedQueryBuilder();
      part.addGroupBy('field');
      expect(part.build()).to.equal('GROUPBYfield');
    });
    it('should return an OrderBy object when an OrderBy comparator is provided', function() {
      let b = new EncodedQueryBuilder();
      b.addOrderBy('field', Comparators.Direction.Ascending);
      expect(b.build()).to.equal('ORDERBYfield');

      b = new EncodedQueryBuilder();
      b.addOrderBy('field', Comparators.Direction.Descending);
      expect(b.build()).to.equal('ORDERBYDESCfield');
    });
    it('should return a Like object when a Like comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.Like, 'value');

      expect(part.part).to.be.instanceOf(Comparators.Like);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('fieldLIKEvalue');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'LIKE', 'value');

      expect(part.part).to.be.instanceOf(Comparators.Like);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('fieldLIKEvalue');
    });
    it('should return a NotIn object when a NotIn comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.NotIn, 'value', 'value2');

      expect(part.part).to.be.instanceOf(Comparators.NotIn);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0][0]).to.equal('value');
      expect(part.part.value[0][1]).to.equal('value2');
      expect(part.part.get()).to.equal('fieldNOT INvalue,value2');

      part = new EncodedQueryBuilder().addQuery('field', Comparators.NotIn, ['value', 'value2']);
      expect(part.part).to.be.instanceOf(Comparators.NotIn);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0][0]).to.equal('value');
      expect(part.part.value[0][1]).to.equal('value2');
      expect(part.part.get()).to.equal('fieldNOT INvalue,value2');

      part = new EncodedQueryBuilder().addQuery('field', Comparators.NotIn, ['value', 'value2'], 'value3', ['value4']);
      expect(part.part).to.be.instanceOf(Comparators.NotIn);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0][0]).to.equal('value');
      expect(part.part.value[0][1]).to.equal('value2');
      expect(part.part.value[0][2]).to.equal('value3');
      expect(part.part.value[0][3]).to.equal('value4');
      expect(part.part.get()).to.equal('fieldNOT INvalue,value2,value3,value4');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'NOT IN', ['value', 'value2'], 'value3', ['value4']);
      expect(part.part).to.be.instanceOf(Comparators.NotIn);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0][0]).to.equal('value');
      expect(part.part.value[0][1]).to.equal('value2');
      expect(part.part.value[0][2]).to.equal('value3');
      expect(part.part.value[0][3]).to.equal('value4');
      expect(part.part.get()).to.equal('fieldNOT INvalue,value2,value3,value4');
    });
    it('should return a Not Like object when a Not Like comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.NotLike, 'value');

      expect(part.part).to.be.instanceOf(Comparators.NotLike);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('fieldNOT LIKEvalue');

      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'NOT LIKE', 'value');

      expect(part.part).to.be.instanceOf(Comparators.NotLike);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('fieldNOT LIKEvalue');
    });
    it('should return a NotOn object when a NotOn comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.NotOn, Comparators.NotOn.DateRelativeOn.Yesterday);
      expect(part.part).to.be.instanceOf(Comparators.NotOn);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal(Comparators.NotOn.DateRelativeOn.Yesterday);
      expect(part.part.get()).to.equal('fieldNOTONYesterday@javascript:gs.daysAgoStart(1)@javascript:gs.daysAgoEnd(1)');

      part = new EncodedQueryBuilder().addQuery('field', Comparators.NotOn, '2017-05-30');
      expect(part.part).to.be.instanceOf(Comparators.NotOn);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('2017-05-30');
      expect(part.part.get()).to.equal('fieldNOTON2017-05-30@javascript:gs.dateGenerate(\'2017-05-30\',\'start\')@javascript:gs.dateGenerate(\'2017-05-30\',\'end\')');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'NOTON', '2017-05-30');
      expect(part.part).to.be.instanceOf(Comparators.NotOn);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('2017-05-30');
      expect(part.part.get()).to.equal('fieldNOTON2017-05-30@javascript:gs.dateGenerate(\'2017-05-30\',\'start\')@javascript:gs.dateGenerate(\'2017-05-30\',\'end\')');
    });
    it('should return an On object when an On comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.On, Comparators.On.DateRelativeOn.Yesterday);
      expect(part.part).to.be.instanceOf(Comparators.On);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal(Comparators.On.DateRelativeOn.Yesterday);
      expect(part.part.get()).to.equal('fieldONYesterday@javascript:gs.daysAgoStart(1)@javascript:gs.daysAgoEnd(1)');

      part = new EncodedQueryBuilder().addQuery('field', Comparators.On, '2017-05-30');
      expect(part.part).to.be.instanceOf(Comparators.On);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('2017-05-30');
      expect(part.part.get()).to.equal('fieldON2017-05-30@javascript:gs.dateGenerate(\'2017-05-30\',\'start\')@javascript:gs.dateGenerate(\'2017-05-30\',\'end\')');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'ON', '2017-05-30');
      expect(part.part).to.be.instanceOf(Comparators.On);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('2017-05-30');
      expect(part.part.get()).to.equal('fieldON2017-05-30@javascript:gs.dateGenerate(\'2017-05-30\',\'start\')@javascript:gs.dateGenerate(\'2017-05-30\',\'end\')');
    });
    it('should return a Relative object when a Relative comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.Relative, Comparators.Relative.RelativeDirection.On, 5, Comparators.Relative.RelativeTime.Hours, Comparators.Relative.RelativeAsOf.BeforeNow);

      expect(part.part).to.be.instanceOf(Comparators.Relative);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0]).to.equal(Comparators.Relative.RelativeDirection.On);
      expect(part.part.value[1]).to.equal(5);
      expect(part.part.value[2]).to.equal(Comparators.Relative.RelativeTime.Hours);
      expect(part.part.value[3]).to.equal(Comparators.Relative.RelativeAsOf.BeforeNow);
      expect(part.part.get()).to.equal('fieldRELATIVEEE@hour@ago@5');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'RELATIVE', Comparators.Relative.RelativeDirection.On, 5, Comparators.Relative.RelativeTime.Hours, Comparators.Relative.RelativeAsOf.BeforeNow);

      expect(part.part).to.be.instanceOf(Comparators.Relative);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0]).to.equal(Comparators.Relative.RelativeDirection.On);
      expect(part.part.value[1]).to.equal(5);
      expect(part.part.value[2]).to.equal(Comparators.Relative.RelativeTime.Hours);
      expect(part.part.value[3]).to.equal(Comparators.Relative.RelativeAsOf.BeforeNow);
      expect(part.part.get()).to.equal('fieldRELATIVEEE@hour@ago@5');
    });
    it('should return an StartsWith object when an StartsWith comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.StartsWith, 'value');

      expect(part.part).to.be.instanceOf(Comparators.StartsWith);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('fieldSTARTSWITHvalue');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'STARTSWITH', 'value');

      expect(part.part).to.be.instanceOf(Comparators.StartsWith);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('fieldSTARTSWITHvalue');
    });
    it('should return a Trend object when a Trend comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.Trend, Comparators.Trend.TrendDirection.On, Comparators.Trend.TrendDay.Monday);

      expect(part.part).to.be.instanceOf(Comparators.Trend);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0]).to.equal(Comparators.Trend.TrendDirection.On);
      expect(part.part.value[1]).to.equal(Comparators.Trend.TrendDay.Monday);
      expect(part.part.get()).to.equal('fieldDATEPARTMonday@javascript:gs.datePart(\'dayofweek\',\'monday\',\'EE\')');


      // String Comparator
      part = new EncodedQueryBuilder().addQuery('field', 'TREND', Comparators.Trend.TrendDirection.On, Comparators.Trend.TrendDay.Monday);

      expect(part.part).to.be.instanceOf(Comparators.Trend);
      expect(part.part.field).to.equal('field');
      expect(part.part.value[0]).to.equal(Comparators.Trend.TrendDirection.On);
      expect(part.part.value[1]).to.equal(Comparators.Trend.TrendDay.Monday);
      expect(part.part.get()).to.equal('fieldDATEPARTMonday@javascript:gs.datePart(\'dayofweek\',\'monday\',\'EE\')');
    });
  });

  describe('#build()', function() {
    it('should return a complete query string', function() {
      let builder = new EncodedQueryBuilder();
      builder.addQuery('field', 'value');
      expect(builder.build()).to.equal('field=value');

      builder = new EncodedQueryBuilder();
      builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty);
      expect(builder.build()).to.equal('field=value^field2ISEMPTY');

      builder = new EncodedQueryBuilder();
      builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty).or('field3',Comparators.GreaterThan, 5);
      expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5');

      builder = new EncodedQueryBuilder();
      builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty).or('field3',Comparators.GreaterThan, 5);
      builder.addOrderBy('field');
      expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5^ORDERBYfield');

      builder = new EncodedQueryBuilder();
      builder.addQuery('active', 'true')
        .and('active', Comparators.Is, 'true')
        .or('active', 'true');
      builder.addOrQuery('active', 'true')
        .or('active', Comparators.Is, 'true')
        .and('active', Comparators.Is, 'true');
      builder.addOrderBy('active', Comparators.Direction.Ascending);
      expect(builder.build()).to.equal('active=true^active=true^ORactive=true^NQactive=true^ORactive=true^active=true^ORDERBYactive');

      builder = new EncodedQueryBuilder();
      builder.addQuery('description', Comparators.IsNotEmpty);
      builder.addOrderBy('active', Comparators.Direction.Ascending);
      builder.addOrderBy('sys_created_by', Comparators.Direction.Descending);
      builder.addGroupBy('active');
      expect(builder.build()).to.equal('descriptionISNOTEMPTY^ORDERBYactive^ORDERBYDESCsys_created_by^GROUPBYactive');
    });
  });
});