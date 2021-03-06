// Date formats to support with moment. As we are parsing values that can either be a date or just a number, we are parsing in strict mode
export const DateFormats = [
  "YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss",
  "YYYY/MM/DD", "YYYY/MM/DD HH:mm:ss",
  "YYYY.MM.DD", "YYYY.MM.DD HH:mm:ss",
  "YYYY MM DD", "YYYY MM DD HH:mm:ss"
  ];

export enum DateRelativeOn {
  Today = <any>'Today@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)',
  Yesterday = <any>'Yesterday@javascript:gs.daysAgoStart(1)@javascript:gs.daysAgoEnd(1)',
  Tomorrow = <any>'Tomorrow@javascript:gs.daysAgoStart(-1)@javascript:gs.daysAgoEnd(-1)',
  ThisWeek = <any>'This week@javascript:gs.beginningOfThisWeek()@javascript:gs.endOfThisWeek()',
  LastWeek = <any>'Last week@javascript:gs.beginningOfLastWeek()@javascript:gs.endOfLastWeek()',
  NextWeek = <any>'Next week@javascript:gs.beginningOfNextWeek()@javascript:gs.endOfNextWeek()',
  ThisMonth = <any>'This month@javascript:gs.beginningOfThisMonth()@javascript:gs.endOfThisMonth()',
  LastMonth = <any>'Last month@javascript:gs.beginningOfLastMonth()@javascript:gs.endOfLastMonth()',
  NextMonth = <any>'Next month@javascript:gs.beginningOfNextMonth()@javascript:gs.endOfNextMonth()',
  Last3months = <any>'Last 3 months@javascript:gs.monthsAgoStart(3)@javascript:gs.endOfThisMonth()',
  Last6months = <any>'Last 6 months@javascript:gs.monthsAgoStart(6)@javascript:gs.endOfThisMonth()',
  Last9months = <any>'Last 9 months@javascript:gs.monthsAgoStart(9)@javascript:gs.endOfThisMonth()',
  Last12months = <any>'Last 12 months@javascript:gs.monthsAgoStart(12)@javascript:gs.endOfThisMonth()',
  ThisQuarter = <any>'This quarter@javascript:gs.beginningOfThisQuarter()@javascript:gs.endOfThisQuarter()',
  LastQuarter = <any>'Last quarter@javascript:gs.quartersAgoStart(1)@javascript:gs.quartersAgoEnd(1)',
  Last2quarters = <any>'Last 2 quarters@javascript:gs.quartersAgoStart(1)@javascript:gs.endOfThisQuarter()',
  NextQuarter = <any>'Next quarter@javascript:gs.quartersAgoStart(-1)@javascript:gs.quartersAgoEnd(-1)',
  Next2quarters = <any>'Next 2 quarters@javascript:gs.quartersAgoStart(-1)@javascript:gs.quartersAgoEnd(-2)',
  ThisYear = <any>'This year@javascript:gs.beginningOfThisYear()@javascript:gs.endOfThisYear()',
  NextYear = <any>'Next year@javascript:gs.beginningOfNextYear()@javascript:gs.endOfNextYear()',
  LastYear = <any>'Last year@javascript:gs.beginningOfLastYear()@javascript:gs.endOfLastYear()',
  Last2years = <any>'Last 2 years@javascript:gs.beginningOfLastYear()@javascript:gs.endOfThisYear()',
  Last7days = <any>'Last 7 days@javascript:gs.daysAgoStart(7)@javascript:gs.daysAgoEnd(0)',
  Last30days = <any>'Last 30 days@javascript:gs.daysAgoStart(30)@javascript:gs.daysAgoEnd(0)',
  Last60days = <any>'Last 60 days@javascript:gs.daysAgoStart(60)@javascript:gs.daysAgoEnd(0)',
  Last90days = <any>'Last 90 days@javascript:gs.daysAgoStart(90)@javascript:gs.daysAgoEnd(0)',
  Last120days = <any>'Last 120 days@javascript:gs.daysAgoStart(120)@javascript:gs.daysAgoEnd(0)',
  CurrentHour = <any>'Current hour@javascript:gs.hoursAgoStart(0)@javascript:gs.hoursAgoEnd(0)',
  LastHour = <any>'Last hour@javascript:gs.hoursAgoStart(1)@javascript:gs.hoursAgoEnd(1)',
  Last2hours = <any>'Last 2 hours@javascript:gs.hoursAgo(2)@javascript:gs.hoursAgo(0)',
  CurrentMinute = <any>'Current minute@javascript:gs.minutesAgoStart(0)@javascript:gs.minutesAgoEnd(0)',
  LastMinute = <any>'Last minute@javascript:gs.minutesAgoStart(1)@javascript:gs.minutesAgoEnd(1)',
  Last15minutes = <any>'Last 15 minutes@javascript:gs.minutesAgoStart(15)@javascript:gs.minutesAgoEnd(0)',
  Last30minutes = <any>'Last 30 minutes@javascript:gs.minutesAgoStart(30)@javascript:gs.minutesAgoEnd(0)',
  Last45minutes = <any>'Last 45 minutes@javascript:gs.minutesAgoStart(45)@javascript:gs.minutesAgoEnd(0)',
  OneYearAgo = <any>'One year ago@javascript:gs.monthsAgo(12)@javascript:gs.endOfThisMonth()',
  LastFiscalQuarter = <any>'Last Fiscal Quarter@javascript:gs.beginningOfLastSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')@javascript:gs.endOfLastSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')',
  ThisFiscalQuarter = <any>'This Fiscal Quarter@javascript:gs.beginningOfThisSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')@javascript:gs.endOfThisSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')',
  NextFiscalQuarter = <any>'Next Fiscal Quarter@javascript:gs.beginningOfNextSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')@javascript:gs.endOfNextSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')',
}

export enum TimePeriods {
  Hours = <any>'hour',
  Days = <any>'day',
  Weeks = <any>'week',
  Months = <any>'month',
  Quarters = <any>'quarter',
  Years = <any>'year'
}

export enum TimeDirection {
  Before = <any>'before',
  After = <any>'after',
  BeforeOrAfter = <any>'before or after'
}