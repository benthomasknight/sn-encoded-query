# Module for building ServiceNow encoded queries

Docs for formatting are [here](https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/use/using-lists/concept/c_EncodedQueryStrings.html)

## Usage

### Querying

To get a query string, you should add a query to the builder, then build it. The addQuery function will do a simple equals comparison when no comparator is provided.

```#Javascript
var builder = new EncodedQueryBuilder();
builder.addQuery('field','value');
builder.build(); // Returns field=value
```

To change the comparison type, put a comparator as the second parameter.

```Javascript
builder.addQuery('field',<comparator>,'value');
```

#### And

There are two ways to add an 'And' query. Both of these will render the same output.

```Javascript
builder.addQuery('first_name','Ben');
builder.addQuery('last_name','Knight');
// Result: first_name=Ben^last_name=Knight

builder.addQuery('first_name','Ben').and('last_name','Knight');
// Result: first_name=Ben^last_name=Knight
```

#### Or

There are two ways to add an 'Or' query, but they will give different results when built. This is to allow for more complex querys to be built.

```Javascript
builder.addQuery('first_name','Ben');
builder.addOrQuery('last_name','Knight');
// Result: first_name=Ben^NQlast_name=Knight

builder.addQuery('first_name','Ben').or('last_name','Knight');
// Result: first_name=Ben^ORlast_name=Knight
```

The difference in rendering is to allow for Or's for a single part of the query, or for larger sections. For example, say you need to find all active users named 'Ben' or 'Simon', as well as all inactive users named 'Emma' and 'Brenda', ServiceNow would show the following:

![ServiceNow example](./ServiceNow-Example-Users.PNG)

The same query is created below:

```Javascript
builder .addQuery('active','true')
        .and('first_name','Ben')
        .or('first_name','Simon');

builder .addOrQuery('active','false')
        .and('first_name','Emma')
        .or('first_name','Brenda');

// Result: active=true^first_name=Ben^ORfirst_name=Simon^NQactive=false^first_name=Emma^ORfirst_name=Brenda
```

### Comparators

The comparators are labeled the same as they are in ServiceNow. To use them you must require them and then pass them to the function.

```Javascript
var StartWith = require(')
```