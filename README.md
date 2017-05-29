# Module for building ServiceNow encoded queries

Docs for formatting are [here](https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/use/using-lists/concept/c_EncodedQueryStrings.html)

## Usage

sysparm_query=activity_dueON2017-05-01@javascript:gs.dateGenerate('2017-05-01','start')@javascript:gs.dateGenerate('2017-05-01','end') // ON no time
sysparm_query=activity_dueNOTON2017-05-01@javascript:gs.dateGenerate('2017-05-01','start')@javascript:gs.dateGenerate('2017-05-01','end') // NOTON no time
sysparm_query=activity_due<javascript:gs.dateGenerate('2017-05-01','12:00:00') // BEFORE has time
sysparm_query=activity_due<=javascript:gs.dateGenerate('2017-05-01','12:00:00') // AT OR BEFORE has time
sysparm_query=activity_due>javascript:gs.dateGenerate('2017-05-01','12:00:00') // AFTER has time
sysparm_query=activity_due>=javascript:gs.dateGenerate('2017-05-01','12:00:00') // AT OR AFTER has time
sysparm_query=activity_dueBETWEENjavascript:gs.dateGenerate('2017-05-01','12:00:00')@javascript:gs.dateGenerate('2017-05-02','12:00:00')// BETWEEN has time

// Trend (sysparm_query=<field>DATEPART<label of selection>@javascript:gs.datePart(<part type>,<part value>,<comparitor>))
sysparm_query=activity_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','GE') // Trend on or after monday
sysparm_query=activity_dueDATEPARTJanuary@javascript:gs.datePart('month','jan','LE') // Trend on or before January
sysparm_query=activity_dueDATEPARTQuarter 1@javascript:gs.datePart('quarter','1','GT') // Trend after Quarter 1
sysparm_query=activity_dueDATEPART2015@javascript:gs.datePart('year','2015','LT') // Trend before 2015
sysparm_query=activity_dueDATEPARTWeek 0@javascript:gs.datePart('week','0','EE') // Trend on week 0
sysparm_query=activity_dueDATEPARTNoon hour@javascript:gs.datePart('hour','12','EE') // Trend on noon hour

// relative (sysparm_query=<field>RELATIVE<comparitor>@<time>@<direction>@<value>)
sysparm_query=activity_dueRELATIVEGE@hour@ago@60
sysparm_query=activity_dueRELATIVEGE@minute@ahead@60

sysparm_query=activity_dueISEMPTY // ISEMPTY
--------------------------ISNOTEMPTY
--------------------------ANYTHING

// is same (sysparm_query=<field>SAMEAS<field2>@<time>)
sysparm_query=activity_dueSAMEASdue_date@day

// is same (sysparm_query=<field>NSAMEAS<field2>@<time>)
sysparm_query=activity_dueSAMEASdue_date@day

// is more than (sysparm_query=<field>MORETHAN<field2>@<time>@<direction>@<value>)
sysparm_query=activity_dueMORETHANdue_date@day@before@60

// is less than (sysparm_query=<field>LESSTHAN<field2>@<time>@<direction>@<value>)
sysparm_query=activity_dueMORETHANdue_date@day@before@60

## Formats

Query structure

- AND (^)
- OR  (^OR)
- New OR Condition (^NQ)
- Related List Query (^RLQUERY<table>.<idfield>,<operator><value><conditions>^ENDRLQUERY)

Grouping:

^GROUPBY<field>

Types:

Implementing API through the following

- {0} - The field selected to filter
- {1} - The operator code
- {2} - The value or column selected to compare to
- {3} - The secondary value or column selected to compare to
- {4} - Date code, specific to extra information

- Related List Query
  - >=, >, <=, <. =, =00 (It means None), BETWEEN<lower>@<higher>

- Boolean
  - =

