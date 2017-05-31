import { MultiValueComparator } from "./IComparator";

export enum TrendDirection {
  After = <any>'GT',
  Before = <any>'LT',
  On = <any>'EE',
  OnOrAfter = <any>'GE',
  OnOrBefore = <any>'LE'
}

export enum TrendDay {
  Monday = <any>'monday',
  Tuesday = <any>'tuesday',
  Wednesday = <any>'wednesday',
  Thursday = <any>'thursday',
  Friday = <any>'friday',
  Saturday = <any>'saturday',
  Sunday = <any>'sunday'
}

export enum TrendMonth {
  January = <any>'jan',
  February = <any>'feb',
  March = <any>'mar',
  April = <any>'apr',
  May = <any>'may',
  June = <any>'june',
  July = <any>'july',
  August = <any>'aug',
  September = <any>'sep',
  October = <any>'oct',
  November = <any>'nov',
  December = <any>'dec'
}

export enum TrendQuarter {
  Quarter1 = <any>'1',
  Quarter2 = <any>'2',
  Quarter3 = <any>'3',
  Quarter4 = <any>'4',
}

export enum TrendWeek {
  Week0 = <any>'0',
  Week1 = <any>'1',
  Week2 = <any>'2',
  Week3 = <any>'3',
  Week4 = <any>'4',
  Week5 = <any>'5',
  Week6 = <any>'6',
  Week7 = <any>'7',
  Week8 = <any>'8',
  Week9 = <any>'9',
  Week10 = <any>'10',
  Week11 = <any>'11',
  Week12 = <any>'12',
  Week13 = <any>'13',
  Week14 = <any>'14',
  Week15 = <any>'15',
  Week16 = <any>'16',
  Week17 = <any>'17',
  Week18 = <any>'18',
  Week19 = <any>'19',
  Week20 = <any>'20',
  Week21 = <any>'21',
  Week22 = <any>'22',
  Week23 = <any>'23',
  Week24 = <any>'24',
  Week25 = <any>'25',
  Week26 = <any>'26',
  Week27 = <any>'27',
  Week28 = <any>'28',
  Week29 = <any>'29',
  Week30 = <any>'30',
  Week31 = <any>'31',
  Week32 = <any>'32',
  Week33 = <any>'33',
  Week34 = <any>'34',
  Week35 = <any>'35',
  Week36 = <any>'36',
  Week37 = <any>'37',
  Week38 = <any>'38',
  Week39 = <any>'39',
  Week40 = <any>'40',
  Week41 = <any>'41',
  Week42 = <any>'42',
  Week43 = <any>'43',
  Week44 = <any>'44',
  Week45 = <any>'45',
  Week46 = <any>'46',
  Week47 = <any>'47',
  Week48 = <any>'48',
  Week49 = <any>'49',
  Week50 = <any>'50',
  Week51 = <any>'51',
  Week52 = <any>'52',
  Week53 = <any>'53'
}

export enum TrendHour {
  MidnightHour=<any>'0',
  OneAMHour=<any>'1',
  TwoAMHour=<any>'2',
  ThreeAMHour=<any>'3',
  FourAMHour=<any>'4',
  FiveAMHour=<any>'5',
  SixAMHour=<any>'6',
  SevenAMHour=<any>'7',
  EightAMHour=<any>'8',
  NineAMHour=<any>'9',
  TenAMHour=<any>'10',
  ElevenAMHour=<any>'11',
  Noonhour=<any>'12',
  OnePMHour=<any>'13',
  TwoPMHour=<any>'14',
  ThreePMHour=<any>'15',
  FourPMHour=<any>'16',
  FivePMHour=<any>'17',
  SixPMHour=<any>'18',
  SevenPMHour=<any>'19',
  EightPMHour=<any>'20',
  NinePMHour=<any>'21',
  TenPMHour=<any>'22',
  ElevenPMHour=<any>'23'
}

export enum TrendYear {
  Year2000=2000,
  Year2001=2001,
  Year2002=2002,
  Year2003=2003,
  Year2004=2004,
  Year2005=2005,
  Year2006=2006,
  Year2007=2007,
  Year2008=2008,
  Year2009=2009,
  Year2010=2010,
  Year2011=2011,
  Year2012=2012,
  Year2013=2013,
  Year2014=2014,
  Year2015=2015,
  Year2016=2016,
  Year2017=2017,
  Year2018=2018,
  Year2019=2019,
  Year2020=2020,
}

export class Trend extends MultiValueComparator {
  constructor(field:string, direction:TrendDirection, value:TrendHour);
  constructor(field:string, direction:TrendDirection, value:TrendDay);
  constructor(field:string, direction:TrendDirection, value:TrendWeek);
  constructor(field:string, direction:TrendDirection, value:TrendMonth);
  constructor(field:string, direction:TrendDirection, value:TrendQuarter);
  constructor(field:string, direction:TrendDirection, value:TrendYear);
  constructor(field:string, direction:TrendDirection, value:TrendHour|TrendDay|TrendWeek|TrendMonth|TrendQuarter|TrendYear) {
    super(field, direction, value);
  }

  get():string {
    return this.field + "DATEPART" + this.getPartLabel(this.value[1]) + '@' + this.getDateGenerationString();
  }

  private getDateGenerationString():string {
    return 'javascript:gs.datePart(\'' + this.getPartType(this.value[1].toString()) +'\',\'' + this.value[1].toString().toLowerCase() + '\',\'' + this.value[0] + '\')';
  }

  private getPartType(type:string):string {
    if(type in TrendHour) {
      return 'hour';
    }
    if(type in TrendDay) {
      return 'dayofweek';
    }
    if(type in TrendWeek) {
      return 'week';
    }
    if(type in TrendMonth) {
      return 'month';
    }
    if(type in TrendQuarter) {
      return 'quarter';
    }
    if(type in TrendYear) {
      return 'year';
    }
    throw new Error('Invalid trend type');
  }

  private getPartLabel(type:string):string {
    if(type in TrendHour) {
      return TrendHour[type];
    }
    if(type in TrendDay) {
      return TrendDay[type];
    }
    if(type in TrendWeek) {
      return TrendWeek[type];
    }
    if(type in TrendMonth) {
      return TrendMonth[type];
    }
    if(type in TrendQuarter) {
      return TrendQuarter[type];
    }
    if(type in TrendYear) {
      return TrendYear[type];
    }
    throw new Error('Invalid trend type');
  }

  public static readonly TrendDirection = TrendDirection;
  public static readonly TrendHour = TrendHour;
  public static readonly TrendDay = TrendDay;
  public static readonly TrendWeek = TrendWeek;
  public static readonly TrendMonth = TrendMonth;
  public static readonly TrendQuarter = TrendQuarter;
  public static readonly TrendYear = TrendYear;
}

// sys_created_onDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','EE')

// sys_created_onDATEPARTNoon hour@javascript:gs.datePart('hour', '12','EE')