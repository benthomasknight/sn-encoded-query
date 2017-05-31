"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IComparator_1 = require("./IComparator");
var TrendDirection;
(function (TrendDirection) {
    TrendDirection[TrendDirection["After"] = 'GT'] = "After";
    TrendDirection[TrendDirection["Before"] = 'LT'] = "Before";
    TrendDirection[TrendDirection["On"] = 'EE'] = "On";
    TrendDirection[TrendDirection["OnOrAfter"] = 'GE'] = "OnOrAfter";
    TrendDirection[TrendDirection["OnOrBefore"] = 'LE'] = "OnOrBefore";
})(TrendDirection = exports.TrendDirection || (exports.TrendDirection = {}));
var TrendDay;
(function (TrendDay) {
    TrendDay[TrendDay["Monday"] = 'monday'] = "Monday";
    TrendDay[TrendDay["Tuesday"] = 'tuesday'] = "Tuesday";
    TrendDay[TrendDay["Wednesday"] = 'wednesday'] = "Wednesday";
    TrendDay[TrendDay["Thursday"] = 'thursday'] = "Thursday";
    TrendDay[TrendDay["Friday"] = 'friday'] = "Friday";
    TrendDay[TrendDay["Saturday"] = 'saturday'] = "Saturday";
    TrendDay[TrendDay["Sunday"] = 'sunday'] = "Sunday";
})(TrendDay = exports.TrendDay || (exports.TrendDay = {}));
var TrendMonth;
(function (TrendMonth) {
    TrendMonth[TrendMonth["January"] = 'jan'] = "January";
    TrendMonth[TrendMonth["February"] = 'feb'] = "February";
    TrendMonth[TrendMonth["March"] = 'mar'] = "March";
    TrendMonth[TrendMonth["April"] = 'apr'] = "April";
    TrendMonth[TrendMonth["May"] = 'may'] = "May";
    TrendMonth[TrendMonth["June"] = 'june'] = "June";
    TrendMonth[TrendMonth["July"] = 'july'] = "July";
    TrendMonth[TrendMonth["August"] = 'aug'] = "August";
    TrendMonth[TrendMonth["September"] = 'sep'] = "September";
    TrendMonth[TrendMonth["October"] = 'oct'] = "October";
    TrendMonth[TrendMonth["November"] = 'nov'] = "November";
    TrendMonth[TrendMonth["December"] = 'dec'] = "December";
})(TrendMonth = exports.TrendMonth || (exports.TrendMonth = {}));
var TrendQuarter;
(function (TrendQuarter) {
    TrendQuarter[TrendQuarter["Quarter1"] = '1'] = "Quarter1";
    TrendQuarter[TrendQuarter["Quarter2"] = '2'] = "Quarter2";
    TrendQuarter[TrendQuarter["Quarter3"] = '3'] = "Quarter3";
    TrendQuarter[TrendQuarter["Quarter4"] = '4'] = "Quarter4";
})(TrendQuarter = exports.TrendQuarter || (exports.TrendQuarter = {}));
var TrendWeek;
(function (TrendWeek) {
    TrendWeek[TrendWeek["Week0"] = '0'] = "Week0";
    TrendWeek[TrendWeek["Week1"] = '1'] = "Week1";
    TrendWeek[TrendWeek["Week2"] = '2'] = "Week2";
    TrendWeek[TrendWeek["Week3"] = '3'] = "Week3";
    TrendWeek[TrendWeek["Week4"] = '4'] = "Week4";
    TrendWeek[TrendWeek["Week5"] = '5'] = "Week5";
    TrendWeek[TrendWeek["Week6"] = '6'] = "Week6";
    TrendWeek[TrendWeek["Week7"] = '7'] = "Week7";
    TrendWeek[TrendWeek["Week8"] = '8'] = "Week8";
    TrendWeek[TrendWeek["Week9"] = '9'] = "Week9";
    TrendWeek[TrendWeek["Week10"] = '10'] = "Week10";
    TrendWeek[TrendWeek["Week11"] = '11'] = "Week11";
    TrendWeek[TrendWeek["Week12"] = '12'] = "Week12";
    TrendWeek[TrendWeek["Week13"] = '13'] = "Week13";
    TrendWeek[TrendWeek["Week14"] = '14'] = "Week14";
    TrendWeek[TrendWeek["Week15"] = '15'] = "Week15";
    TrendWeek[TrendWeek["Week16"] = '16'] = "Week16";
    TrendWeek[TrendWeek["Week17"] = '17'] = "Week17";
    TrendWeek[TrendWeek["Week18"] = '18'] = "Week18";
    TrendWeek[TrendWeek["Week19"] = '19'] = "Week19";
    TrendWeek[TrendWeek["Week20"] = '20'] = "Week20";
    TrendWeek[TrendWeek["Week21"] = '21'] = "Week21";
    TrendWeek[TrendWeek["Week22"] = '22'] = "Week22";
    TrendWeek[TrendWeek["Week23"] = '23'] = "Week23";
    TrendWeek[TrendWeek["Week24"] = '24'] = "Week24";
    TrendWeek[TrendWeek["Week25"] = '25'] = "Week25";
    TrendWeek[TrendWeek["Week26"] = '26'] = "Week26";
    TrendWeek[TrendWeek["Week27"] = '27'] = "Week27";
    TrendWeek[TrendWeek["Week28"] = '28'] = "Week28";
    TrendWeek[TrendWeek["Week29"] = '29'] = "Week29";
    TrendWeek[TrendWeek["Week30"] = '30'] = "Week30";
    TrendWeek[TrendWeek["Week31"] = '31'] = "Week31";
    TrendWeek[TrendWeek["Week32"] = '32'] = "Week32";
    TrendWeek[TrendWeek["Week33"] = '33'] = "Week33";
    TrendWeek[TrendWeek["Week34"] = '34'] = "Week34";
    TrendWeek[TrendWeek["Week35"] = '35'] = "Week35";
    TrendWeek[TrendWeek["Week36"] = '36'] = "Week36";
    TrendWeek[TrendWeek["Week37"] = '37'] = "Week37";
    TrendWeek[TrendWeek["Week38"] = '38'] = "Week38";
    TrendWeek[TrendWeek["Week39"] = '39'] = "Week39";
    TrendWeek[TrendWeek["Week40"] = '40'] = "Week40";
    TrendWeek[TrendWeek["Week41"] = '41'] = "Week41";
    TrendWeek[TrendWeek["Week42"] = '42'] = "Week42";
    TrendWeek[TrendWeek["Week43"] = '43'] = "Week43";
    TrendWeek[TrendWeek["Week44"] = '44'] = "Week44";
    TrendWeek[TrendWeek["Week45"] = '45'] = "Week45";
    TrendWeek[TrendWeek["Week46"] = '46'] = "Week46";
    TrendWeek[TrendWeek["Week47"] = '47'] = "Week47";
    TrendWeek[TrendWeek["Week48"] = '48'] = "Week48";
    TrendWeek[TrendWeek["Week49"] = '49'] = "Week49";
    TrendWeek[TrendWeek["Week50"] = '50'] = "Week50";
    TrendWeek[TrendWeek["Week51"] = '51'] = "Week51";
    TrendWeek[TrendWeek["Week52"] = '52'] = "Week52";
    TrendWeek[TrendWeek["Week53"] = '53'] = "Week53";
})(TrendWeek = exports.TrendWeek || (exports.TrendWeek = {}));
var TrendHour;
(function (TrendHour) {
    TrendHour[TrendHour["MidnightHour"] = '0'] = "MidnightHour";
    TrendHour[TrendHour["OneAMHour"] = '1'] = "OneAMHour";
    TrendHour[TrendHour["TwoAMHour"] = '2'] = "TwoAMHour";
    TrendHour[TrendHour["ThreeAMHour"] = '3'] = "ThreeAMHour";
    TrendHour[TrendHour["FourAMHour"] = '4'] = "FourAMHour";
    TrendHour[TrendHour["FiveAMHour"] = '5'] = "FiveAMHour";
    TrendHour[TrendHour["SixAMHour"] = '6'] = "SixAMHour";
    TrendHour[TrendHour["SevenAMHour"] = '7'] = "SevenAMHour";
    TrendHour[TrendHour["EightAMHour"] = '8'] = "EightAMHour";
    TrendHour[TrendHour["NineAMHour"] = '9'] = "NineAMHour";
    TrendHour[TrendHour["TenAMHour"] = '10'] = "TenAMHour";
    TrendHour[TrendHour["ElevenAMHour"] = '11'] = "ElevenAMHour";
    TrendHour[TrendHour["Noonhour"] = '12'] = "Noonhour";
    TrendHour[TrendHour["OnePMHour"] = '13'] = "OnePMHour";
    TrendHour[TrendHour["TwoPMHour"] = '14'] = "TwoPMHour";
    TrendHour[TrendHour["ThreePMHour"] = '15'] = "ThreePMHour";
    TrendHour[TrendHour["FourPMHour"] = '16'] = "FourPMHour";
    TrendHour[TrendHour["FivePMHour"] = '17'] = "FivePMHour";
    TrendHour[TrendHour["SixPMHour"] = '18'] = "SixPMHour";
    TrendHour[TrendHour["SevenPMHour"] = '19'] = "SevenPMHour";
    TrendHour[TrendHour["EightPMHour"] = '20'] = "EightPMHour";
    TrendHour[TrendHour["NinePMHour"] = '21'] = "NinePMHour";
    TrendHour[TrendHour["TenPMHour"] = '22'] = "TenPMHour";
    TrendHour[TrendHour["ElevenPMHour"] = '23'] = "ElevenPMHour";
})(TrendHour = exports.TrendHour || (exports.TrendHour = {}));
var TrendYear;
(function (TrendYear) {
    TrendYear[TrendYear["Year2000"] = 2000] = "Year2000";
    TrendYear[TrendYear["Year2001"] = 2001] = "Year2001";
    TrendYear[TrendYear["Year2002"] = 2002] = "Year2002";
    TrendYear[TrendYear["Year2003"] = 2003] = "Year2003";
    TrendYear[TrendYear["Year2004"] = 2004] = "Year2004";
    TrendYear[TrendYear["Year2005"] = 2005] = "Year2005";
    TrendYear[TrendYear["Year2006"] = 2006] = "Year2006";
    TrendYear[TrendYear["Year2007"] = 2007] = "Year2007";
    TrendYear[TrendYear["Year2008"] = 2008] = "Year2008";
    TrendYear[TrendYear["Year2009"] = 2009] = "Year2009";
    TrendYear[TrendYear["Year2010"] = 2010] = "Year2010";
    TrendYear[TrendYear["Year2011"] = 2011] = "Year2011";
    TrendYear[TrendYear["Year2012"] = 2012] = "Year2012";
    TrendYear[TrendYear["Year2013"] = 2013] = "Year2013";
    TrendYear[TrendYear["Year2014"] = 2014] = "Year2014";
    TrendYear[TrendYear["Year2015"] = 2015] = "Year2015";
    TrendYear[TrendYear["Year2016"] = 2016] = "Year2016";
    TrendYear[TrendYear["Year2017"] = 2017] = "Year2017";
    TrendYear[TrendYear["Year2018"] = 2018] = "Year2018";
    TrendYear[TrendYear["Year2019"] = 2019] = "Year2019";
    TrendYear[TrendYear["Year2020"] = 2020] = "Year2020";
})(TrendYear = exports.TrendYear || (exports.TrendYear = {}));
var Trend = (function (_super) {
    __extends(Trend, _super);
    function Trend(field, direction, value) {
        return _super.call(this, field, direction, value) || this;
    }
    Trend.prototype.get = function () {
        return this.field + "DATEPART" + this.getPartLabel(this.value[1]) + '@' + this.getDateGenerationString();
    };
    Trend.prototype.getDateGenerationString = function () {
        return 'javascript:gs.datePart(\'' + this.getPartType(this.value[1].toString()) + '\',\'' + this.value[1].toString().toLowerCase() + '\',\'' + this.value[0] + '\')';
    };
    Trend.prototype.getPartType = function (type) {
        if (type in TrendHour) {
            return 'hour';
        }
        if (type in TrendDay) {
            return 'dayofweek';
        }
        if (type in TrendWeek) {
            return 'week';
        }
        if (type in TrendMonth) {
            return 'month';
        }
        if (type in TrendQuarter) {
            return 'quarter';
        }
        if (type in TrendYear) {
            return 'year';
        }
        throw new Error('Invalid trend type');
    };
    Trend.prototype.getPartLabel = function (type) {
        if (type in TrendHour) {
            return TrendHour[type];
        }
        if (type in TrendDay) {
            return TrendDay[type];
        }
        if (type in TrendWeek) {
            return TrendWeek[type];
        }
        if (type in TrendMonth) {
            return TrendMonth[type];
        }
        if (type in TrendQuarter) {
            return TrendQuarter[type];
        }
        if (type in TrendYear) {
            return TrendYear[type];
        }
        throw new Error('Invalid trend type');
    };
    return Trend;
}(IComparator_1.MultiValueComparator));
exports.Trend = Trend;
// sys_created_onDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','EE')
// sys_created_onDATEPARTNoon hour@javascript:gs.datePart('hour', '12','EE') 
//# sourceMappingURL=Trend.js.map