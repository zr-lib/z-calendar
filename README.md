# z-calendar
按月份生成的日历
一月按周分隔，一周以周日开始


## 一个栗子
vue-calendar
* [源码](https://github.com/zero9527/vue-calendar)
* [在线查看](https://zero9527.github.io/vue-calendar/)


## 使用
```js
import Calendar from 'z-calendar';
const { monthList } = new Calendar('2020/05');

// monthList 如下：
[
  [
    { "year": "", "month": "", "date": "", "dateString": "" },
    { "year": "", "month": "", "date": "", "dateString": "" },
    { "year": "", "month": "", "date": "", "dateString": "" },
    { "year": "", "month": "", "date": "", "dateString": "" },
    { "year": "", "month": "", "date": "", "dateString": "" },
    { "year": 2020, "month": 5, "date": 1, "dateString": "2020/05/01" },
    { "year": 2020, "month": 5, "date": 2, "dateString": "2020/05/02" }
  ],
  [
    { "year": 2020, "month": 5, "date": 3, "dateString": "2020/05/03" },
    { "year": 2020, "month": 5, "date": 4, "dateString": "2020/05/04" },
    { "year": 2020, "month": 5, "date": 5, "dateString": "2020/05/05" },
    { "year": 2020, "month": 5, "date": 6, "dateString": "2020/05/06" },
    { "year": 2020, "month": 5, "date": 7, "dateString": "2020/05/07" },
    { "year": 2020, "month": 5, "date": 8, "dateString": "2020/05/08" },
    { "year": 2020, "month": 5, "date": 9, "dateString": "2020/05/09" }
  ],
  [
    { "year": 2020, "month": 5, "date": 10, "dateString": "2020/05/10" },
    { "year": 2020, "month": 5, "date": 11, "dateString": "2020/05/11" },
    { "year": 2020, "month": 5, "date": 12, "dateString": "2020/05/12" },
    { "year": 2020, "month": 5, "date": 13, "dateString": "2020/05/13" },
    { "year": 2020, "month": 5, "date": 14, "dateString": "2020/05/14" },
    { "year": 2020, "month": 5, "date": 15, "dateString": "2020/05/15" },
    { "year": 2020, "month": 5, "date": 16, "dateString": "2020/05/16" }
  ],
  [
    { "year": 2020, "month": 5, "date": 17, "dateString": "2020/05/17" },
    { "year": 2020, "month": 5, "date": 18, "dateString": "2020/05/18" },
    { "year": 2020, "month": 5, "date": 19, "dateString": "2020/05/19" },
    { "year": 2020, "month": 5, "date": 20, "dateString": "2020/05/20" },
    { "year": 2020, "month": 5, "date": 21, "dateString": "2020/05/21" },
    { "year": 2020, "month": 5, "date": 22, "dateString": "2020/05/22" },
    { "year": 2020, "month": 5, "date": 23, "dateString": "2020/05/23" }
  ],
  [
    { "year": 2020, "month": 5, "date": 24, "dateString": "2020/05/24" },
    { "year": 2020, "month": 5, "date": 25, "dateString": "2020/05/25" },
    { "year": 2020, "month": 5, "date": 26, "dateString": "2020/05/26" },
    { "year": 2020, "month": 5, "date": 27, "dateString": "2020/05/27" },
    { "year": 2020, "month": 5, "date": 28, "dateString": "2020/05/28" },
    { "year": 2020, "month": 5, "date": 29, "dateString": "2020/05/29" },
    { "year": 2020, "month": 5, "date": 30, "dateString": "2020/05/30" }
  ],
  [
    { "year": 2020, "month": 5, "date": 31, "dateString": "2020/05/31" },
    { "year": "", "month": "", "date": "", "dateString": "" },
    { "year": "", "month": "", "date": "", "dateString": "" },
    { "year": "", "month": "", "date": "", "dateString": "" },
    { "year": "", "month": "", "date": "", "dateString": "" },
    { "year": "", "month": "", "date": "", "dateString": "" },
    { "year": "", "month": "", "date": "", "dateString": "" }
  ]
]
```
