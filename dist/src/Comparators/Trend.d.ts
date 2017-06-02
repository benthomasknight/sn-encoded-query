import { MultiValueComparator } from "./IComparator";
export declare enum TrendDirection {
    After,
    Before,
    On,
    OnOrAfter,
    OnOrBefore,
}
export declare enum TrendDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}
export declare enum TrendMonth {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}
export declare enum TrendQuarter {
    Quarter1,
    Quarter2,
    Quarter3,
    Quarter4,
}
export declare enum TrendWeek {
    Week0,
    Week1,
    Week2,
    Week3,
    Week4,
    Week5,
    Week6,
    Week7,
    Week8,
    Week9,
    Week10,
    Week11,
    Week12,
    Week13,
    Week14,
    Week15,
    Week16,
    Week17,
    Week18,
    Week19,
    Week20,
    Week21,
    Week22,
    Week23,
    Week24,
    Week25,
    Week26,
    Week27,
    Week28,
    Week29,
    Week30,
    Week31,
    Week32,
    Week33,
    Week34,
    Week35,
    Week36,
    Week37,
    Week38,
    Week39,
    Week40,
    Week41,
    Week42,
    Week43,
    Week44,
    Week45,
    Week46,
    Week47,
    Week48,
    Week49,
    Week50,
    Week51,
    Week52,
    Week53,
}
export declare enum TrendHour {
    MidnightHour,
    OneAMHour,
    TwoAMHour,
    ThreeAMHour,
    FourAMHour,
    FiveAMHour,
    SixAMHour,
    SevenAMHour,
    EightAMHour,
    NineAMHour,
    TenAMHour,
    ElevenAMHour,
    Noonhour,
    OnePMHour,
    TwoPMHour,
    ThreePMHour,
    FourPMHour,
    FivePMHour,
    SixPMHour,
    SevenPMHour,
    EightPMHour,
    NinePMHour,
    TenPMHour,
    ElevenPMHour,
}
export declare enum TrendYear {
    Year2000 = 2000,
    Year2001 = 2001,
    Year2002 = 2002,
    Year2003 = 2003,
    Year2004 = 2004,
    Year2005 = 2005,
    Year2006 = 2006,
    Year2007 = 2007,
    Year2008 = 2008,
    Year2009 = 2009,
    Year2010 = 2010,
    Year2011 = 2011,
    Year2012 = 2012,
    Year2013 = 2013,
    Year2014 = 2014,
    Year2015 = 2015,
    Year2016 = 2016,
    Year2017 = 2017,
    Year2018 = 2018,
    Year2019 = 2019,
    Year2020 = 2020,
}
export declare class Trend extends MultiValueComparator {
    constructor(field: string, direction: TrendDirection, value: TrendHour);
    constructor(field: string, direction: TrendDirection, value: TrendDay);
    constructor(field: string, direction: TrendDirection, value: TrendWeek);
    constructor(field: string, direction: TrendDirection, value: TrendMonth);
    constructor(field: string, direction: TrendDirection, value: TrendQuarter);
    constructor(field: string, direction: TrendDirection, value: TrendYear);
    get(): string;
    private getDateGenerationString();
    private getPartType(type);
    private getPartLabel(type);
    static readonly TrendDirection: typeof TrendDirection;
    static readonly TrendHour: typeof TrendHour;
    static readonly TrendDay: typeof TrendDay;
    static readonly TrendWeek: typeof TrendWeek;
    static readonly TrendMonth: typeof TrendMonth;
    static readonly TrendQuarter: typeof TrendQuarter;
    static readonly TrendYear: typeof TrendYear;
}
