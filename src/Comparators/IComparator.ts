export interface IComparator {
  field:string;
  get():string;
}

export abstract class Comparator implements IComparator {
  constructor(public field:string){}
  get():string {
    throw new Error();
  }
}

export interface IValueComparator extends IComparator {
  value:any;
}

export abstract class ValueComparator extends Comparator implements IValueComparator {
  constructor(field:string, public value:any){
    super(field);
  }
  get():string {
    throw new Error();
  }
}