- Date
  - ON
    - sysparm_query=<field>ON<date>@javascript:gs.dateGenerate('<date>','start')@javascript:gs.dateGenerate('<date>','end')
    - sysparm_query=<field>ON<date>@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)
  - NOTON
    - sysparm_query=<field>NOTON<date>1@javascript:gs.dateGenerate('<date>','start')@javascript:gs.dateGenerate('<date>','end')
  - BEFORE
    - sysparm_query=<field><javascript:gs.dateGenerate('<date>','<time>')
  - AT OR BEFORE
    - sysparm_query=<field><=javascript:gs.dateGenerate('<date>','<time>')
  - AFTER
    - sysparm_query=<field>>javascript:gs.dateGenerate('<date>','<time>')
  - AT OR AFTER
    - sysparm_query=<field>>=javascript:gs.dateGenerate('<date>','<time>')
  - BETWEEN
    - sysparm_query=<field>BETWEENjavascript:gs.dateGenerate('<date>','<time>')@javascript:gs.dateGenerate('<date2>','<time2>')
  - TREND
    - sysparm_query=<field>DATEPART<label of selection>@javascript:gs.datePart(<part type>,<part value>,<comparitor>)
    - Labels
      - dayofweek
        - Capital full name
      - month
        - Capital full name
      - quarter
        - Quarter 1, Quarter 2, Quarter 3, Quarter 4
      - year
        - YYYY
      - week
        - Week <number (0-53)>
      - Time
        - Midnight hour
        - <number (1-11)> am hour
        - Noon hour
        - <number (1-11)> pm hour
    - part types
      - dayofweek, month, quarter, year, week, hour
    - part values
      - dayofweek
        - lowercase fullname of day eg. wednesday
      - month
        - 3 letter shorthand, or full name if number of chars <= 4
      - quarter
        - 1,2,3,4
      - year
        - YYYY
      - week
        - 0-53
      - hour
        - 0-23
    - comparitors
      - GE, LE, GT, LT, EE
  - Relative
    - sysparm_query=<field>RELATIVE<comparitor>@<time>@<direction>@<value>
    - comparitors
      - GE, LE, GT, LT, EE
    - times
      - hour, minute, dayofweek, month, quarter, year
    - Directions
      - ago, ahead
  - is empty, is not empty, anything
    -sysparm_query=<field>ISEMPTY
    -sysparm_query=<field>ISNOTEMPTY
    -sysparm_query=<field>ANYTHING
  - is same/ is not same
    - sysparm_query=<field>SAMEAS<field2>@<time>
    - sysparm_query=<field>NSAMEAS<field2>@<time>
    - times
      - day, week, month, quarter, year, hour
  - is more than/is less than
    - sysparm_query=<field>MORETHAN<field2>@<time>@<direction>@<value>
    - sysparm_query=<field>LESSTHAN<field2>@<time>@<direction>@<value>
    - times
      - day, week, month, quarter, year,hour
    - direction
      - before, after, before or after

- Options
  - is
    - <field>=<option value>
  - is not
    - <field>!=<option value>
  - IN
    - <field>IN<option value csv>
  - NOT IN
    - <field>NOT IN<option value csv>
  - contains
    -<field>LIKE<value>
  - starts with
    -<field>STARTSWITH<value>
  - ends with
    -<field>ENDSWITH<value>
  - not contains
    -<field>NOT LIKE<value>
  - anything
    -<field>ANYTHING
  - same as
    - <field>SAMEAS<field2>
  - is differnet
    - <field>NSAMEAS<field2>

- string
  - starts with
    - <field>STARTSWITH<value>
  - ends with
    - <field>ENDSWITH<value>
  - contains
    - <field>LIKE<value>
  - not contains
    - <field>NOT LIKE<value>
  - is
    - <field>=<option value>
  - is not
    - <field>!=<option value>
  - is empty
    - <field>ISEMPTY
  - is not empty
    - <field>ISNOTEMPTY
  - anything
    - <field>ANYTHING
  - IN
    - <field>IN<option value csv>
  - is empty string
    - <field>EMPTYSTRING
  - less than or is
    - <field><=<value>
  - greater than or is
    - <field>>=<value>
  - between
    - <field>BETWEEN<value1>@<value2>
  - same as
    - <field>SAMEAS<field2>
  - not same as
    - <field>NSAMEAS<field2>

  - IN
    - <field>IN<option value csv>
  - NOT IN
    - <field>NOT IN<option value csv>
  - anything
    - <field>ANYTHING
  - same as
    - <field>SAMEAS<field2>
  - is differnet
    - <field>NSAMEAS<field2>