"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Date formats to support with moment. As we are parsing values that can either be a date or just a number, we are parsing in strict mode
exports.DateFormats = [
    "YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss",
    "YYYY/MM/DD", "YYYY/MM/DD HH:mm:ss",
    "YYYY.MM.DD", "YYYY.MM.DD HH:mm:ss",
    "YYYY MM DD", "YYYY MM DD HH:mm:ss"
];
var DateRelativeOn;
(function (DateRelativeOn) {
    DateRelativeOn[DateRelativeOn["Today"] = 'Today@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)'] = "Today";
    DateRelativeOn[DateRelativeOn["Yesterday"] = 'Yesterday@javascript:gs.daysAgoStart(1)@javascript:gs.daysAgoEnd(1)'] = "Yesterday";
    DateRelativeOn[DateRelativeOn["Tomorrow"] = 'Tomorrow@javascript:gs.daysAgoStart(-1)@javascript:gs.daysAgoEnd(-1)'] = "Tomorrow";
    DateRelativeOn[DateRelativeOn["ThisWeek"] = 'This week@javascript:gs.beginningOfThisWeek()@javascript:gs.endOfThisWeek()'] = "ThisWeek";
    DateRelativeOn[DateRelativeOn["LastWeek"] = 'Last week@javascript:gs.beginningOfLastWeek()@javascript:gs.endOfLastWeek()'] = "LastWeek";
    DateRelativeOn[DateRelativeOn["NextWeek"] = 'Next week@javascript:gs.beginningOfNextWeek()@javascript:gs.endOfNextWeek()'] = "NextWeek";
    DateRelativeOn[DateRelativeOn["ThisMonth"] = 'This month@javascript:gs.beginningOfThisMonth()@javascript:gs.endOfThisMonth()'] = "ThisMonth";
    DateRelativeOn[DateRelativeOn["LastMonth"] = 'Last month@javascript:gs.beginningOfLastMonth()@javascript:gs.endOfLastMonth()'] = "LastMonth";
    DateRelativeOn[DateRelativeOn["NextMonth"] = 'Next month@javascript:gs.beginningOfNextMonth()@javascript:gs.endOfNextMonth()'] = "NextMonth";
    DateRelativeOn[DateRelativeOn["Last3months"] = 'Last 3 months@javascript:gs.monthsAgoStart(3)@javascript:gs.endOfThisMonth()'] = "Last3months";
    DateRelativeOn[DateRelativeOn["Last6months"] = 'Last 6 months@javascript:gs.monthsAgoStart(6)@javascript:gs.endOfThisMonth()'] = "Last6months";
    DateRelativeOn[DateRelativeOn["Last9months"] = 'Last 9 months@javascript:gs.monthsAgoStart(9)@javascript:gs.endOfThisMonth()'] = "Last9months";
    DateRelativeOn[DateRelativeOn["Last12months"] = 'Last 12 months@javascript:gs.monthsAgoStart(12)@javascript:gs.endOfThisMonth()'] = "Last12months";
    DateRelativeOn[DateRelativeOn["ThisQuarter"] = 'This quarter@javascript:gs.beginningOfThisQuarter()@javascript:gs.endOfThisQuarter()'] = "ThisQuarter";
    DateRelativeOn[DateRelativeOn["LastQuarter"] = 'Last quarter@javascript:gs.quartersAgoStart(1)@javascript:gs.quartersAgoEnd(1)'] = "LastQuarter";
    DateRelativeOn[DateRelativeOn["Last2quarters"] = 'Last 2 quarters@javascript:gs.quartersAgoStart(1)@javascript:gs.endOfThisQuarter()'] = "Last2quarters";
    DateRelativeOn[DateRelativeOn["NextQuarter"] = 'Next quarter@javascript:gs.quartersAgoStart(-1)@javascript:gs.quartersAgoEnd(-1)'] = "NextQuarter";
    DateRelativeOn[DateRelativeOn["Next2quarters"] = 'Next 2 quarters@javascript:gs.quartersAgoStart(-1)@javascript:gs.quartersAgoEnd(-2)'] = "Next2quarters";
    DateRelativeOn[DateRelativeOn["ThisYear"] = 'This year@javascript:gs.beginningOfThisYear()@javascript:gs.endOfThisYear()'] = "ThisYear";
    DateRelativeOn[DateRelativeOn["NextYear"] = 'Next year@javascript:gs.beginningOfNextYear()@javascript:gs.endOfNextYear()'] = "NextYear";
    DateRelativeOn[DateRelativeOn["LastYear"] = 'Last year@javascript:gs.beginningOfLastYear()@javascript:gs.endOfLastYear()'] = "LastYear";
    DateRelativeOn[DateRelativeOn["Last2years"] = 'Last 2 years@javascript:gs.beginningOfLastYear()@javascript:gs.endOfThisYear()'] = "Last2years";
    DateRelativeOn[DateRelativeOn["Last7days"] = 'Last 7 days@javascript:gs.daysAgoStart(7)@javascript:gs.daysAgoEnd(0)'] = "Last7days";
    DateRelativeOn[DateRelativeOn["Last30days"] = 'Last 30 days@javascript:gs.daysAgoStart(30)@javascript:gs.daysAgoEnd(0)'] = "Last30days";
    DateRelativeOn[DateRelativeOn["Last60days"] = 'Last 60 days@javascript:gs.daysAgoStart(60)@javascript:gs.daysAgoEnd(0)'] = "Last60days";
    DateRelativeOn[DateRelativeOn["Last90days"] = 'Last 90 days@javascript:gs.daysAgoStart(90)@javascript:gs.daysAgoEnd(0)'] = "Last90days";
    DateRelativeOn[DateRelativeOn["Last120days"] = 'Last 120 days@javascript:gs.daysAgoStart(120)@javascript:gs.daysAgoEnd(0)'] = "Last120days";
    DateRelativeOn[DateRelativeOn["CurrentHour"] = 'Current hour@javascript:gs.hoursAgoStart(0)@javascript:gs.hoursAgoEnd(0)'] = "CurrentHour";
    DateRelativeOn[DateRelativeOn["LastHour"] = 'Last hour@javascript:gs.hoursAgoStart(1)@javascript:gs.hoursAgoEnd(1)'] = "LastHour";
    DateRelativeOn[DateRelativeOn["Last2hours"] = 'Last 2 hours@javascript:gs.hoursAgo(2)@javascript:gs.hoursAgo(0)'] = "Last2hours";
    DateRelativeOn[DateRelativeOn["CurrentMinute"] = 'Current minute@javascript:gs.minutesAgoStart(0)@javascript:gs.minutesAgoEnd(0)'] = "CurrentMinute";
    DateRelativeOn[DateRelativeOn["LastMinute"] = 'Last minute@javascript:gs.minutesAgoStart(1)@javascript:gs.minutesAgoEnd(1)'] = "LastMinute";
    DateRelativeOn[DateRelativeOn["Last15minutes"] = 'Last 15 minutes@javascript:gs.minutesAgoStart(15)@javascript:gs.minutesAgoEnd(0)'] = "Last15minutes";
    DateRelativeOn[DateRelativeOn["Last30minutes"] = 'Last 30 minutes@javascript:gs.minutesAgoStart(30)@javascript:gs.minutesAgoEnd(0)'] = "Last30minutes";
    DateRelativeOn[DateRelativeOn["Last45minutes"] = 'Last 45 minutes@javascript:gs.minutesAgoStart(45)@javascript:gs.minutesAgoEnd(0)'] = "Last45minutes";
    DateRelativeOn[DateRelativeOn["OneYearAgo"] = 'One year ago@javascript:gs.monthsAgo(12)@javascript:gs.endOfThisMonth()'] = "OneYearAgo";
    DateRelativeOn[DateRelativeOn["LastFiscalQuarter"] = 'Last Fiscal Quarter@javascript:gs.beginningOfLastSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')@javascript:gs.endOfLastSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')'] = "LastFiscalQuarter";
    DateRelativeOn[DateRelativeOn["ThisFiscalQuarter"] = 'This Fiscal Quarter@javascript:gs.beginningOfThisSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')@javascript:gs.endOfThisSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')'] = "ThisFiscalQuarter";
    DateRelativeOn[DateRelativeOn["NextFiscalQuarter"] = 'Next Fiscal Quarter@javascript:gs.beginningOfNextSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')@javascript:gs.endOfNextSchedulePeriod(\'b198ae11d7222100738dc0da9e6103d7\')'] = "NextFiscalQuarter";
})(DateRelativeOn = exports.DateRelativeOn || (exports.DateRelativeOn = {}));
var TimePeriods;
(function (TimePeriods) {
    TimePeriods[TimePeriods["Hours"] = 'hour'] = "Hours";
    TimePeriods[TimePeriods["Days"] = 'day'] = "Days";
    TimePeriods[TimePeriods["Weeks"] = 'week'] = "Weeks";
    TimePeriods[TimePeriods["Months"] = 'month'] = "Months";
    TimePeriods[TimePeriods["Quarters"] = 'quarter'] = "Quarters";
    TimePeriods[TimePeriods["Years"] = 'year'] = "Years";
})(TimePeriods = exports.TimePeriods || (exports.TimePeriods = {}));
var TimeDirection;
(function (TimeDirection) {
    TimeDirection[TimeDirection["Before"] = 'before'] = "Before";
    TimeDirection[TimeDirection["After"] = 'after'] = "After";
    TimeDirection[TimeDirection["BeforeOrAfter"] = 'before or after'] = "BeforeOrAfter";
})(TimeDirection = exports.TimeDirection || (exports.TimeDirection = {}));
//# sourceMappingURL=Utils.js.map