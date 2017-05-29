"use strict";
var types = [
    { "code": "=", "format": "{0}{1}{2}" },
    { "code": "!=", "format": "{0}{1}{2}" },
    { "code": "ISEMPTY", "format": "{0}{1}" },
    { "code": "ISNOTEMPTY", "format": "{0}{1}" },
    { "code": "<", "format": "{0}{1}{2}" },
    { "code": ">", "format": "{0}{1}{2}" },
    { "code": "<=", "format": "{0}{1}{2}" },
    { "code": ">=", "format": "{0}{1}{2}" },
    { "code": "BETWEEN", "format": "{0}{1}{2}@{3}" },
    { "code": "ANYTHING", "format": "{0}{1}" },
    { "code": "SAMEAS", "format": "{0}{1}{2}" },
    { "code": "NSAMEAS", "format": "{0}{1}{2}" },
    { "code": "GT_FIELD", "format": "{0}{1}{2}" },
    { "code": "LT_FIELD", "format": "{0}{1}{2}" },
    { "code": "GT_OR_EQUALS_FIELD", "format": "{0}{1}{2}" },
    { "code": "LT_OR_EQUALS_FIELD", "format": "{0}{1}{2}" },
    { "code": "DATEPART", "format": "{0}{1}{2}{4}" },
    { "code": "RELATIVE", "format": "{0}{1}{2}{4}" },
    { "code": "IN", "format": "{0}{1}{2}" },
    { "code": "NOT IN", "format": "{0}{1}{2}" },
    { "code": "LIKE", "format": "{0}{1}{2}" },
    { "code": "STARTSWITH", "format": "{0}{1}{2}" },
    { "code": "ENDSWITH", "format": "{0}{1}{2}" },
    { "code": "NOT LIKE", "format": "{0}{1}{2}" }
];
/*export class Comparator {
  
}*/
/*export function Comparator(comparator:string) {
  for(let i = 0; i < types.length; i++) {
    if(types[i].code == comparator) {
      return types[i];
    }
  }

  throw new Error('Invalid comparator provided: ' + comparator);
}*/ 
//# sourceMappingURL=Comparator.js.map