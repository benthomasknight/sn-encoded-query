import * as mocha from "mocha";
import { Direction } from "./../src/Comparators/OrderBy";
import { expect } from 'chai';
import * as Comparators from "./../src/Comparators/Comparator";
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

  describe('#addQuery(field, comparator, value)', function() {
    it('should return a GreaterThan object when a GreaterThan comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.GreaterThan, 'value');

      expect(part.part).to.be.instanceOf(Comparators.GreaterThan);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field>value');
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
    it('should return a LessThan object when a LessThan comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.LessThan, 'value');
      expect(part.part).to.be.instanceOf(Comparators.LessThan);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field<value');
    });
    it('should return a LessThanOrEqualTo object when a LessThanOrEqualTo comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.LessThanOrEqualTo, 'value');
      expect(part.part).to.be.instanceOf(Comparators.LessThanOrEqualTo);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal('value');
      expect(part.part.get()).to.equal('field<=value');
    });
    it('should return a GroupBy object when a GroupBy comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.GroupBy);
      expect(part.part).to.be.instanceOf(Comparators.GroupBy);
      expect(part.part.field).to.equal('field');
      expect(part.part.get()).to.equal('GROUPBYfield');
    });
    it('should return an OrderBy object when an OrderBy comparator is provided', function() {
      let part = new EncodedQueryBuilder().addQuery('field', Comparators.OrderBy, Comparators.Direction.Ascending);
      expect(part.part).to.be.instanceOf(Comparators.OrderBy);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal(Comparators.Direction.Ascending);
      expect(part.part.get()).to.equal('ORDERBYfield');

      part = new EncodedQueryBuilder().addQuery('field', Comparators.OrderBy, Comparators.Direction.Descending);
      expect(part.part).to.be.instanceOf(Comparators.OrderBy);
      expect(part.part.field).to.equal('field');
      expect(part.part.value).to.equal(Comparators.Direction.Descending);
      expect(part.part.get()).to.equal('ORDERBYDESCfield');
    });
  });

  describe('#build()', function() {
    it('should return a complete query string', function() {
      let builder = new EncodedQueryBuilder();
      let part = builder.addQuery('field', 'value');
      expect(builder.build()).to.equal('field=value');

      builder = new EncodedQueryBuilder();
      let part2 = builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty);
      expect(builder.build()).to.equal('field=value^field2ISEMPTY');

      builder = new EncodedQueryBuilder();
      let part3 = builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty).or('field3',Comparators.GreaterThan, 5);
      expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5');

      builder = new EncodedQueryBuilder();
      let part4 = builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty).or('field3',Comparators.GreaterThan, 5).and('field', Comparators.OrderBy, Direction.Ascending);
      expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5^ORDERBYfield');

      builder = new EncodedQueryBuilder();
      let part5 = builder.addQuery('field', 'value').and('field2', Comparators.IsEmpty).or('field3',Comparators.GreaterThan, 5).or('field', Comparators.OrderBy, Direction.Ascending);
      expect(builder.build()).to.equal('field=value^field2ISEMPTY^ORfield3>5^ORORDERBYfield');
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