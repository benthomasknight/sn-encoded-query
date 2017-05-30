import * as mocha from "mocha";
import { expect } from 'chai';
import * as Comparators from "./../src/Comparators/Comparator";
import { OrderBy } from '../src/Comparators/OrderBy';
import { EncodedQueryBuilder } from "./../src/EncodedQueryBuilder";


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
    it('should return a GreaterThan object when a GreaterThan comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.GreaterThan, 'value');

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
    });
    it('should return a GreaterThanOrEqualToField object when a GreaterThanOrEqualToField comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.GreaterThanOrEqualsField, 'field2');
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
    });
    it('should return an Is object when an Is comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.Is, 'value');

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
    });
    it('should return an IsEmpty object when an IsEmpty comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.IsEmpty);

      expect(part.part).to.be.instanceOf(Comparators.IsEmpty);
      expect(part.part.field).to.equal('field');
      expect(part.part.get()).to.equal('fieldISEMPTY');
    });
    it('should return an IsNot object when an IsNot comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.IsNot, 'value');
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
    });
    it('should return an IsNotSameAs object when an IsNotSameAs comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.IsNotSameAs, 'field2');

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
    });
    it('should return a LessThan object when a LessThan comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.LessThan, 'value');
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
    });
    it('should return a LessThanField object when a LessThanField comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.LessThanOrEqualsField, 'field2');
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
    });
    it('should return a GroupBy object when a GroupBy comparator is provided', function() {
      let part = new EncodedQueryBuilder();
      part.addGroupBy('field');
      expect(part.build()).to.equal('GROUPBYfield');
    });
    it('should return an OrderBy object when an OrderBy comparator is provided', function() {
      let part = new EncodedQueryBuilder().addOrderBy('field', Comparators.Direction.Ascending);
      expect(part.part).to.be.instanceOf(OrderBy);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal(Comparators.Direction.Ascending);
      expect(part.part.get()).to.equal('ORDERBYfield');

      part = new EncodedQueryBuilder().addOrderBy('field', Comparators.Direction.Descending);
      expect(part.part).to.be.instanceOf(OrderBy);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal(Comparators.Direction.Descending);
      expect(part.part.get()).to.equal('ORDERBYDESCfield');
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