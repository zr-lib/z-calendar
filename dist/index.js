/**
 * 日历生成
 * @param initialDate 2020/5/1
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Calendar(initialDate) {
        this.description = '排列按照星期日~星期六';
        this.initialDate = initialDate; // 获取的日期
        this.year = '';
        this.month = '';
        this.monthList = [];
        this.today = '';
        this.init();
    }
    exports.default = Calendar;
    Calendar.prototype = {
        constructor: Calendar,
        init: function () {
            var _a = this.getDateParams(this.initialDate), _year = _a._year, _month = _a._month;
            if (!_year || !_month) {
                return console.warn('初始化日期可选，请传递正确的格式，如2020/5/1');
            }
            this.year = _year;
            this.month = _month;
            this.today = new Date().toLocaleDateString();
            var monthDate1 = this.year + "/" + this.month + "/1"; // 1号
            this.generate(0, monthDate1);
        },
        // 生成按星期分组的月份日历
        generate: function generate(week, monthDate1) {
            if (week === void 0) { week = 0; }
            var _a = this.getDateParams(monthDate1), _day = _a._day, _date = _a._date, dateString = _a.dateString;
            var date = _date;
            for (var i = 0; i < 7; i++) {
                if (!this.monthList[week])
                    this.monthList[week] = [];
                if (i <= _day) {
                    // i < _day: 第一周，1号前
                    this.monthList[week].push({
                        year: i < _day ? '' : this.year,
                        month: i < _day ? '' : this.month,
                        date: i < _day ? '' : date,
                        dateString: i < _day ? '' : dateString,
                    });
                }
                else {
                    var tomorrow = this.getDateString(this.year, this.month, date + 1);
                    var valid = this.validDate(tomorrow);
                    // valid === false 最后一周，当月最后一天之后
                    this.monthList[week].push({
                        year: valid ? this.year : '',
                        month: valid ? this.month : '',
                        date: valid ? ++date : '',
                        dateString: valid ? tomorrow : '',
                    });
                }
            }
            // 下周日，一周第一天为周日(new Date().getDay() === 0为周日)
            var nextWeekday1 = this.getDateString(this.year, this.month, date + 1);
            if (this.validDate(nextWeekday1) && week < 10) {
                this.generate(week + 1, nextWeekday1);
            }
        },
        // 校验日期是否有效，对应月份是否有这一天；dateString: 2020/05/01
        validDate: function (dateString) {
            var _Date = new Date(dateString);
            var date1 = Number(dateString.split('/')[2]);
            var date2 = new Date(dateString).getDate();
            return "" + _Date !== 'Invalid Date' && date1 === date2;
        },
        // @return 2020/05/01
        getDateString: function (year, month, date) {
            var _month = ("" + month).padStart(2, '0');
            var _date = ("" + date).padStart(2, '0');
            return year + "/" + _month + "/" + _date;
        },
        getDateParams: function (timestamp) {
            var _Date = timestamp ? new Date(timestamp) : new Date();
            var _year = _Date.getFullYear();
            var _month = _Date.getMonth() + 1;
            var _date = _Date.getDate();
            var _day = _Date.getDay();
            var dateString = this.getDateString(_year, _month, _date);
            return {
                _Date: _Date,
                _year: _year,
                _month: _month,
                _day: _day,
                _date: _date,
                dateString: dateString,
            };
        },
    };
});
